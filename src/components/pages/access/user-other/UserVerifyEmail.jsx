import React from "react";
import { FaCheck } from "react-icons/fa";
import {
  devApiVersion,
  devBaseImgUrl,
  devNavUrl,
  getUrlParam,
} from "../../../helpers/functions-general";
import TableSpinner from "../../../partials/spinners/TableSpinner";
import PageNotFound from "../../../partials/PageNotFound";
import useQueryData from "../../../custom-hooks/useQueryData";

const UserVerifyEmail = () => {
  const key = getUrlParam().get("key");

  const { isLoading, data: changeEmail } = useQueryData(
    `/${devApiVersion}/user/verify-email/${key}`,
    "get", // method
    "user-change-email" // key
  );

  return (
    <>
      {isLoading ? (
        <TableSpinner />
      ) : changeEmail?.count === 0 || key === null || key === "" ? (
        <PageNotFound />
      ) : (
        <div
          className="w-full flex justify-center items-center"
          style={{ transform: "translateY(clamp(3rem,12vw,6rem))" }}
        >
          <div className="max-w-[340px] w-full p-4 py-5 rounded-md">
            <div className="relative flex gap-2 justify-center mb-5">
              <img
                src={`${devBaseImgUrl}/za-properties-logo.png `}
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
            <h2 className="text-base text-center">User - Success</h2>

            <div className="login-message flex justify-center items-center flex-col text-center ">
              <FaCheck className="text-5xl text-green-500 mb-5" />
              <p className="text-balance">
                Your email has been successfully changed! You can now login
                using your new email.
              </p>

              <a
                href={`${devNavUrl}/login`}
                className="btn btn-accent text-center mt-5 center-all text-[12px]"
              >
                Back to Login
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserVerifyEmail;
