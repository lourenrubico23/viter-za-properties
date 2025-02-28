import React from "react";

const ModalWrapperMenu = ({ children, className, handleClose }) => {
  return (
    <div className="fixed top-0 left-0 h-full w-full flex justify-center z-50">
      <div
        className={`backdrop bg-black/70 h-full w-full absolute top-0 left-0 z-[-1]`}
        onClick={handleClose}
      ></div>
      <div className={`modal-wrapper-menu ${className}`}>{children}</div>
    </div>
  );
};

export default ModalWrapperMenu;
