import React from "react";
import { FaPlus } from "react-icons/fa";
import { setIsAdd } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import DashboardNav from "../../../../partials/dashboard/DashboardNav";
import Navigation from "../../../../partials/dashboard/Navigation";
import ModalError from "../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import LogoTable from "./LogoTable";
import ModalAddLogo from "./ModalAddLogo";
import { devApiVersion } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";

const Logo = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState("");

  const {
    isFetching,
    error,
    isLoading,
    data: logoData,
  } = useQueryData(
    `${devApiVersion}/logo`, // endpoint
    "get", // method
    "logo" // key
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit("navigationUpdate");
  };
  return (
    <>
      <div className=" bg-[#f5f5f3] ">
        <Navigation menu="navigation" submenu="" />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardNav />
          <div className=" w-[calc(100%_-_10px)] pt-[65px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[60px] bg-dashPrimary z-[9]"></div>
            <div className="addShadowDash bg-[#f5f5f3] h-[90dvh]">
              <div className="p-7">
                <div className=" flex justify-between ">
                  <div className="text-sm text-[black] font-semibold">
                    <p>Navigation</p>
                  </div>
                </div>
                <LogoTable
                  setItemEdit={setItemEdit}
                  handleAdd={handleAdd}
                  logoData={logoData}
                  isFetching={isFetching}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {store.isAdd && <ModalAddLogo itemEdit={itemEdit} logoData={logoData} />}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Logo;
