import React from "react";
import { StoreContext } from "../../../../../store/StoreContext";
import { setIsAdd } from "../../../../../store/StoreAction";
import Navigation from "../../../../partials/dashboard/Navigation";
import DashboardNav from "../../../../partials/dashboard/DashboardNav";
import { FaPlus } from "react-icons/fa";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import PropertyStatusTable from "./PropertyStatusTable";
import ModalAddPropertyStatus from "./ModalAddPropertyStatus";

const PropertyStatus = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd({ modal: true, modalCode: "propertystatus" }));
    setItemEdit(null);
  };
  return (
    <>
      <div className=" bg-[#f5f5f3] ">
        <Navigation menu="properties" submenu="property-status" />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardNav menu="dashboard" />
          <div className=" w-[calc(100%_-_10px)] pt-[65px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[60px] bg-dashPrimary z-[9]"></div>
            <div className="addShadowDash bg-[#f5f5f3] h-[90dvh]">
              <div className="p-7">
                <div className=" flex justify-between ">
                  <div className="text-sm text-[black] font-semibold">
                    <p>Property Status</p>
                  </div>
                  <button
                    className="flex items-center gap-1 text-[white] hover:underline py-1 px-2 bg-primary rounded-lg text-sm"
                    onClick={handleAdd}
                  >
                    <FaPlus />
                    Add
                  </button>
                </div>
                <PropertyStatusTable setItemEdit={setItemEdit} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {store.isAdd?.modal && store.isAdd?.modalCode === "propertystatus" && (
        <ModalAddPropertyStatus itemEdit={itemEdit} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default PropertyStatus;
