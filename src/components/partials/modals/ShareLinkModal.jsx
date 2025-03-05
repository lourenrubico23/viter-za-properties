import React from "react";
import { TfiClose } from "react-icons/tfi";
import { StoreContext } from "../../../store/StoreContext";
import ModalWrapper from "./ModalWrapper";

const ShareLinkModal = ({
  propertyLink,
  setSearchParams,
  setIsPropertyLinkOpen,
  setPropertyLink,
  item,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [copied, setCopied] = React.useState(false);

  const handleClose = () => {
    setIsPropertyLinkOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const handleCopyLink = () => {
    if (propertyLink) {
      navigator.clipboard
        .writeText(propertyLink)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); 
        })
        .catch((err) => console.error("Failed to copy: ", err));
    }
  };

  console.log(copied);

  React.useEffect(() => {
    if (item?.list_name) {
      const link = `${
        window.location.origin
      }/properties?property=${item.list_name
        .replace(/\s+/g, "-")
        .toLowerCase()}`;
      setPropertyLink(link);
    }
  }, [item]);

  return (
    <>
      <ModalWrapper
        className={` bg-light  h-[250px] place-self-center `}
        handleClose={handleClose}
      >
        <div className="p-6 overflow-auto w-[550px] h-fit">
          <div className="flex justify-end">
            <TfiClose
              className="h-4 w-6 cursor-pointer "
              onClick={handleClose}
            />
          </div>
          <p className="pt-3 font-bold text-[16px]">
            Select Copy Link, then paste it where needed.
          </p>
          <div className="flex flex-col gap-6">
            <div className="pt-6">
              <p className="font-bold">Link</p>
              <p>{propertyLink}</p>
            </div>
            <button
              className="btn w-[140px] !py-0 !text-sm !h-[35px] !px-[20px] place-self-center"
              onClick={handleCopyLink}
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ShareLinkModal;
