import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  setIsOpenBlogs,
  setIsOpenBuyers,
  setIsOpenContact,
  setIsOpenHeader,
  setIsOpenProperties,
  setIsOpenSellers,
  setIsUserOpen,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import {
  devApiVersion,
  devBaseImgUrl,
  devNavUrl,
  hexToRgb,
} from "../../helpers/functions-general";
import { getUserType } from "../../helpers/login-functions";
import ModalChangePassword from "../../pages/developer/account/modal/ModalChangePassword";
import TableSpinner from "../spinners/TableSpinner";
import useQueryData from "../../custom-hooks/useQueryData";

const Navigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isChangePassword, setIsChangePassword] = React.useState(false);
  const link = getUserType();
  const ref = React.useRef();

  const isRoleDeveloper = store.credentials.data.role_is_developer == 1;
  const email = isRoleDeveloper
    ? store.credentials.data.developer_email
    : store.credentials.data.user_email;
  const fullname = isRoleDeveloper
    ? `${store.credentials.data.developer_lname}, ${store.credentials.data.developer_fname}`
    : `${store.credentials.data.user_last_name}, ${store.credentials.data.user_first_name}`;

  const { user_first_name, user_last_name } = store.credentials.data;
  const initials = `${user_last_name[0]}${user_first_name[0]}`;

  const {
    isFetching,
    error,
    data: colorsData,
  } = useQueryData(
    `${devApiVersion}/colors`, // endpoint
    "get", // method
    "colors" // key
  );

  const { data: webData } = useQueryData(
    `${devApiVersion}/web`, // endpoint
    "get", // method
    "web" // key
  );

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

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleUserOpen = () => {
    dispatch(setIsUserOpen(!store.isUserOpen));
  };

  const handleHeaderOpen = () => {
    dispatch(setIsOpenHeader(!store.isOpenHeader));
  };
  const handlePropertiesOpen = () => {
    dispatch(setIsOpenProperties(!store.isOpenProperties));
  };
  const handleBuyersOpen = () => {
    dispatch(setIsOpenBuyers(!store.isOpenBuyers));
  };
  const handleSellersOpen = () => {
    dispatch(setIsOpenSellers(!store.isOpenSellers));
  };
  const handleBlogsOpen = () => {
    dispatch(setIsOpenBlogs(!store.isOpenBlogs));
  };
  const handleContactOpen = () => {
    dispatch(setIsOpenContact(!store.isOpenContact));
  };

  const clickOutsideRef = (e) => {
    if (!ref.current?.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleLogout = () => {
    setIsLoading(true);
    localStorage.removeItem("zapropertiestoken");
    // roleIsDeveloper
    //   ? window.location.replace(`${devNavUrl}/developer/login`)
    //   :
    setTimeout(() => {
      window.location.replace(`${devNavUrl}/`);
    }, 2000);
  };

  React.useEffect(() => {
    document.addEventListener("click", clickOutsideRef);
    return () => document.addEventListener("click", clickOutsideRef);
  }, []);

  // website title and description
  React.useEffect(() => {
    if (webData?.data?.[0]) {
      document.title = webData.data[0].web_title;

      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          webData.data[0].web_description
        );
      }
    }
  }, [webData]);

  // console.log((document.title = webData?.data[0].web_title));

  return (
    <>
      {(isLoading || store.isAccountUpdated) && <TableSpinner />}

      <div className="theNav bg-[#f5f5f3] w-[211px] h-screen fixed top-0 pl-4 z-50  border-customGray flex flex-col justify-between">
        <div className="theLogo mt-5 mb-14">
          <img
            src={`${devBaseImgUrl}/za-logo-black.png`}
            alt=""
            className="w-[55px]"
          />
        </div>
        <div className="flex flex-col justify-between h-full overflow-y-auto overflow-x-hidden">
          <nav>
            <ul className="flex-col [&>li]:text-left [&>li]:text-[16px] font-semibold  ">
              <>
                <li
                  className={`flex justify-between items-center p-1 cursor-pointer text-dark ${
                    menu === "home"
                      ? "text-secondary underline underline-offset-4"
                      : ""
                  }`}
                  onClick={() => handleHeaderOpen()}
                >
                  <div className="nav flex items-center justify-between w-full">
                    <Link
                      className={`text-[14px] uppercase ${
                        menu === "home" ? "text-secondary" : "text-dark"
                      }`}
                      to={`${devNavUrl}/${link}/`}
                    >
                      Home
                    </Link>
                    <IoChevronDownSharp
                      className={`${
                        store.isOpenHeader ? "text-dark" : " rotate-180"
                      }  transition-all`}
                    />
                  </div>
                </li>

                <ul
                  className={`${
                    store.isOpenHeader ? "h-0 overflow-hidden" : "my-2"
                  } submenu ml-5`}
                >
                  <Link
                    className="!p-0"
                    to={`${devNavUrl}/${link}/home-client-reviews`}
                  >
                    <li
                      className={`text-xs my-2 border-transparent ${
                        submenu === "home-client-reviews"
                          ? "text-secondary font-bold"
                          : "border-none text-dark"
                      }`}
                    >
                      Client Reviews
                    </li>
                  </Link>
                </ul>

                <li
                  className={`flex justify-between items-center p-1 cursor-pointer text-dark ${
                    menu === "properties"
                      ? "text-secondary underline underline-offset-4"
                      : ""
                  }`}
                  onClick={() => handlePropertiesOpen()}
                >
                  <div className="nav flex items-center justify-between w-full">
                    <Link
                      className={`text-[14px] uppercase ${
                        menu === "properties" ? "text-secondary" : "text-dark"
                      }`}
                      to={`${devNavUrl}/${link}/properties`}
                    >
                      Properties
                    </Link>
                    <IoChevronDownSharp
                      className={`${
                        store.isOpenProperties ? "text-dark" : "rotate-180"
                      } transition-all`}
                    />
                  </div>
                </li>

                <ul
                  className={`${
                    store.isOpenProperties ? "h-0 overflow-hidden" : "my-2"
                  } submenu ml-5`}
                >
                  <Link
                    className="!p-0"
                    to={`${devNavUrl}/${link}/property-list`}
                  >
                    <li
                      className={`text-xs my-2 border-transparent ${
                        submenu === "property-list"
                          ? "text-secondary font-bold"
                          : "border-none text-dark"
                      }`}
                    >
                      Property List
                    </li>
                  </Link>
                  <Link
                    className="!p-0"
                    to={`${devNavUrl}/${link}/property-type`}
                  >
                    <li
                      className={`text-xs my-2 border-transparent ${
                        submenu === "property-type"
                          ? "text-secondary font-bold"
                          : "border-none text-dark"
                      }`}
                    >
                      Property Type
                    </li>
                  </Link>
                  <Link
                    className="!p-0"
                    to={`${devNavUrl}/${link}/property-status`}
                  >
                    <li
                      className={`text-xs my-2 border-transparent ${
                        submenu === "property-status"
                          ? "text-secondary font-bold"
                          : "border-none text-dark"
                      }`}
                    >
                      Property Status
                    </li>
                  </Link>
                  <Link
                    className="!p-0"
                    to={`${devNavUrl}/${link}/featured-properties`}
                  >
                    <li
                      className={`text-xs  border-transparent ${
                        submenu === "featured-properties"
                          ? "text-secondary font-bold"
                          : "border-none text-dark"
                      }`}
                    >
                      Featured Properties
                    </li>
                  </Link>
                </ul>

                {/* <li
                  className={`flex justify-between items-center p-1 cursor-pointer text-dark ${
                    menu === "buyers"
                      ? "text-secondary underline underline-offset-4"
                      : ""
                  }`}
                  onClick={() => handleBuyersOpen()}
                >
                  <div className="nav flex items-center justify-between w-full">
                    <Link
                      className={`text-[14px] uppercase ${
                        menu === "buyers" ? "text-secondary" : "text-dark"
                      }`}
                      to={`${devNavUrl}/${link}/buyers`}
                    >
                      buyers
                    </Link>
                  </div>
                </li> */}

                {/* <li
                  className={`flex justify-between items-center p-1 cursor-pointer text-dark ${
                    menu === "sellers"
                      ? "text-secondary underline underline-offset-4"
                      : ""
                  }`}
                  onClick={() => handleSellersOpen()}
                >
                  <div className="nav flex items-center justify-between w-full">
                    <Link
                      className={`text-[14px] uppercase ${
                        menu === "sellers" ? "text-secondary" : "text-dark"
                      }`}
                      to={`${devNavUrl}/${link}/sellers`}
                    >
                      sellers
                    </Link>
                  </div>
                </li> */}

                <li
                  className={`flex justify-between items-center p-1 cursor-pointer text-dark ${
                    menu === "blogs"
                      ? "text-secondary underline underline-offset-4"
                      : ""
                  }`}
                  onClick={() => handleBlogsOpen()}
                >
                  <div className="nav flex items-center justify-between w-full">
                    <Link
                      className={`text-[14px] uppercase ${
                        menu === "blogs" ? "text-secondary" : "text-dark"
                      }`}
                      to={`${devNavUrl}/${link}/blogs`}
                    >
                      blogs
                    </Link>
                    <IoChevronDownSharp
                      className={`${
                        store.isOpenBlogs ? "text-dark" : " rotate-180"
                      }  transition-all`}
                    />
                  </div>
                </li>

                <ul
                  className={`${
                    store.isOpenBlogs ? "h-0 overflow-hidden" : "my-2"
                  } submenu ml-5`}
                >
                  <Link className="!p-0" to={`${devNavUrl}/${link}/blogs-list`}>
                    <li
                      className={`text-xs my-2 border-transparent ${
                        submenu === "blogs-list"
                          ? "text-secondary font-bold"
                          : "border-none text-dark"
                      }`}
                    >
                      Blog List
                    </li>
                  </Link>
                </ul>

                <li
                  className={`flex justify-between items-center p-1 cursor-pointer text-dark ${
                    menu === "contact"
                      ? "text-secondary underline underline-offset-4"
                      : ""
                  }`}
                  onClick={() => handleContactOpen()}
                >
                  <div className="nav flex items-center justify-between w-full">
                    <Link
                      className={`text-[14px] uppercase ${
                        menu === "contact" ? "text-secondary" : "text-dark"
                      }`}
                      to={`${devNavUrl}/${link}/contact`}
                    >
                      contact
                    </Link>
                  </div>
                </li>

                <Link className="" to={`${devNavUrl}/${link}/notification`}>
                  <li
                    className={`text-[14px] uppercase  p-1 ${
                      menu === "notification"
                        ? "text-secondary underline underline-offset-4"
                        : "border-none text-dark"
                    }`}
                  >
                    Notification
                  </li>
                </Link>

                <li
                  className={`flex justify-between items-center p-1 cursor-pointer text-dark ${
                    menu === "user"
                      ? "text-secondary underline underline-offset-4"
                      : ""
                  }`}
                  onClick={() => handleUserOpen()}
                >
                  <div className="nav flex items-center justify-between w-full">
                    <span
                      className={`text-[14px] uppercase ${
                        menu === "user" ? "text-secondary" : "text-dark"
                      }`}
                    >
                      Users
                    </span>
                    <IoChevronDownSharp
                      className={`${
                        store.isUserOpen ? "text-dark" : "rotate-180"
                      } transition-all`}
                    />
                  </div>
                </li>

                <ul
                  className={`${
                    store.isUserOpen ? "h-0 overflow-hidden" : "my-2"
                  } submenu ml-5`}
                >
                  <Link className="!p-0" to={`${devNavUrl}/${link}/users`}>
                    <li
                      className={`text-xs  border-transparent ${
                        submenu === "users"
                          ? "text-secondary font-bold"
                          : "border-none text-dark"
                      }`}
                    >
                      User
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/${link}/roles`}>
                    <li
                      className={`text-xs my-2 border-transparent ${
                        submenu === "roles"
                          ? "text-secondary font-bold"
                          : "border-none text-dark"
                      }`}
                    >
                      Role
                    </li>
                  </Link>
                </ul>

                <li
                  className={`flex justify-between items-center p-1 cursor-pointer text-dark ${
                    menu === "settings"
                      ? "text-secondary underline underline-offset-4"
                      : ""
                  }`}
                >
                  <div className="nav flex items-center justify-between w-full">
                    <Link
                      className={`text-[14px] uppercase ${
                        menu === "settings" ? "text-secondary" : "text-dark"
                      }`}
                      to={`${devNavUrl}/${link}/settings`}
                    >
                      Settings
                    </Link>
                  </div>
                </li>
              </>
            </ul>
          </nav>
        </div>
        <div>
          <div
            className={`py-[18px] relative  ${isOpen && " border-accent"}`}
            onClick={handleOpen}
            ref={ref}
          >
            <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white text-sm font-semibold cursor-pointer uppercase">
              {initials}
            </div>
            {isOpen && (
              <div className="absolute top-8 ml-[50px] bg-dashSecondary shadow-lg flex flex-col gap-1 p-4 min-w-[180px] rounded-md">
                <p className="text-black font-rubikRegular text-sm font-semibold tracking-wide uppercase">
                  {fullname}
                </p>
                <a>
                  <span className="text-black text-xs lowercase">{email}</span>
                </a>
                <button
                  type="button"
                  className="text-black text-xs text-left hover:text-secondary"
                  onClick={() => setIsChangePassword(true)}
                >
                  Change Password
                </button>
                <button
                  type="button"
                  className="text-black text-xs text-left hover:text-secondary"
                  onClick={() => handleLogout()}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          <div className="border-t-[2px] border-dashAccent flex flex-col gap-2">
            <h5 className="mt-[10px] text-black text-sm">Powered by:</h5>
            <div className="w-[120px] h-[44px]">
              <img
                src={`${devBaseImgUrl}/logo-fbs.png`}
                alt=""
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {isChangePassword && (
        <ModalChangePassword setIsChangeAccountData={setIsChangePassword} />
      )}
    </>
  );
};

export default Navigation;
