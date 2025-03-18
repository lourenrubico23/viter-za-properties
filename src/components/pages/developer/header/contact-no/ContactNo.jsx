import React from "react";
import { FaPlus } from "react-icons/fa";
import { setIsAdd } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import DashboardNav from "../../../../partials/dashboard/DashboardNav";
import Navigation from "../../../../partials/dashboard/Navigation";
import ModalError from "../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ContactNoTable from "./ContactNoTable";
import ModalAddContactNo from "./ModalAddContactNo";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { devApiVersion } from "../../../../helpers/functions-general";

const ContactNo = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState("");

  const {
    isFetching,
    error,
    isLoading,
    data: contactNoData,
  } = useQueryData(
    `${devApiVersion}/contactno`, // endpoint
    "get", // method
    "contactno" // key
  );

  const { data: logoData } = useQueryData(
    `${devApiVersion}/logo`, // endpoint
    "get", // method
    "logo" // key
  );

  const { data: propertyTypeData } = useQueryData(
    `${devApiVersion}/property-type`, // endpoint
    "get", // method
    "property-type" // key
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit("footerUpdate");
  };
  return (
    <>
      <div className=" bg-[#f5f5f3] ">
        <Navigation menu="footer" submenu="" />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardNav />
          <div className=" w-[calc(100%_-_10px)] pt-[65px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[60px] bg-dashPrimary z-[9]"></div>
            <div className="addShadowDash bg-[#f5f5f3] h-[90dvh]">
              <div className="p-7">
                <div className=" flex justify-between ">
                  <div className="text-sm text-[black] font-semibold">
                    <p>Footer</p>
                  </div>
                </div>
                <ContactNoTable
                  setItemEdit={setItemEdit}
                  handleAdd={handleAdd}
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

      {store.isAdd && <ModalAddContactNo itemEdit={itemEdit} contactNoData={contactNoData}/>}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ContactNo;
