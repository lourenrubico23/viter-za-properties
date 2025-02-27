import React from "react";
import { copyrightYear } from "../helpers/functions-general";


const LoginFooter = () => {
  return (
    <>
      <div className="text-xs mt-12 grid place-items-center ">
        <p className="text-center ">
          &copy; {copyrightYear()} D' Container Cafe Hub
          <br /> All rights reserved.
        </p>
      </div>
    </>
  );
};

export default LoginFooter;
