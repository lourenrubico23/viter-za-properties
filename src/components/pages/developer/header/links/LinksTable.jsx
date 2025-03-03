import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { setIsAdd, setIsDelete } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import { devApiVersion } from "../../../../helpers/functions-general";
import SearchBar from "../../../../partials/SearchBar";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import TableLoading from "../../../../partials/spinners/TableLoading";
import useQueryData from "../../../../custom-hooks/useQueryData";

const LinksTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");

  const {
    isFetching,
    error,
    isLoading,
    data: linksData,
  } = useQueryData(
    `${devApiVersion}/links`, // endpoint
    "get", // method
    "links" // key
  );

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.links_title);
    setIsId(item.links_aid);
  };

  return (
    <>
      <div className=" shadow-md rounded-md overflow-y-auto max-h-[calc(100dvh-250px)] md:max-h-[calc(100dvh-240px)] lg:max-h-[calc(100dvh-210px)] mt-5 mb-10 lg:mb-0  relative">
        {isFetching && !isFetching && <FetchingSpinner />}
        <table>
          <thead>
            <tr className="text-[black]">
              <th className="pl-2 w-[1rem]">#</th>
              <th>Icon Name</th>
              <th>Title</th>
              <th>Link</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="relative">
            {(isLoading || linksData?.data.length === 0) && (
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
            {linksData?.data.map((item, key) => (
              <tr key={key} className="text-[14px]">
                <td className="pl-2 ">{counter++}.</td>
                <td className="">{item.links_icons}</td>
                <td className="">{item.links_title}</td>
                <td className="">{item.links_link}</td>
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
            ))}
          </tbody>
        </table>
      </div>

      {store.isDelete && (
        <ModalDelete
          mysqlEndpoint={`${devApiVersion}/links/${id}`}
          queryKey={"links"}
          item={isData}
        />
      )}
    </>
  );
};

export default LinksTable;
