import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import useQueryData from "../../../custom-hooks/useQueryData";
import { devApiVersion } from "../../../helpers/functions-general";
import { setIsAdd } from "../../../../store/StoreAction";
import Navigation from "../../../partials/dashboard/Navigation";
import DashboardNav from "../../../partials/dashboard/DashboardNav";
import LinksTable from "../header/links/LinksTable";
import LogoTable from "../header/logo/LogoTable";
import ContactNoTable from "../header/contact-no/ContactNoTable";
import ModalAddLinks from "../header/links/ModalAddLinks";
import ModalAddLogo from "../header/logo/ModalAddLogo";
import SellersBannerTable from "./banner/SellersBannerTable";
import ModalAddSellersBanner from "./banner/ModalAddSellersBanner";
import SellersContactUsTable from "./sellers-contactUs/SellersContactUsTable";
import ModalAddSellersContactUs from "./sellers-contactUs/ModalAddSellersContactUs";
import ModalAddContactNo from "../header/contact-no/ModalAddContactNo";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ModalError from "../../../partials/modals/ModalError";

const Sellers = () => {
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

  const { data: linksData } = useQueryData(
    `${devApiVersion}/links`, // endpoint
    "get", // method
    "links" // key
  );

  const { data: logoData } = useQueryData(
    `${devApiVersion}/logo`, // endpoint
    "get", // method
    "logo" // key
  );

  const { data: contactFormData } = useQueryData(
    `${devApiVersion}/contact-form`, // endpoint
    "get", // method
    "contact-form" // key
  );

  const { data: contactNoData } = useQueryData(
    `${devApiVersion}/contactno`, // endpoint
    "get", // method
    "contactno" // key
  );

  const { data: propertyTypeData } = useQueryData(
    `${devApiVersion}/property-type`, // endpoint
    "get", // method
    "property-type" // key
  );

  const handleAdd = () => {
    dispatch(setIsAdd({ modal: true, modalCode: "links" }));
    setItemEdit("linksUpdate");
  };

  const handleAddNav = () => {
    dispatch(setIsAdd({ modal: true, modalCode: "nav" }));
    setItemEdit("navigationUpdate");
  };

  const handleAddBanner = () => {
    dispatch(setIsAdd({ modal: true, modalCode: "sellers-banner" }));
    setItemEdit("homeBannerUpdate");
  };

  const handleAddContactUs = () => {
    dispatch(setIsAdd({ modal: true, modalCode: "sellers-contactUs" }));
    setItemEdit("ContactUsUpdate");
  };

  const handleAddFooter = () => {
    dispatch(setIsAdd({ modal: true, modalCode: "footer" }));
    setItemEdit("footerUpdate");
  };
  return (
    <>
      <div className=" bg-[#f5f5f3] ">
        <Navigation menu="sellers" submenu="" />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardNav />
          <div className=" w-[calc(100%_-_10px)] pt-[65px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[60px] bg-dashPrimary z-[9]"></div>
            <div className="addShadowDash bg-[#f5f5f3]">
              <div className="p-7 bg-light">
                <div className=" flex justify-between ">
                  <div className="text-sm text-[black] font-semibold">
                    <p>Sellers</p>
                  </div>
                </div>
                <LinksTable
                  setItemEdit={setItemEdit}
                  handleAdd={handleAdd}
                  linksData={linksData}
                />
                <LogoTable
                  setItemEdit={setItemEdit}
                  handleAddNav={handleAddNav}
                  logoData={logoData}
                  isFetching={isFetching}
                />
                <SellersBannerTable
                  setItemEdit={setItemEdit}
                  handleAddBanner={handleAddBanner}
                  bannerData={bannerData}
                  isFetching={isFetching}
                  isLoading={isLoading}
                />
                <SellersContactUsTable
                  handleAddContactUs={handleAddContactUs}
                  contactFormData={contactFormData}
                  isFetching={isFetching}
                  isLoading={isLoading}
                  linksData={linksData}
                  pageType={"Sellers"}
                  contactNoData={contactNoData}
                />
                <ContactNoTable
                  setItemEdit={setItemEdit}
                  handleAddFooter={handleAddFooter}
                  contactNoData={contactNoData}
                  isFetching={isFetching}
                  isLoading={isLoading}
                  logoData={logoData}
                  propertyTypeData={propertyTypeData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {store.isAdd?.modal && store.isAdd?.modalCode === "links" && (
        <ModalAddLinks itemEdit={itemEdit} linksData={linksData} />
      )}
      {store.isAdd?.modal && store.isAdd?.modalCode === "nav" && (
        <ModalAddLogo itemEdit={itemEdit} logoData={logoData} />
      )}
      {store.isAdd?.modal && store.isAdd?.modalCode === "sellers-banner" && (
        <ModalAddSellersBanner itemEdit={itemEdit} bannerData={bannerData} />
      )}
      {store.isAdd?.modal && store.isAdd?.modalCode === "sellers-contactUs" && (
        <ModalAddSellersContactUs
          itemEdit={itemEdit}
          contactFormData={contactFormData}
        />
      )}
      {store.isAdd?.modal && store.isAdd?.modalCode === "footer" && (
        <ModalAddContactNo itemEdit={itemEdit} contactNoData={contactNoData} />
      )}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Sellers;
