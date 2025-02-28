import React from "react";
import { StoreContext } from "../../store/StoreContext";
import { devNavUrl } from "./functions-general";

// get user type
export const getUserType = () => {
  const { store } = React.useContext(StoreContext);
  let link = store.credentials.data.role_name.toLowerCase();
  return link;
};

// storage after login
export function setStorageRoute(jwt, isDev) {
  localStorage.setItem(
    "zapropertiestoken",
    JSON.stringify({ token: jwt, isDev })
  );
}

export const checkLocalStorage = () => {
  let zapropertiestoken = null;
  try {
    zapropertiestoken = JSON.parse(localStorage.getItem("zapropertiestoken"));
  } catch (error) {
    zapropertiestoken = null;
  }
  return zapropertiestoken;
};

export const checkRoleToRedirect = (navigate, data) => {
  data.role_is_developer === 1
    ? navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/`)
    : data.role_is_admin === 1
    ? navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/`)
    : navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/`);
};
