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

const Links = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  return (
    <>
      <div className=" bg-[#f5f5f3] ">
        <Navigation menu="header" submenu="links" />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardNav  />
          <div className=" w-[calc(100%_-_10px)] pt-[65px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[60px] bg-dashPrimary z-[9]"></div>
            <div className="addShadowDash bg-[#f5f5f3] h-[90dvh]">
              <div className="p-7">
                <div className=" flex justify-between ">
                  <div className="text-sm text-[black] font-semibold">
                    <p>Links</p>
                  </div>
                  <button
                    className="flex items-center gap-1 text-[white] hover:underline py-1 px-2 bg-primary rounded-lg text-sm"
                    onClick={handleAdd}
                  >
                    <FaPlus />
                    Add
                  </button>
                </div>
                <LinksTable setItemEdit={setItemEdit} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {store.isAdd && <ModalAddLinks itemEdit={itemEdit} />}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Links;
