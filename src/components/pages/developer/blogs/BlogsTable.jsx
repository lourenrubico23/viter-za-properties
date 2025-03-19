import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { useInView } from "react-intersection-observer";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "../../../../store/StoreAction";
import SearchBar from "../../../partials/SearchBar";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import TableLoading from "../../../partials/spinners/TableLoading";
import NoData from "../../../partials/spinners/NoData";
import ServerError from "../../../partials/spinners/ServerError";
import Status from "../../../partials/Status";
import { FaArchive, FaEdit } from "react-icons/fa";
import { MdDelete, MdRestore } from "react-icons/md";
import LoadMore from "../../../partials/LoadMore";
import ModalDelete from "../../../partials/modals/ModalDelete";
import ModalArchive from "../../../partials/modals/ModalArchive";
import ModalRestore from "../../../partials/modals/ModalRestore";
import {
  devApiVersion,
  formatDate,
  getConvertStringToJSONparseData,
} from "../../../helpers/functions-general";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "../../../custom-hooks/queryDataInfinite";

const BlogsTable = ({ setItemEdit }) => {
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
    queryKey: ["blogs", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v1/blogs/search`, // search endpoint
        `/v1/blogs/page/${pageParam}`, // list endpoint
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
    dispatch(setIsAdd({ modal: true, modalCode: "blogslist" }));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.blogs_title);
    setIsId(item.blogs_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsData(item.blogs_title);
    setIsId(item.blogs_aid);
    setIsArchiving(true);
    setIsRestore(false);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsData(item.blogs_title);
    setIsId(item.blogs_aid);
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

      <div className=" shadow-md rounded-md overflow-y-auto overflow-x-auto min-h-full md:min-h-[calc(100vh-30px)] lg:max-h-[calc(90vh-150px)] mb-10 lg:mb-0 lg:min-h-0 relative">
        {isFetching && !isFetchingNextPage && status !== "pending" && (
          <FetchingSpinner />
        )}
        <table className="overflow-x-auto">
          <thead>
            <tr className="text-[black]">
              <th className="pl-2 w-[1rem]">#</th>
              <th>Status</th>
              <th>Title</th>
              <th>Author</th>
              <th>Published Date</th>
              <th className="w-[10rem]">Brief Description</th>
              <th className="w-[10rem]">Body Section A</th>
              <th className="w-[10rem]">Body Section B</th>
              <th className="w-[10rem]">Body Section C</th>
              <th>Images</th>
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
                  const blogsImages =
                    getConvertStringToJSONparseData(item.blogs_img) || [];
                  return (
                    <tr key={key} className="place-content-start text-[14px]">
                      <td className="pl-2 place-content-start">{counter++}</td>
                      <td className="place-content-start">
                        {item.blogs_is_active === 1 ? (
                          <Status text="Active" />
                        ) : (
                          <Status text="Inactive" />
                        )}
                      </td>
                      <td className="place-content-start">
                        {item.blogs_title}
                      </td>
                      <td className="place-content-start">
                        {item.blogs_author}
                      </td>
                      <td className="place-content-start">
                        {`${formatDate(item.blogs_published_date)}`}
                      </td>
                      <td className="place-content-start">
                        {item.blogs_brief_description}
                      </td>
                      <td className="place-content-start">
                        {item.blogs_contents_a}
                      </td>
                      <td className="place-content-start">
                        {item.blogs_contents_b}
                      </td>
                      <td className="place-content-start">
                        {item.blogs_contents_c}
                      </td>
                      <td className="place-content-start">
                        <p className="line-clamp-5">
                          {blogsImages.map((img, index) => (
                            <span key={index} className="text-[12px]">
                              {img.name}
                            </span>
                          ))}
                        </p>
                      </td>
                      <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0">
                        {item.blogs_is_active ? (
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
          queryKey={"blogs"}
          mysqlEndpoint={`${devApiVersion}/blogs/${id}`}
          item={isData}
        />
      )}
      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          mysqlEndpoint={`${devApiVersion}/blogs/active/${id}`}
          // msg={"Are you sure you want to archive this property type?"}
          successMsg={"Archived succesfully."}
          queryKey={"blogs"}
          item={isData}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`${devApiVersion}/blogs/active/${id}`}
          // msg={"Are you sure you want to restore this property type?"}
          successMsg={"Restored succesfully."}
          queryKey={"blogs"}
          item={isData}
        />
      )}
    </>
  );
};

export default BlogsTable;
