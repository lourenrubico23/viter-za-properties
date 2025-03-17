import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import * as TiIcons from "react-icons/ti";
import { Link } from "react-router-dom";
import useQueryData from "../../custom-hooks/useQueryData";
import {
  devApiVersion,
  devBaseImgUrl,
  devNavUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  hexToRgb,
} from "../../helpers/functions-general";
import LoadImages from "../../partials/LoadImages";
import { FaFacebookF, FaInstagram, FaRegEnvelope } from "react-icons/fa";

const Navigation = () => {
  const [active, setActive] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const { data: linksData } = useQueryData(
    `${devApiVersion}/links`, // endpoint
    "get", // method
    "links" // key
  );

  const { data: contactNoData } = useQueryData(
    `${devApiVersion}/contactno`, // endpoint
    "get", // method
    "contactno" // key
  );

  const { data: logoData } = useQueryData(
    `${devApiVersion}/logo`, // endpoint
    "get", // method
    "logo" // key
  );

  const { data: colorsData } = useQueryData(
    `${devApiVersion}/colors`, // endpoint
    "get", // method
    "colors" // key
  );

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/properties", label: "Properties" },
    { path: "/buyers", label: "Buyers" },
    { path: "/sellers", label: "Sellers" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact" },
  ];

  document
    .querySelector(":root")
    .style.setProperty(
      "--primary-color",
      hexToRgb(colorsData?.data[0]?.colors_primary || "")
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--secondary-color",
      hexToRgb(colorsData?.data[0]?.colors_secondary || "")
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--accent-color",
      hexToRgb(colorsData?.data[0]?.colors_accent || "")
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--light-color",
      hexToRgb(colorsData?.data[0]?.colors_light || "")
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--dark-color",
      hexToRgb(colorsData?.data[0]?.colors_dark || "")
    );

  React.useEffect(() => {
    // Get the current path and set it as active when the component mounts
    const currentPath = window.location.pathname;
    setActive(currentPath);
  }, []); // Runs only once when the component mounts

  return (
    <>
      <div className="hidden lg:block bg-secondary h-[81px] place-content-center">
        <div className="customContainer text-light flex justify-between ">
          <ul className="flex items-center gap-8">
            {linksData?.data?.length > 0 &&
              (() => {
                const item = linksData.data[0];

                return (
                  <>
                    {item.links_facebook_title && (
                      <li>
                        <a
                          href={item.links_facebook_link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-lg"
                        >
                          <FaFacebookF />
                          <span className="text-xs">
                            {item.links_facebook_title || "Facebook"}
                          </span>
                        </a>
                      </li>
                    )}
                    {item.links_instagram_title && (
                      <li>
                        <a
                          href={item.links_instagram_link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-lg"
                        >
                          <FaInstagram />
                          <span className="text-xs">
                            {item.links_instagram_title || "Instagram"}
                          </span>
                        </a>
                      </li>
                    )}
                    {item.links_message_title && (
                      <li>
                        <a
                          href={item.links_message_link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-lg"
                        >
                          <FaRegEnvelope />
                          <span className="text-xs">
                            {item.links_message_title || "Message"}
                          </span>
                        </a>
                      </li>
                    )}
                  </>
                );
              })()}
          </ul>
          {linksData?.data?.length > 0 && linksData?.data[0]?.links_contact && (
            <h3 className="text-2xl">{linksData.data[0].links_contact}</h3>
          )}
        </div>
      </div>
      <div className="bg-primary h-[80px] place-content-center sticky top-0 z-50">
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

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden text-light text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Backdrop */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-secondary/30 z-40"
              onClick={() => setIsOpen(false)}
            ></div>
          )}

          {/* Navigation */}
          <nav
            className={`fixed top-0 right-0  h-full bg-primary text-[16px] font-hindRegular transform transition-transform duration-300 ease-in-out flex flex-col gap-12 z-50
            ${
              isOpen
                ? "translate-x-0 max-w-[500px] min-w-[300px]"
                : "translate-x-full "
            } lg:static lg:translate-x-0 lg:flex p-4 lg:p-0`}
          >
            <button
              className="lg:hidden text-light text-2xl focus:outline-none place-items-end"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen && <FaTimes />}
            </button>
            <ul className="flex flex-col lg:flex-row lg:justify-center space-y-6 lg:space-y-0 lg:space-x-8 p-6 lg:p-0">
              {navItems.map(({ path, label }, index) => (
                <li key={index}>
                  <Link
                    to={`${devNavUrl}${path}`}
                    onClick={() => {
                      setActive(path);
                      setIsOpen(false);
                    }}
                    className={`relative pb-1 transition duration-300 
          before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
          before:bg-secondary before:transition-transform before:duration-300 
          ${active === path ? "before:scale-x-100" : "before:scale-x-0"} 
          hover:before:scale-x-100`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="lg:hidden block text-xs justify-between bottom-0 my-28">
              <ul className="flex flex-col items-center gap-4 ">
                {linksData?.data.map((item, key) => {
                  const SelectedIcon = item.links_icons
                    ? icons[item.links_icons]
                    : null;
                  return (
                    <Link
                      key={key}
                      to={`${devNavUrl}${item.links_link}`}
                      target="_blank"
                    >
                      <div className="flex gap-2">
                        <span className="flex items-center gap-2 text-sm">
                          {SelectedIcon ? <SelectedIcon /> : "No icon selected"}
                        </span>
                        <li>{item.links_title}</li>
                      </div>
                    </Link>
                  );
                })}

                {contactNoData?.data.map((item, key) => (
                  <h3 className="text-lg" key={key}>
                    {item.contact_no_contact}
                  </h3>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
