import React from "react";
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaRegEnvelope,
  FaTimes,
} from "react-icons/fa";
import { devBaseImgUrl, devNavUrl } from "../../helpers/functions-general";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [active, setActive] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    // Get the current path and set it as active when the component mounts
    const currentPath = window.location.pathname;
    setActive(currentPath);
  }, []); // Runs only once when the component mounts

  return (
    <>
      <div className="hidden lg:block bg-secondary h-[81px] place-content-center">
        <div className="customContainer text-light flex justify-between ">
          <ul className="flex items-center gap-8 ">
            <li>
              <a href="" className="flex items-center gap-2">
                <FaFacebookF className="text-lg" /> Like us on Facebook
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-2">
                <FaInstagram className="text-lg" /> Follow us on Instagram
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-2">
                <FaRegEnvelope className="text-lg" /> Message Us
              </a>
            </li>
          </ul>
          <h3 className="text-2xl">+63 917 653 1919</h3>
        </div>
      </div>
      <div className="bg-primary h-[80px] place-content-center sticky top-0 z-50">
        <div className="customContainer text-light flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <img
              src={`${devBaseImgUrl}/za-logo.png`}
              alt="Logo"
              className="h-10"
            />
            <div>
              <p className="text-lg font-hindBold">Zac Alfanta</p>
              <p className="text-xs font-hindRegular">Real Estate Broker</p>
            </div>
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
              {["/", "/Properties", "/Buyers", "/Sellers", "/Contact"].map(
                (path, index) => (
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
                    ${
                      active === path
                        ? "before:scale-x-100"
                        : "before:scale-x-0"
                    } 
                    hover:before:scale-x-100`}
                    >
                      {path.replace("/", "") || "Home"}
                    </Link>
                  </li>
                )
              )}
            </ul>

            <div className="lg:hidden block text-xs justify-between bottom-0 my-28">
              <ul className="flex flex-col items-center gap-4 ">
                <li>
                  <a href="" className="flex items-center gap-2">
                    <FaFacebookF className="text-sm" /> Like us on Facebook
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-2">
                    <FaInstagram className="text-sm" /> Follow us on Instagram
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-2">
                    <FaRegEnvelope className="text-sm" /> Message Us
                  </a>
                </li>
                <h3 className="text-lg">+63 917 653 1919</h3>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
