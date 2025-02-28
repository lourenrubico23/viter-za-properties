import React from "react";
import { Link } from "react-router-dom";
import { devBaseImgUrl, devNavUrl } from "../../helpers/functions-general";
import { IoChevronDownSharp } from "react-icons/io5";
import { setIsUserOpen } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import { getUserType } from "../../helpers/login-functions";
import ModalChangePassword from "../../pages/developer/account/modal/ModalChangePassword";

const Navigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");
  const [isArchiving, setIsArchiving] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isOpenUser, setIsOpenUser] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("#header");
  const [isChangePassword, setIsChangePassword] = React.useState(false);
  const link = getUserType();
  const ref = React.useRef();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleUserOpen = () => {
    dispatch(setIsUserOpen(!store.isUserOpen));
  };

  const clickOutsideRef = (e) => {
    if (!ref.current?.contains(e.target)) {
      setOpen(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", clickOutsideRef);
    return () => document.addEventListener("click", clickOutsideRef);
  }, []);

  return (
    <>
      <div className="theNav bg-[#f5f5f3] w-[211px] h-screen fixed top-0 pl-4 z-50  border-customGray flex flex-col justify-between">
        <div className="theLogo mt-2 mb-14">
          <img
            src={`${devBaseImgUrl}/cards.webp`}
            alt=""
            className="w-[55px]"
          />
        </div>
        <div className="flex flex-col justify-between h-full overflow-y-auto overflow-x-hidden">
          <nav>
            <ul className="flex-col [&>li]:text-left [&>li]:text-[16px] font-semibold [&>li]:mb-[15px] ">
              <>
                <li
                  className={` flex justify-between items-center p-1 cursor-pointer
                  ${
                    menu === "user"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                  onClick={() => handleUserOpen()}
                >
                  <div className="nav flex items-center justify-between w-full">
                    <span className=" text-[14px] uppercase text-dark">
                      Users
                    </span>
                    <IoChevronDownSharp
                      className={`${
                        store.isUserOpen ? "" : "rotate-180"
                      } transition-all text-dark`}
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
                          ? "text-primary font-bold"
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
                          ? "text-primary font-bold"
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
            <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white text-sm font-semibold cursor-pointer">
              LR
            </div>
            {isOpen && (
              <div className="absolute top-8 ml-[50px] bg-dashSecondary shadow-lg flex flex-col gap-1 p-4 min-w-[180px] rounded-md">
                <p className="text-black font-rubikRegular text-sm font-semibold tracking-wide">
                  Louren Rubico
                </p>
                <a>
                  <span className="text-black text-xs">
                    louren.rubico@frontlinebusiness.com.ph
                  </span>
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
                  // onClick={() => handleLogout()}
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
