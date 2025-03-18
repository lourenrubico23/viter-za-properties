import React from "react";
import { StoreContext } from "../../../../../store/StoreContext";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { devApiVersion } from "../../../../helpers/functions-general";
import { setIsAdd } from "../../../../../store/StoreAction";
import Navigation from "../../../../partials/dashboard/Navigation";
import DashboardNav from "../../../../partials/dashboard/DashboardNav";
import HomeContactUsTable from "./HomeContactUsTable";
import ModalAddHomeContactUs from "./ModalAddHomeContactUs";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const HomeContactUs = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState("");

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

  const { data: linksData } = useQueryData(
    `${devApiVersion}/links`, // endpoint
    "get", // method
    "links" // key
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit("ContactUsUpdate");
  };

  return (
    <>
      <div className=" bg-[#f5f5f3] ">
        <Navigation menu="home" submenu="home-contact-us" />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardNav />
          <div className=" w-[calc(100%_-_10px)] pt-[65px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[60px] bg-dashPrimary z-[9]"></div>
            <div className="addShadowDash bg-[#f5f5f3] h-[100dvh]">
              <div className="p-7">
                <div className=" flex justify-between ">
                  <div className="text-sm text-[black] font-semibold">
                    <p>Contact Us</p>
                  </div>
                </div>
                <HomeContactUsTable
                  handleAdd={handleAdd}
                  contactFormData={contactFormData}
                  isFetching={isFetching}
                  isLoading={isLoading}
                  linksData={linksData}
                  pageType={"Home"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {store.isAdd && (
        <ModalAddHomeContactUs itemEdit={itemEdit}  contactFormData={contactFormData} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default HomeContactUs;
