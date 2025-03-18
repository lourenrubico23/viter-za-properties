import React from "react";
import { FaPlus } from "react-icons/fa";
import Navigation from "../../../../partials/dashboard/Navigation";
import DashboardNav from "../../../../partials/dashboard/DashboardNav";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { StoreContext } from "../../../../../store/StoreContext";
import { setIsAdd } from "../../../../../store/StoreAction";
import LinksTable from "./LinksTable";
import ModalAddLinks from "./ModalAddLinks";
import { devApiVersion } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import LogoTable from "../logo/LogoTable";
import ModalAddLogo from "../logo/ModalAddLogo";
import BannerTable from "../banner/BannerTable";
import ModalAddBanner from "../banner/ModalAddBanner";
import AboutTable from "../../about/AboutTable";
import ModalAddAbout from "../../about/ModalAddAbout";

const Links = () => {
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

  const handleAddAbout = () => {
    dispatch(setIsAdd({ modal: true, modalCode: "about" }));
    setItemEdit("aboutUpdate");
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
                <AboutTable
                  setItemEdit={setItemEdit}
                  handleAddAbout={handleAddAbout}
                  isFetching={isFetching}
                  isLoading={isLoading}
                  aboutData={aboutData}
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
      {store.isAdd?.modal && store.isAdd?.modalCode === "about" && (
        <ModalAddAbout itemEdit={itemEdit} aboutData={aboutData} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Links;
