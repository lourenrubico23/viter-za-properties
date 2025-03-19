import React from "react";
import { setIsAdd } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import useQueryData from "../../../custom-hooks/useQueryData";
import { devApiVersion } from "../../../helpers/functions-general";
import BlogList from "../../../partials/BlogList";
import DashboardNav from "../../../partials/dashboard/DashboardNav";
import Navigation from "../../../partials/dashboard/Navigation";
import ModalError from "../../../partials/modals/ModalError";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import Testimonials from "../../website/home/Testimonials";
import AboutTable from "../about/AboutTable";
import ModalAddAbout from "../about/ModalAddAbout";
import BannerTable from "../header/banner/BannerTable";
import ModalAddBanner from "../header/banner/ModalAddBanner";
import ContactNoTable from "../header/contact-no/ContactNoTable";
import ModalAddContactNo from "../header/contact-no/ModalAddContactNo";
import HomeContactUsTable from "../header/home-contactUs/HomeContactUsTable";
import ModalAddHomeContactUs from "../header/home-contactUs/ModalAddHomeContactUs";
import LinksTable from "../header/links/LinksTable";
import ModalAddLinks from "../header/links/ModalAddLinks";
import LogoTable from "../header/logo/LogoTable";
import ModalAddLogo from "../header/logo/ModalAddLogo";
import PropertiesList from "./PropertiesList";
import SellPropertyTable from "./sell-property/SellPropertyTable";
import ModalAddSellProperty from "./sell-property/ModalAddSellProperty";
import ModalAddBuyProperty from "./sell-property/ModalAddBuyProperty";

const Home = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState("");

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

  const { data: logoData } = useQueryData(
    `${devApiVersion}/logo`, // endpoint
    "get", // method
    "logo" // key
  );

  const { data: bannerData } = useQueryData(
    `${devApiVersion}/banner`, // endpoint
    "get", // method
    "banner" // key
  );

  const { data: aboutData } = useQueryData(
    `${devApiVersion}/about`, // endpoint
    "get", // method
    "about" // key
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

  const { data: sellPropertyData } = useQueryData(
    `${devApiVersion}/sell-property`, // endpoint
    "get", // method
    "sell-property" // key
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
    dispatch(setIsAdd({ modal: true, modalCode: "home-banner" }));
    setItemEdit("homeBannerUpdate");
  };

  const handleAddSellProperty = () => {
    dispatch(setIsAdd({ modal: true, modalCode: "sellproperties" }));
    setItemEdit("sellPropertyUpdate");
  };

  const handleAddBuyProperty = () => {
    dispatch(setIsAdd({ modal: true, modalCode: "buyproperties" }));
    setItemEdit("buyPropertyUpdate");
  };

  const handleAddAbout = () => {
    dispatch(setIsAdd({ modal: true, modalCode: "about" }));
    setItemEdit("aboutUpdate");
  };

  const handleAddContactForm = () => {
    dispatch(setIsAdd({ modal: true, modalCode: "home-contactUs" }));
    setItemEdit("ContactUsUpdate");
  };

  const handleAddFooter = () => {
    dispatch(setIsAdd({ modal: true, modalCode: "footer" }));
    setItemEdit("footerUpdate");
  };

  return (
    <>
      <div className=" bg-[#f5f5f3] ">
        <Navigation menu="home" submenu="" />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardNav />
          <div className=" w-[calc(100%_-_10px)] pt-[65px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[60px] bg-dashPrimary z-[9]"></div>
            <div className="addShadowDash bg-[#f5f5f3]">
              <div className="p-7 bg-light">
                <div className=" flex justify-between ">
                  <div className="text-sm text-[black] font-semibold">
                    <p>Home</p>
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
                <BannerTable
                  setItemEdit={setItemEdit}
                  handleAddBanner={handleAddBanner}
                  bannerData={bannerData}
                  isFetching={isFetching}
                  isLoading={isLoading}
                />
                <PropertiesList pageType="home" />

                <SellPropertyTable
                  setItemEdit={setItemEdit}
                  handleAddSellProperty={handleAddSellProperty}
                  handleAddBuyProperty={handleAddBuyProperty}
                  sellPropertyData={sellPropertyData}
                  isFetching={isFetching}
                  isLoading={isLoading}
                />

                <AboutTable
                  setItemEdit={setItemEdit}
                  handleAddAbout={handleAddAbout}
                  isFetching={isFetching}
                  isLoading={isLoading}
                  aboutData={aboutData}
                />
                <BlogList pageType="home" />
                <Testimonials />
                <HomeContactUsTable
                  handleAddContactForm={handleAddContactForm}
                  contactFormData={contactFormData}
                  isFetching={isFetching}
                  isLoading={isLoading}
                  linksData={linksData}
                  pageType={"Home"}
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
      {store.isAdd?.modal && store.isAdd?.modalCode === "home-banner" && (
        <ModalAddBanner itemEdit={itemEdit} bannerData={bannerData} />
      )}
      {store.isAdd?.modal && store.isAdd?.modalCode === "sellproperties" && (
        <ModalAddSellProperty
          itemEdit={itemEdit}
          sellPropertyData={sellPropertyData}
        />
      )}
      {store.isAdd?.modal && store.isAdd?.modalCode === "buyproperties" && (
        <ModalAddBuyProperty
          itemEdit={itemEdit}
          sellPropertyData={sellPropertyData}
        />
      )}
      {store.isAdd?.modal && store.isAdd?.modalCode === "about" && (
        <ModalAddAbout itemEdit={itemEdit} aboutData={aboutData} />
      )}
      {store.isAdd?.modal && store.isAdd?.modalCode === "home-contactUs" && (
        <ModalAddHomeContactUs
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

export default Home;
