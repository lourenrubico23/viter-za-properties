import React from "react";
import { StoreReducer } from "./StoreReducer";

const initVal = {
  error: false,
  success: false,
  isShow: false,
  hiddenSections: [],
  isAdd: false,
  isArchive: false,
  isRestore: false,
  isDelete: false,
  isSearch: false,
  isViewTab: false,
  isUserOpen: false,
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
