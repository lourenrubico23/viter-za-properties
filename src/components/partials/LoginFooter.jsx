import React from "react";
import { copyrightYear } from "../helpers/functions-general";


const LoginFooter = () => {
  return (
    <>
      <div className="text-xs mt-12 grid place-items-center ">
        <p className="text-center ">
          &copy; {copyrightYear()} ZA Properties
          <br /> All rights reserved.
        </p>
      </div>
    </>
  );
};

export default LoginFooter;
