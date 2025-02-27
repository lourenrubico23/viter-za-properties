import React from "react";

const ModalAddWrapper = ({
  children,
  className,
  handleClose,
  zIndex = "z-[999]",
}) => {
  return (
    <div
      className={`modal__wrapper fixed top-0 left-0 h-full w-full flex justify-end ${zIndex} `}
    >
      <div
        className={`backdrop bg-[black] opacity-30 h-full w-full absolute top-0 left-0 z-[-1]`}
        onClick={handleClose}
      ></div>
      <div className={`modal-wrapper ${className}`}>{children}</div>
    </div>
  );
};

export default ModalAddWrapper;
