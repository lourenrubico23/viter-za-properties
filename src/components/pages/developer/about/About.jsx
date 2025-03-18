import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd } from "../../../../store/StoreAction";
import Navigation from "../../../partials/dashboard/Navigation";
import DashboardNav from "../../../partials/dashboard/DashboardNav";
import { FaPlus } from "react-icons/fa";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ModalError from "../../../partials/modals/ModalError";
import AboutTable from "./AboutTable";
import ModalAddAbout from "./ModalAddAbout";
import useQueryData from "../../../custom-hooks/useQueryData";
import { devApiVersion } from "../../../helpers/functions-general";

const About = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState("");

  const {
    isFetching,
    error,
    isLoading,
    data: aboutData,
  } = useQueryData(
    `${devApiVersion}/about`, // endpoint
    "get", // method
    "about" // key
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit("aboutUpdate");
  };
  return (
    <>
      <div className=" bg-[#f5f5f3] ">
        <Navigation menu="home" submenu="home-about" />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardNav />
          <div className=" w-[calc(100%_-_10px)] pt-[65px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[60px] bg-dashPrimary z-[9]"></div>
            <div className="addShadowDash bg-[#f5f5f3] h-[90dvh]">
              <div className="p-7">
                <div className=" flex justify-between ">
                  <div className="text-sm text-[black] font-semibold">
                    <p>About</p>
                  </div>
                </div>
                <AboutTable
                  setItemEdit={setItemEdit}
                  handleAdd={handleAdd}
                  isFetching={isFetching}
                  isLoading={isLoading}
                  aboutData={aboutData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {store.isAdd && (
        <ModalAddAbout itemEdit={itemEdit} aboutData={aboutData} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default About;
