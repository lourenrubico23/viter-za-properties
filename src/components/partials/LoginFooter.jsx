import React from "react";
import { copyrightYear } from "../helpers/functions-general";

const LoginFooter = () => {
  return (
    <>
      <div className="text-[10px] mt-12 grid place-items-center ">
        <p className="text-center text-[10px]">
          &copy; {copyrightYear()} ZA Properties All rights reserved.
        </p>
      </div>
    </>
  );
};

export default LoginFooter;
