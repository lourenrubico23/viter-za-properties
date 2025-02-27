import React from "react";
import DashboardNav from "./DashboardNav";


const Dashboard = ({ children }) => {
  return (
    <>
      <div className="wrapper bg-[#f5f5f3] h-[100dvh]">
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardNav menu="dashboard" />
          <div className=" w-[calc(100%_-_10px)] pt-[70px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[76px]  bg-[#f5f5f3] z-[9]"></div>
            <div className="addShadowDash bg-[#f5f5f3] h-[90dvh]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
