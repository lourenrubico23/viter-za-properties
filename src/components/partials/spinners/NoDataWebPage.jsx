import React from "react";
import { FaFolderOpen } from "react-icons/fa6";

const NoDataWebPage = () => {
  return (
    <>
      <div className="flex justify-center items-center text-center flex-col p-2">
        <div className="text-[100px] text-primary flex justify-center w-full">
          <FaFolderOpen />
        </div>
        <span className="font-bold text-secondary/50 text-2xl">No Data</span>
      </div>
    </>
  );
};

export default NoDataWebPage;
