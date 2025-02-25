export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "IS_SHOW":
      return {
        ...state,
        isShow: action.payload,
      };
    case "SUCCESS":
      return {
        ...state,
        success: action.payload,
      };
    case "SET_HIDDEN_SECTIONS":
      return {
        ...state,
        hiddenSections: action.payload,
      };
    case "MESSAGE":
      return {
        ...state,
        message: action.payload,
      };
    case "IS_ADD":
      return {
        ...state,
        isAdd: action.payload,
      };

    case "RESTORE":
      return {
        ...state,
        isRestore: action.payload,
      };
    case "IS_ARCHIVE":
      return {
        ...state,
        isArchive: action.payload,
      };
    case "IS_DELETE":
      return {
        ...state,
        isDelete: action.payload,
      };
    case "IS_SEARCH":
      return {
        ...state,
        isSearch: action.payload,
      };
    case "VIEW_ADD":
      return {
        ...state,
        isViewAdd: action.payload,
      };
    case "IS_CREATE_PASS_SUCCCESS":
      return {
        ...state,
        isCreatePassSuccess: action.payload,
      };

    case "IS_FORGOT_PASS_SUCCCESS":
      return {
        ...state,
        isForgotPassSuccess: action.payload,
      };

    case "IS_LOGIN":
      return {
        ...state,
        isLogin: action.payload,
      };

    case "IS_LOGOUT":
      return {
        ...state,
        isLogout: action.payload,
      };

    case "IS_ACCOUNT_UPDATED":
      return {
        ...state,
        isAccountUpdated: action.payload,
      };

    case "CREDENTIALS":
      return {
        ...state,
        credentials: action.payload,
      };

    default:
      return state;
  }
};
