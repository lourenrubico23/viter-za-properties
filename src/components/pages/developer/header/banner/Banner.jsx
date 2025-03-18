import React from "react";
import { FaPlus } from "react-icons/fa";
import { setIsAdd } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import DashboardNav from "../../../../partials/dashboard/DashboardNav";
import Navigation from "../../../../partials/dashboard/Navigation";
import ModalError from "../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import BannerTable from "./BannerTable";
import ModalAddBanner from "./ModalAddBanner";
import { devApiVersion } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";

const Banner = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState("");

  const {
    isFetching,
    error,
    isLoading,
    data: bannerData,
  } = useQueryData(
    `${devApiVersion}/banner`, // endpoint
    "get", // method
    "banner" // key
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit("homeBannerUpdate");
  };
  return (
    <>
      <div className=" bg-[#f5f5f3] ">
        <Navigation menu="home" submenu="home-banner" />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardNav />
          <div className=" w-[calc(100%_-_10px)] pt-[65px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[60px] bg-dashPrimary z-[9]"></div>
            <div className="addShadowDash bg-[#f5f5f3] h-[90dvh]">
              <div className="p-7">
                <div className=" flex justify-between ">
                  <div className="text-sm text-[black] font-semibold">
                    <p>Banner</p>
                  </div>
                </div>
                <BannerTable
                  setItemEdit={setItemEdit}
                  handleAdd={handleAdd}
                  bannerData={bannerData}
                  isFetching={isFetching}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {store.isAdd && (
        <ModalAddBanner itemEdit={itemEdit} bannerData={bannerData} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Banner;
