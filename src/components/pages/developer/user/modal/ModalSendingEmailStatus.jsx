import ModalAddWrapper from "@/components/partials/modal/ModalAddWrapper";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import React from "react";

const ModalSendingEmailStatus = ({ queryCount, recipientList }) => {
  let sucessCount = queryCount;
  let totalCount = recipientList.length;
  let percentageValue = (sucessCount / totalCount) * 100;

  return (
    <ModalAddWrapper className={"max-w-[20rem] h-fit p-5 place-self-center"}>
      <div className="">
        <div className="flex flex-col items-center gap-7 my-6">
          <div className="flex items-center gap-5">
            <h3 className="text-sm">Sending, please wait...</h3>
            <ButtonSpinner color="text-black" />
          </div>
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
    </ModalAddWrapper>
  );
};

export default ModalSendingEmailStatus;
