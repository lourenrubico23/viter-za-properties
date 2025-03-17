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

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit("linksUpdate");
  };
  return (
    <>
      <div className=" bg-[#f5f5f3] ">
        <Navigation menu="header" submenu="" />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardNav />
          <div className=" w-[calc(100%_-_10px)] pt-[65px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[60px] bg-dashPrimary z-[9]"></div>
            <div className="addShadowDash bg-[#f5f5f3] h-[90dvh]">
              <div className="p-7">
                <div className=" flex justify-between ">
                  <div className="text-sm text-[black] font-semibold">
                    <p>Header</p>
                  </div>
                </div>
                <LinksTable
                  setItemEdit={setItemEdit}
                  handleAdd={handleAdd}
                  linksData={linksData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {store.isAdd && (
        <ModalAddLinks
          itemEdit={itemEdit}
          linksData={linksData}
        />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Links;
