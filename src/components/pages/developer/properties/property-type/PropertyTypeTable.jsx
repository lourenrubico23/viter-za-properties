import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { FaArchive, FaEdit } from "react-icons/fa";
import { MdDelete, MdRestore } from "react-icons/md";
import { useInView } from "react-intersection-observer";

import { queryDataInfinite } from "../../../../custom-hooks/queryDataInfinite";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "../../../../../store/StoreAction";
import SearchBar from "../../../../partials/SearchBar";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import TableLoading from "../../../../partials/spinners/TableLoading";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import {
  devApiVersion,
  getConvertStringToJSONparseData,
} from "../../../../helpers/functions-general";
import LoadMore from "../../../../partials/LoadMore";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import { StoreContext } from "../../../../../store/StoreContext";
import ModalArchive from "../../../../partials/modals/ModalArchive";
import ModalRestore from "../../../../partials/modals/ModalRestore";
import Status from "../../../../partials/Status";

const PropertyTypeTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");
  const [isArchiving, setIsArchiving] = React.useState(false);

  const [onSearch, setOnSearch] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const search = React.useRef({ value: "" });
  const { ref, inView } = useInView();

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["property-type", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${devApiVersion}/property-type/search`, // search endpoint
        `${devApiVersion}/property-type/page/${pageParam}`, // list endpoint
        store.isSearch, // search boolean
        { searchValue: search.current.value, id: "" } // search value
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd({ modal: true, modalCode: "propertytype" }));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.property_type_name);
    setIsId(item.property_type_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsData(item.property_type_name);
    setIsId(item.property_type_aid);
    setIsArchiving(true);
    setIsRestore(false);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsData(item.property_type_name);
    setIsId(item.property_type_aid);
    setIsArchiving(false);
    setIsRestore(true);
  };

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <div className="place-self-end">
        <SearchBar
          search={search}
          dispatch={dispatch}
          store={store}
          result={result?.pages}
          isFetching={isFetching}
          setOnSearch={setOnSearch}
          onSearch={onSearch}
        />
      </div>

      <div className=" shadow-md rounded-md overflow-y-auto min-h-full md:min-h-[calc(100vh-30px)] lg:max-h-[calc(90vh-150px)] mb-10 lg:mb-0 lg:min-h-0 relative">
        {isFetching && !isFetchingNextPage && status !== "pending" && (
          <FetchingSpinner />
        )}
        <table>
          <thead>
            <tr className="text-[black]">
              <th className="pl-2 w-[1rem]">#</th>
              <th>Status</th>
              <th>Name</th>
              <th>Description</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="relative">
            {(status === "pending" || result?.pages[0].data.length === 0) && (
              <tr className="text-center">
                <td colSpan="100%" className="p-10">
                  {status === "pending" ? <TableLoading /> : <NoData />}
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

            {result?.pages.map((page, key) => (
              <React.Fragment key={key}>
                {page?.data.map((item, key) => {
                  return (
                    <tr key={key} className="place-content-start text-[14px]">
                      <td className="pl-2 place-content-start">{counter++}</td>
                      <td>
                        {item.property_type_is_active === 1 ? (
                          <Status text="Active" />
                        ) : (
                          <Status text="Inactive" />
                        )}
                      </td>
                      <td className="place-content-start">
                        {item.property_type_name}
                      </td>
                      <td className="place-content-start">
                        {item.property_type_description}
                      </td>
                      <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0">
                        {item.property_type_is_active ? (
                          <>
                            <button
                              className="tooltip-action-table"
                              data-tooltip="Edit"
                              onClick={() => handleEdit(item)}
                            >
                              <FaEdit className="text-gray-600 text-[16px]" />
                            </button>
                            <button
                              className="tooltip-action-table"
                              data-tooltip="Archive"
                              onClick={() => handleArchive(item)}
                            >
                              <FaArchive className=" text-gray-600 text-[14px]" />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="tooltip-action-table"
                              data-tooltip="Restore"
                              onClick={() => handleRestore(item)}
                            >
                              <MdRestore className="text-gray-600 text-[18px]" />
                            </button>
                            <button
                              className="tooltip-action-table"
                              data-tooltip="Delete"
                              onClick={() => handleDelete(item)}
                            >
                              <MdDelete className="text-gray-600 text-[18px]" />
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <div className="place-self-center">
          <LoadMore
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
            result={result?.pages[0]}
            setPage={setPage}
            page={page}
            refView={ref}
          />
        </div>
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"property-type"}
          mysqlEndpoint={`${devApiVersion}/property-type/${id}`}
          item={isData}
        />
      )}
      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          mysqlEndpoint={`${devApiVersion}/property-type/active/${id}`}
          // msg={"Are you sure you want to archive this property type?"}
          successMsg={"Archived succesfully."}
          queryKey={"property-type"}
          item={isData}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`${devApiVersion}/property-type/active/${id}`}
          // msg={"Are you sure you want to restore this property type?"}
          successMsg={"Restored succesfully."}
          queryKey={"property-type"}
          item={isData}
        />
      )}
    </>
  );
};

export default PropertyTypeTable;
