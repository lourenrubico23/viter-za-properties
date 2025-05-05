import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ModalError from "../../../partials/modals/ModalError";
import Navigation from "../../../partials/dashboard/Navigation";
import DashboardNav from "../../../partials/dashboard/DashboardNav";
import SettingsUpdate from "./SettingsUpdate";
import useQueryData from "../../../custom-hooks/useQueryData";
import { devApiVersion } from "../../../helpers/functions-general";

const Settings = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: webData } = useQueryData(
    `${devApiVersion}/web`, // endpoint
    "get", // method
    "web" // key
  );

  return (
    <>
      <div className=" bg-[#f5f5f3] ">
        <Navigation menu="settings" submenu="" />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardNav />
          <div className=" w-[calc(100%_-_10px)] pt-[65px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[60px] bg-dashPrimary z-[9]"></div>
            <div className="addShadowDash bg-[#f5f5f3] h-[90dvh]">
              <div className="p-7">
                <div className=" flex justify-between ">
                  <div className="text-sm text-[black] font-semibold">
                    <p>Settings</p>
                  </div>
                </div>
                <SettingsUpdate webData={webData} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Settings;
