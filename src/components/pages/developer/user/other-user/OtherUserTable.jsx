import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { FaEdit, FaKey, FaUserAltSlash } from "react-icons/fa";
import { MdDelete, MdRestore } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import { queryDataInfinite } from "../../../../custom-hooks/queryDataInfinite";
import { devApiVersion } from "../../../../helpers/functions-general";
import LoadMore from "../../../../partials/LoadMore";
import SearchBar from "../../../../partials/SearchBar";
import Status from "../../../../partials/Status";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import ModalRestore from "../../../../partials/modals/ModalRestore";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import TableLoading from "../../../../partials/spinners/TableLoading";
import ModalReset from "./modal/ModalReset";
import ModalSendingEmailStatus from "./modal/ModalSendingEmailStatus";
import ModalSentEmailSummary from "./modal/ModalSentEmailSummary";
import ModalSuspend from "./modal/ModalSuspend";

const OtherUserTable = ({
  setItemEdit,
  itemEdit,
  setEmailCount,
  setRecipientList,
  recipientList,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");
  const [isArchiving, setIsArchiving] = React.useState(false);
  const [isReset, setIsReset] = React.useState(false);

  const [onSearch, setOnSearch] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const search = React.useRef({ value: "" });
  const { ref, inView } = useInView();

  const [isSendingLoading, setIsSendingLoading] = React.useState(false);
  const [queryCount, setQueryCount] = React.useState(0);
  const [confirmSend, setConfirmSend] = React.useState(false);
  const [isSuccessSendingEmail, setIsSuccessSendingEmail] =
    React.useState(false);
  const [queryStatus, setQueryStatus] = React.useState(null);

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["user", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${devApiVersion}/user/search`, // search endpoint
        `${devApiVersion}/user/page/${pageParam}`, // list endpoint
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
    setIsData(item.user_email);
    setIsId(item.user_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsData(item.user_email);
    setIsId(item.user_aid);
    setIsArchiving(true);
    setIsRestore(false);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsData(item.user_email);
    setIsId(item.user_aid);
    setIsArchiving(false);
    setIsRestore(true);
  };

  const handleReset = (item) => {
    setIsReset(true);
    setIsId(item.user_aid);
    setIsData(item);
    // to get all the email
    const recipientEmails = Array.isArray(item.user_email)
      ? item.user_email
      : item.user_email
      ? [item.user_email]
      : [];

    setEmailCount(recipientEmails.length);
    setRecipientList(recipientEmails);
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
      <div className=" shadow-md rounded-md overflow-y-auto max-h-[calc(100dvh-250px)] md:max-h-[calc(100dvh-240px)] lg:max-h-[calc(100dvh-210px)] mb-10 lg:mb-0  relative">
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
                      {item.user_is_active === 1 ? (
                        <Status text="Active" />
                      ) : (
                        <Status text="Inactive" />
                      )}
                    </td>
                    <td className="capitalize">
                      {item.user_last_name}, {item.user_first_name}
                    </td>
                    <td className="">{item.user_email}</td>
                    <td className="">{item.role_name}</td>
                    <td className="flex items-center gap-3 justify-end">
                      {item.user_is_active ? (
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

      {store.isDelete && (
        <ModalDelete
          mysqlEndpoint={`${devApiVersion}/user/${id}`}
          queryKey={"user"}
          item={isData}
        />
      )}
      {store.isArchive && (
        <ModalSuspend
          mysqlEndpoint={`${devApiVersion}/user/active/${id}`}
          msg={"Are you sure you want to suspend this user?"}
          successMsg={"Suspended succesfully."}
          queryKey={"user"}
          email={isData}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          mysqlEndpoint={`${devApiVersion}/user/active/${id}`}
          msg={"Are you sure you want to restore this user?"}
          successMsg={"Restored succesfully."}
          queryKey={"user"}
          setIsRestore={setIsRestore}
        />
      )}
      {isReset && (
        <ModalReset
          mysqlApiReset={`${devApiVersion}/user/reset`}
          msg={"Are you sure you want to reset the password of this user?"}
          successMsg={
            "Reset succesfully. Please check your email to continue resetting password."
          }
          queryKey={"user"}
          setIsReset={setIsReset}
          dataItem={isData}
          recipientList={recipientList}
          setConfirmSend={setConfirmSend}
          setQueryCount={setQueryCount}
          setIsSendingLoading={setIsSendingLoading}
          setIsSuccessSendingEmail={setIsSuccessSendingEmail}
          setQueryStatus={setQueryStatus}
        />
      )}

      {confirmSend && (
        <ModalSendingEmailStatus
          recipientList={recipientList}
          queryCount={queryCount}
        />
      )}
      {isSuccessSendingEmail && (
        <ModalSentEmailSummary
          queryCount={queryCount}
          recipientList={recipientList}
          setIsSuccessSendingEmail={setIsSuccessSendingEmail}
          setQueryCount={setQueryCount}
          queryStatus={queryStatus}
          message={
            "The email has been sent successfully. Please check your inbox for your password reset instructions."
          }
        />
      )}
    </>
  );
};

export default OtherUserTable;
