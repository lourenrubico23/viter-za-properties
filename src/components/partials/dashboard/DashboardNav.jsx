import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { LuPaintbrushVertical } from "react-icons/lu";
import { Link } from "react-router-dom";
import { devApiVersion, devNavUrl } from "../../helpers/functions-general";
import useQueryData from "../../custom-hooks/useQueryData";
import ModalChangeColor from "./ModalChangeColor";

const DashboardNav = ({ menu }) => {
  const [isColorChange, setIsColorChange] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState("");

  const {
    isFetching,
    error,
    data: colorsData,
  } = useQueryData(
    `${devApiVersion}/colors`, // endpoint
    "get", // method
    "colors" // key
  );

  const handleAddColorChange = () => {
    setIsColorChange(true);
    setItemEdit("colorsUpdate");
  };

  return (
    <>
      <div className="profileHeader px-4 addShadow border-none bg-dashSecondary h-[45px] rounded-tl-lg rounded-tr-lg fixed top-[20px] w-[calc(100%_-_240px)] grid items-center z-[10]">
        <div className="flex justify-between  items-center ">
          <p className="font-semibold text-[14px] text-black">ZA Properties</p>
          <div className="flex items-center gap-4">
            <div>
              <Link
                className="tooltip-colors"
                data-tooltip="Color Palette"
                onClick={handleAddColorChange}
              >
                <LuPaintbrushVertical
                  className={`hover:text-black size-4 ${
                    menu === "color"
                      ? "text-black"
                      : "text-black/60 hover:text-black"
                  }`}
                />
              </Link>
            </div>

            <div>
              <Link
                to={`${devNavUrl}/`}
                className="tooltip-phone"
                data-tooltip="Go to Webpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsBoxArrowUpRight className="text-black size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isColorChange && (
        <ModalChangeColor
          setIsColorChange={setIsColorChange}
          itemEdit={itemEdit}
          colorsData={colorsData}
        />
      )}
    </>
  );
};

export default DashboardNav;
