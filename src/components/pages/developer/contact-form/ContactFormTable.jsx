import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { devApiVersion } from "../../../helpers/functions-general";
import useQueryData from "../../../custom-hooks/useQueryData";
import { setIsAdd, setIsDelete } from "../../../../store/StoreAction";
import ModalDelete from "../../../partials/modals/ModalDelete";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import ServerError from "../../../partials/spinners/ServerError";
import NoData from "../../../partials/spinners/NoData";
import TableLoading from "../../../partials/spinners/TableLoading";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";

const ContactFormTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");

  const {
    isFetching,
    error,
    isLoading,
    data: contactFormData,
  } = useQueryData(
    `${devApiVersion}/contact-form`, // endpoint
    "get", // method
    "contact-form" // key
  );

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.about_name);
    setIsId(item.about_aid);
  };
  return (
    <>
      <div className=" shadow-md rounded-md overflow-y-auto max-h-[calc(100dvh-250px)] md:max-h-[calc(100dvh-240px)] lg:max-h-[calc(100dvh-210px)] mt-5 mb-10 lg:mb-0  relative">
        {isFetching && !isFetching && <FetchingSpinner />}
        <table>
          <thead>
            <tr className="text-[black]">
              <th className="pl-2 w-[1rem]">#</th>
              <th>Page</th>
              <th>Title</th>
              <th>Description</th>
              <th>Form Description</th>
              <th>Name</th>
              <th>Address</th>
              <th>Facebook</th>
              <th>Instagram</th>
              <th>LinkedIn</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="relative">
            {(isLoading || contactFormData?.data.length === 0) && (
              <tr className="text-center">
                <td colSpan="100%" className="p-10">
                  {isLoading ? <TableLoading /> : <NoData />}
                </td>
              </tr>
            )}

            {error && (
              <tr className="text-center ">
                <td colSpan="100%" className="p-10">
                  <ServerError />
                </td>
              </tr>
            )}
            {contactFormData?.data.map((item, key) => {
              return (
                <tr key={key} className="text-[14px]">
                  <td className="pl-2 ">{counter++}.</td>
                  <td className="">{item.about_name}</td>
                  <td className="">
                    {aboutImage.map((img, index) => (
                      <p key={index} className="text-xs">
                        {img.name}
                      </p>
                    ))}
                  </td>

                  <td className="">{item.about_paragraph_a}</td>
                  <td className="">{item.about_paragraph_b}</td>
                  <td className="">{item.about_paragraph_c}</td>

                  <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0">
                    <button
                      className="tooltip-action-table"
                      data-tooltip="Edit"
                      onClick={() => handleEdit(item)}
                    >
                      <FaEdit className="text-gray-600 text-[16px]" />
                    </button>
                    <button
                      className="tooltip-action-table"
                      data-tooltip="Delete"
                      onClick={() => handleDelete(item)}
                    >
                      <MdDelete className="text-gray-600 text-[18px]" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {store.isDelete && (
        <ModalDelete
          mysqlEndpoint={`${devApiVersion}/contact-form/${id}`}
          queryKey={"contact-form"}
          item={isData}
        />
      )}
    </>
  );
};

export default ContactFormTable;
