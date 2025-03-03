import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { setIsUserOpen } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import { devBaseImgUrl, devNavUrl } from "../../helpers/functions-general";
import { getUserType } from "../../helpers/login-functions";
import ModalChangePassword from "../../pages/developer/account/modal/ModalChangePassword";
import TableSpinner from "../spinners/TableSpinner";

const Navigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isOpenHeader, setIsOpenHeader] = React.useState(false);
  const [isOpenProperties, setIsOpenProperties] = React.useState(false);
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

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleUserOpen = () => {
    dispatch(setIsUserOpen(!store.isUserOpen));
  };
  const handleHeaderOpen = () => {
    setIsOpenHeader(!isOpenHeader);
  };
  const handlePropertiesOpen = () => {
    setIsOpenProperties(!isOpenProperties);
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
            <ul className="flex-col [&>li]:text-left [&>li]:text-[16px] font-semibold [&>li]:mb-[15px]  ">
              <>
                <li
                  className={`flex justify-between items-center p-1 cursor-pointer text-dark ${
                    menu === "header"
                      ? "text-secondary underline underline-offset-4"
                      : ""
                  }`}
                  onClick={() => handleHeaderOpen()}
                >
                  <div className="nav flex items-center justify-between w-full">
                    <span
                      className={`text-[14px] uppercase ${
                        menu === "header" ? "text-secondary" : "text-dark"
                      }`}
                    >
                      Header
                    </span>
                    <IoChevronDownSharp
                      className={`${
                        isOpenHeader ? "text-dark" : "text-secondary rotate-180"
                      } text-dark transition-all`}
                    />
                  </div>
                </li>

                <ul
                  className={`${
                    isOpenHeader ? "h-0 overflow-hidden" : "my-2"
                  } submenu ml-5`}
                >
                  <Link className="!p-0" to={`${devNavUrl}/${link}/links`}>
                    <li
                      className={`text-xs  border-transparent ${
                        submenu === "links"
                          ? "text-secondary font-bold"
                          : "border-none text-dark"
                      }`}
                    >
                      Links
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/${link}/contact-no`}>
                    <li
                      className={`text-xs my-2 border-transparent ${
                        submenu === "contact-no"
                          ? "text-secondary font-bold"
                          : "border-none text-dark"
                      }`}
                    >
                      Contact No.
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/${link}/logo`}>
                    <li
                      className={`text-xs my-2 border-transparent ${
                        submenu === "logo"
                          ? "text-secondary font-bold"
                          : "border-none text-dark"
                      }`}
                    >
                      Logo
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/${link}/banner`}>
                    <li
                      className={`text-xs my-2 border-transparent ${
                        submenu === "banner"
                          ? "text-secondary font-bold"
                          : "border-none text-dark"
                      }`}
                    >
                      Banner
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
                    <span
                      className={`text-[14px] uppercase ${
                        menu === "properties" ? "text-secondary" : "text-dark"
                      }`}
                    >
                      Properties
                    </span>
                    <IoChevronDownSharp
                      className={`${
                        isOpenProperties
                          ? "text-dark"
                          : "text-secondary rotate-180"
                      } text-dark transition-all`}
                    />
                  </div>
                </li>

                <ul
                  className={`${
                    isOpenProperties ? "h-0 overflow-hidden" : "my-2"
                  } submenu ml-5`}
                >
                  <Link
                    className="!p-0"
                    to={`${devNavUrl}/${link}/property-type`}
                  >
                    <li
                      className={`text-xs  border-transparent ${
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
                </ul>

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
                        store.isUserOpen
                          ? "text-dark"
                          : "text-secondary rotate-180"
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
              </>
            </ul>
          </nav>
        </div>
        <div>
          <div
            className={`py-[18px] relative ${isOpen && " border-black"}`}
            onClick={handleOpen}
            ref={ref}
          >
            {/* <span className="w-[40px] h-[40px]">
                <img src={`${devBaseImgUrl}/user.webp`} alt="" />
              </span> */}
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
                  className="text-black text-xs text-left hover:text-accent"
                  onClick={() => setIsChangePassword(true)}
                >
                  Change Password
                </button>
                <button
                  type="button"
                  className="text-black text-xs text-left hover:text-accent"
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
