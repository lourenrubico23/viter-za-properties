import React from "react";
import { StoreReducer } from "./StoreReducer";

const initVal = {
  error: false,
  success: false,
  isShow: false,
  hiddenSections: [],
  isAdd: { modal: false, code: "" },
  isArchive: { modal: false, code: "" },
  isRestore: { modal: false, code: "" },
  isDelete: { modal: false, code: "" },
  isSearch: false,
  isViewTab: false,
  isAccountUpdated: false,
  isCreatePassSuccess: false,
  isForgotPassSuccess: false,
  isLogin: false,
  isLogout: false,
  credentials: {},
};

const StoreContext = React.createContext();

const StoreProvider = (props) => {
  const [store, dispatch] = React.useReducer(StoreReducer, initVal);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
