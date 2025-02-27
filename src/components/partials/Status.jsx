import React from "react";

const Status = ({ text }) => {
  return (
    <>
      <span
        className={` ${
          text === "Active"
            ? "bg-[#dcfce7] text-[#166534]  border border-[#bbf7d0] text-xs font-medium mr-2 px-2 py-0.5 rounded-md"
            : text === "Inactive"
            ? "bg-[#f9fafb] text-[#6b7280] border border-[#e5e7eb] text-xs font-medium mr-2 px-2 py-0.5 rounded-md"
            : ""
        }`}
      >
        {text}
      </span>
    </>
  );
};

export default Status;
