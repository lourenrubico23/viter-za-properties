import React from "react";
import { MdError } from "react-icons/md";
import { StoreContext } from "../../../store/StoreContext";
import { setError } from "../../../store/StoreAction";

const ModalError = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("-translate-y-60");

  const handleClose = () => {
    setAnimate("-translate-y-60");
    setTimeout(() => {
      dispatch(setError(false));
    }, 200);
  };

  React.useEffect(() => {
    setAnimate("");
    setTimeout(() => {
      handleClose();
    }, 3000);
  }, []);

  return (
    <>
      <div
        className={`drop-shadow-2xl fixed z-[99999999] top-10 left-1/2 -translate-x-1/2 flex item-center justify-between w-full gap-2 max-w-md p-4 text-dark bg-[white] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] transform duration-200 ease-in-out ${animate}`}
      >
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-[#ef4444] bg-red-100 rounded-lg">
            <MdError className="w-5 h-5" />
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ms-3 text-sm font-normal pr-4 text-[black]">
            {store.message}
          </div>
        </div>

        <button
          type="button"
          className="ms-auto -mx-1.5 bg-[white] text-[#9ca3af] hover:text-[#111827] rounded-lg focus:ring-[#d1d5db] p-1.5 hover:bg-[#f3f4f6] inline-flex items-center justify-center h-8 w-8"
          id="btnClose"
          onClick={handleClose}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ModalError;
