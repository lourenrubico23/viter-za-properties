export const setError = (val) => {
  return {
    type: "ERROR",
    payload: val,
  };
};
export const setIsShow = (val) => {
  return {
    type: "IS_SHOW",
    payload: val,
  };
};
export const setSuccess = (val) => {
  return {
    type: "SUCCESS",
    payload: val,
  };
};
export const setHiddenSections = (val) => {
  return {
    type: "SET_HIDDEN_SECTIONS",
    payload: val,
  };
};
export const setMessage = (val) => {
  return {
    type: "MESSAGE",
    payload: val,
  };
};
export const setIsAdd = (val) => {
  return {
    type: "IS_ADD",
    payload: val,
  };
};
export const setIsRestore = (val) => {
  return {
    type: "RESTORE",
    payload: val,
  };
};
export const setIsArchive = (val) => {
  return {
    type: "IS_ARCHIVE",
    payload: val,
  };
};
export const setIsDelete = (val) => {
  return {
    type: "IS_DELETE",
    payload: val,
  };
};
export const setIsSearch = (val) => {
  return {
    type: "IS_SEARCH",
    payload: val,
  };
};
export const setIsViewTab = (val) => {
  return {
    type: "VIEW_TAB",
    payload: val,
  };
};

export const setIsUserOpen = (val) => {
  return {
    type: "IS_USER_OPEN",
    payload: val,
  };
};

export const setIsOpenHeader = (val) => {
  return {
    type: "IS_OPEN_HEADER",
    payload: val,
  };
};

export const setIsOpenProperties = (val) => {
  return {
    type: "IS_OPEN_PROPERTIES",
    payload: val,
  };
};

export const setIsOpenBuyers = (val) => {
  return {
    type: "IS_OPEN_BUYERS",
    payload: val,
  };
};

export const setIsOpenSellers = (val) => {
  return {
    type: "IS_OPEN_SELLERS",
    payload: val,
  };
};

export const setIsOpenBlogs = (val) => {
  return {
    type: "IS_OPEN_BLOGS",
    payload: val,
  };
};

export const setIsOpenContact = (val) => {
  return {
    type: "IS_OPEN_CONTACT",
    payload: val,
  };
};

export const setCreatePassSuccess = (val) => {
  return {
    type: "IS_CREATE_PASS_SUCCCESS",
    payload: val,
  };
};

export const setForgotPassSuccess = (val) => {
  return {
    type: "IS_FORGOT_PASS_SUCCCESS",
    payload: val,
  };
};

export const setIsLogin = (val) => {
  return {
    type: "IS_LOGIN",
    payload: val,
  };
};

export const setIsLogout = (val) => {
  return {
    type: "IS_LOGOUT",
    payload: val,
  };
};

export const setIsAccountUpdated = (val) => {
  return {
    type: "IS_ACCOUNT_UPDATED",
    payload: val,
  };
};

export const setCredentials = (data) => {
  return {
    type: "CREDENTIALS",
    payload: {
      data,
    },
  };
};
