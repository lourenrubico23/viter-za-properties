import React from "react";
import { HiPencil } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import LoadImages from "../../../../partials/LoadImages";

const LogoTable = ({ handleAddNav, logoData }) => {
  const defaultNavItems = [
    { path: "/", label: "" },
    { path: "/properties", label: "" },
    { path: "/buyers", label: "" },
    { path: "/sellers", label: "" },
    { path: "/blogs", label: "" },
    { path: "/contact", label: "" },
  ];

  // Extract labels dynamically if available
  const navItems = defaultNavItems.map((item, index) => {
    const dynamicLabel =
      logoData?.data?.[0]?.[`logo_nav_${String.fromCharCode(97 + index)}`]; // a, b, c, d...
    return {
      ...item,
      label: dynamicLabel || item.label, // Use dynamic label if available, otherwise use default
    };
  });

  return (
    <>
      <div className=" shadow-md overflow-y-auto lg:mb-0  relative">
        <div className="bg-primary h-[80px] place-content-center sticky top-0 ">
          <div className="customContainer text-light flex justify-between items-center">
            <div className="">
              {logoData?.data.map((item, key) => {
                const logoImage =
                  getConvertStringToJSONparseData(item.logo_image) || [];
                return (
                  <div key={key} className="flex gap-4 items-center">
                    {logoImage.map((image, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${image?.id}`}
                        alt="Logo"
                        className="h-12 md:h-[60px] object-cover"
                        key={index}
                      />
                    ))}
                    <div>
                      <p className="text-lg font-hindBold">{item.logo_name}</p>
                      <p className="text-xs font-hindRegular">
                        {item.logo_position}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation */}
            <nav
              className={`
          `}
            >
              <ul className="flex flex-col lg:flex-row lg:justify-center space-y-6 lg:space-y-0 lg:space-x-8 p-6 lg:p-0">
                {navItems.map(({ path, label }, index) => (
                  <li key={index}>
                    <Link to={`#`} className={`text-base`}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <a
            className="absolute cursor-pointer tooltip-header-nav right-1 top-2"
            data-tooltip="Edit contents"
            onClick={handleAddNav}
          >
            <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px]" />
          </a>
        </div>
      </div>
    </>
  );
};

export default LogoTable;
