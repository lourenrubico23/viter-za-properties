import ModalAddWrapper from "@/components/partials/modal/ModalAddWrapper";
import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ModalSentEmailSummary = ({
  queryCount,
  recipientList,
  setIsSuccessSendingEmail,
  setQueryCount,
  queryStatus,
  message,
}) => {
  let sucessCount = queryCount;
  let totalCount = recipientList.length;
  // let message = queryStatus?.success
  //   ? "Email successfully sent!"
  //   : queryStatus?.data.error;

  const handleClose = () => {
    setQueryCount(0);
    setIsSuccessSendingEmail(false);
  };

  return (
    <ModalAddWrapper className={"max-w-[20rem] h-fit p-5 place-self-center"}>
      <div className="">
        <div className="flex flex-col items-center gap-7 my-6">
          <div className="inline-flex items-center justify-center flex-shrink-0">
            {queryStatus?.success ? (
              <FaCheckCircle className="fill-[#22c55e] h-16 w-16" />
            ) : (
              <FaTimesCircle className="fill-[#dc2626] h-16 w-16" />
            )}
          </div>

          <h3 className="text-[12px] text-center">{message}</h3>

          {/* <span className="text-sm">
            {sucessCount} of {totalCount}
          </span> */}
          <button
            className="inline-block rounded-md w-full px-5 py-2 bg-primary text-white"
            onClick={() => handleClose()}
          >
            Close
          </button>
        </div>
      </div>
    </ModalAddWrapper>
  );
};

export default ModalSentEmailSummary;
