import React from "react";
import ModalWrapperMenu from "../../../../../partials/modals/ModalWrapperMenu";
import ButtonSpinner from "../../../../../partials/spinners/ButtonSpinner";

const ModalSendingEmailStatus = ({ queryCount, recipientList }) => {
  let sucessCount = queryCount;
  let totalCount = recipientList.length;
  let percentageValue = (sucessCount / totalCount) * 100;

  return (
    <ModalWrapperMenu className={"max-w-[20rem] h-fit p-5 place-self-center"}>
      <div className="">
        <div className="flex flex-col items-center gap-7 my-6">
          <h3 className="text-sm">Sending, please wait...</h3>
          <div className="loader"></div>

          {/* <span className="text-sm">
            {sucessCount} of {totalCount}
          </span> */}
          <div className="w-full bg-gray-200 rounded-sm dark:bg-gray-400 h-5 relative">
            <div
              className="bg-green-700 text-xs text-gray-200 font-medium h-full rounded-sm duration-500 ease-linear flex items-center justify-center absolute left-0"
              style={{ width: `${percentageValue}%` }}
            >
              {Math.floor(percentageValue)}%
            </div>
          </div>
        </div>
      </div>
    </ModalWrapperMenu>
  );
};

export default ModalSendingEmailStatus;
