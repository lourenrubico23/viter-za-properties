import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { FaEdit, FaKey, FaUserAltSlash } from "react-icons/fa";
import { MdDelete, MdRestore } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { devApiVersion } from "../../../../helpers/functions-general";
import LoadMore from "../../../../partials/LoadMore";
import SearchBar from "../../../../partials/SearchBar";
import Status from "../../../../partials/Status";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import TableLoading from "../../../../partials/spinners/TableLoading";

import { queryDataInfinite } from "../../../../custom-hooks/queryDataInfinite";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";

const OtherUserTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");
  const [isArchiving, setIsArchiving] = React.useState(false);
  const [isReset, setIsReset] = React.useState(false);

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
    queryKey: ["user-other", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${devApiVersion}/user-other/search`, // search endpoint
        `${devApiVersion}/user-other/page/${pageParam}`, // list endpoint
        store.isSearch, // search boolean
        {
          searchValue: search.current.value,
          id: "",
          isFilter: false,
        }, // search value
        "post"
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
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.user_other_email);
    setIsId(item.user_other_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsData(item.user_other_email);
    setIsId(item.user_other_aid);
    setIsArchiving(true);
    setIsRestore(false);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsData(item.user_other_email);
    setIsId(item.user_other_aid);
    setIsArchiving(false);
    setIsRestore(true);
  };

  const handleReset = (item) => {
    setIsReset(true);
    setIsId(item.user_other_aid);
    setIsData(item);
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
              <th className=" w-[5rem]">Status</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
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
                {page?.data.map((item, key) => (
                  <tr key={key} className="text-[14px]">
                    <td className="pl-2 ">{counter++}.</td>
                    <td>
                      {item.user_other_is_active === 1 ? (
                        <Status text="Active" />
                      ) : (
                        <Status text="Inactive" />
                      )}
                    </td>
                    <td className="">{item.fullname}</td>
                    <td className="">{item.user_other_email}</td>
                    <td className="">{item.role_name}</td>
                    <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0 mr-2">
                      {item.user_other_is_active ? (
                        <>
                          <button
                            className="tooltip-action-table"
                            data-tooltip="Edit"
                            onClick={() => handleEdit(item)}
                          >
                            <FaEdit className="text-gray-600 text-[16px]" />
                          </button>
                          <button
                            type="button"
                            className="btn-action-table tooltip-action-table"
                            data-tooltip="Reset"
                            onClick={() => handleReset(item)}
                          >
                            <FaKey className="text-gray-600 text-[14px]" />
                          </button>
                          <button
                            className="tooltip-action-table"
                            data-tooltip="Suspend"
                            onClick={() => handleArchive(item)}
                          >
                            <FaUserAltSlash className=" text-gray-600 text-[15px]" />
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
                ))}
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
      {/* 
      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"user-other"}
          mysqlEndpoint={`${apiVersion}/user-other/${id}`}
          item={isData}
        />
      )}

      {store.isArchive && (
        <ModalSuspend
          mysqlApiArchive={`${apiVersion}/user-other/active/${id}`}
          msg={"Are you sure you want to suspend this user?"}
          successMsg={"Suspended succesfully."}
          queryKey={"user-other"}
          email={isData}
        />
      )}

      {store.isRestore && (
        <ModalRestore
          mysqlApiRestore={`${apiVersion}/user-other/active/${id}`}
          msg={"Are you sure you want to restore this user?"}
          successMsg={"Restored succesfully."}
          queryKey={"user-other"}
          setIsRestore={setIsRestore}
        />
      )}

      {isReset && (
        <ModalReset
          mysqlApiReset={`${apiVersion}/user-other/reset`}
          msg={"Are you sure you want to reset the password of this user?"}
          successMsg={
            "Reset succesfully. Please check your email to continue resetting password."
          }
          queryKey={"user-other"}
          setIsReset={setIsReset}
          dataItem={isData}
        />
      )} */}
    </>
  );
};

export default OtherUserTable;
