import { devNavUrl } from "./functions-general";

export const checkLocalStorage = () => {
  let dcontainercafetoken = null;
  try {
    dcontainercafetoken = JSON.parse(
      localStorage.getItem("dcontainercafetoken")
    );
  } catch (error) {
    dcontainercafetoken = null;
  }

  return dcontainercafetoken;
};

export const checkRoleToRedirect = (navigate, data) => {
  data.role_is_developer === 1
    ? navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/dashboard`)
    : data.role_is_admin === 1
    ? navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/dashboard`)
    : navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/dashboard`);
};
