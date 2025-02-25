import React from "react";
import { FaFacebookF, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { devBaseImgUrl } from "../../helpers/functions-general";

const Navigation = () => {
  const [active, setActive] = React.useState("Home");

  return (
    <>
      <div className=" bg-secondary h-[81px] place-content-center">
        <div className="customContainer text-light flex justify-between ">
          <ul className="flex items-center gap-8  [&>li]:text-xs [&>li]:flex [&>li]:gap-2 [&>li]:items-center  ">
            <li>
              <FaFacebookF className="text-lg" /> Like us on Facebook
            </li>
            <li>
              <FaInstagram className="text-lg" /> Follow us on Instagram
            </li>
            <li>
              <FaRegEnvelope className="text-lg" /> Message Us
            </li>
          </ul>
          <h3 className="text-2xl">+63 917 653 1919</h3>
        </div>
      </div>
      <div className=" bg-primary h-[80px] place-content-center">
        <div className="customContainer text-light flex justify-between items-center ">
          <img src={`${devBaseImgUrl}/za-logo.webp`} alt="" />
          <nav className="">
            <ul className="flex space-x-8 justify-center text-[16px]">
              {["Home", "Properties", "Buyers", "Sellers", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      onClick={() => setActive(item)}
                      className={`relative pb-1 transition duration-300
                        before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                        before:bg-secondary before:transition-transform before:duration-300 
                        ${
                          active === item
                            ? "before:scale-x-100"
                            : "before:scale-x-0"
                        }
                        hover:before:scale-x-100`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
