import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  devApiVersion,
  getConvertStringToJSONparseData,
} from "../../../helpers/functions-general";
import { setIsAdd, setIsDelete } from "../../../../store/StoreAction";
import TableLoading from "../../../partials/spinners/TableLoading";
import NoData from "../../../partials/spinners/NoData";
import ServerError from "../../../partials/spinners/ServerError";
import ModalDelete from "../../../partials/modals/ModalDelete";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import { StoreContext } from "../../../../store/StoreContext";

const AboutTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");

  const {
    isFetching,
    error,
    isLoading,
    data: aboutData,
  } = useQueryData(
    `${devApiVersion}/about`, // endpoint
    "get", // method
    "about" // key
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
              <th>Name</th>
              <th>Image</th>
              <th>Logo</th>
              <th>Paragraph 1</th>
              <th>Paragraph 2</th>
              <th>Paragraph 3</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="relative">
            {(isLoading || aboutData?.data.length === 0) && (
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
            {aboutData?.data.map((item, key) => {
              const aboutImage =
                getConvertStringToJSONparseData(item.about_img) || [];
              const logoImage =
                getConvertStringToJSONparseData(item.about_logo_img) || [];
              return (
                <tr key={key} className="text-[14px]">
                  <td className="pl-2 ">{counter++}.</td>
                  <td className="">{item.about_name}</td>
                  <td className="">
                    {aboutImage.map((img, index) => (
                      <p key={index} className="text-xs">{img.name}</p>
                    ))}
                  </td>
                  <td className="">
                    {logoImage.map((img, index) => (
                      <p key={index} className="text-xs">{img.name}</p>
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
          mysqlEndpoint={`${devApiVersion}/about/${id}`}
          queryKey={"about"}
          item={isData}
        />
      )}
    </>
  );
};

export default AboutTable;
