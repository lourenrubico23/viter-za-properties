import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { setIsAdd } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import { queryDataInfinite } from "../../../../custom-hooks/queryDataInfinite";
import { devApiVersion } from "../../../../helpers/functions-general";
import DashboardNav from "../../../../partials/dashboard/DashboardNav";
import Navigation from "../../../../partials/dashboard/Navigation";
import ModalError from "../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import FeaturedPropertiesTable from "./FeaturedPropertiesTable";
import ModalAddFeaturedProperties from "./ModalAddFeaturedProperties";

const FeaturedProperties = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [onSearch, setOnSearch] = React.useState(false);
  const search = React.useRef({ value: "" });

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["featured-properties", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${devApiVersion}/featured-properties/search`, // search endpoint
        `${devApiVersion}/featured-properties/page/${pageParam}`, // list endpoint
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

  const handleAdd = () => {
    dispatch(setIsAdd({ modal: true, modalCode: "featuredproperties" }));
    setItemEdit(null);
  };

  return (
    <>
      <div className=" bg-[#f5f5f3] ">
        <Navigation menu="properties" submenu="featured-properties" />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardNav menu="dashboard" />
          <div className=" w-[calc(100%_-_10px)] pt-[65px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[60px] bg-dashPrimary z-[9]"></div>
            <div className="addShadowDash bg-[#f5f5f3] h-[90dvh]">
              <div className="p-7">
                <div className=" flex justify-between ">
                  <div className="text-sm text-[black] font-semibold">
                    <p>Featured Properties</p>
                  </div>
                  <button
                    className="flex items-center gap-1 text-[white] hover:underline py-1 px-2 bg-primary rounded-lg text-sm disabled:bg-gray-400"
                    onClick={handleAdd}
                    disabled={result?.pages[0]?.data.length >= 6}
                  >
                    <FaPlus />
                    Add
                  </button>
                </div>
                <FeaturedPropertiesTable
                  setItemEdit={setItemEdit}
                  result={result}
                  fetchNextPage={fetchNextPage}
                  isFetchingNextPage={isFetchingNextPage}
                  status={status}
                  isFetching={isFetching}
                  setOnSearch={setOnSearch}
                  onSearch={onSearch}
                  error={error}
                  hasNextPage={hasNextPage}
                  search={search}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {store.isAdd?.modal &&
        store.isAdd?.modalCode === "featuredproperties" && (
          <ModalAddFeaturedProperties itemEdit={itemEdit} />
        )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default FeaturedProperties;
