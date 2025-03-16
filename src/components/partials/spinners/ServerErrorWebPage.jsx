import React from "react";
import { VscBracketError } from "react-icons/vsc";

const ServerErrorWebPage = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col p-2 text-center">
        <span className="text-[100px] text-primary">
          <VscBracketError />
        </span>
        <span className="font-bold text-secondary/50 text-2xl">
          Server Error
        </span>
      </div>
    </>
  );
};

export default ServerErrorWebPage;
