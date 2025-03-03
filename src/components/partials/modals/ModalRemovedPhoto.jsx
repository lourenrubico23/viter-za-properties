import React from "react";
import { FaQuestion } from "react-icons/fa";
import { GetFocus } from "../../helpers/functions-general";

const ModalRemovedPhoto = ({
  fileData = [],
  itemKey = null,
  itemProps = {},
  msg = "",
  setIsModalShow = () => {},
  setNewFile = () => {},
}) => {
  const [show, setShow] = React.useState("show");
  GetFocus("btnClose");

  const handleYes = async () => {
    const oldData = fileData?.filter((item, fileKey) => fileKey === itemKey);
    const newData = fileData?.filter((item, fileKey) => fileKey !== itemKey);
    let previousDelete = [...itemProps.values.pendingDeleteFile];
    if (oldData[0]?.id) previousDelete.push(JSON.stringify(oldData));
    itemProps.setFieldValue("pendingDeleteFile", previousDelete);
    setNewFile(newData);
    handleClose();
  };

  const handleClose = () => {
    setShow("");
    setTimeout(() => {
      setIsModalShow(false);
    }, 200);
  };

  return (
    <>
      <div
        className={`modal fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/50 z-[999] animate-fadeIn ${show}`}
      >
        <div className="p-1 w-[350px] animate-slideUp">
          <div className="bg-white p-6 pt-10 text-center rounded-lg">
            <FaQuestion className="my-2 mx-auto animate-bounce h-11 w-11 text-red-700" />
            <p className="text-sm">{msg}</p>
            {/* <span className="text-xs font-bold underline">{item}</span> */}
            <div className="flex items-center gap-4 pt-8">
              <button
                type="button"
                className="btn-modal-submit"
                onClick={() => handleYes()}
              >
                Remove
              </button>
              <button
                type="reset"
                className="btn-modal-cancel"
                onClick={handleClose}
                id="btnClose"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalRemovedPhoto;
