import React from "react";
import { StoreContext } from "../../store/StoreContext";
import { devApiVersion } from "../helpers/functions-general";
import {
  checkLocalStorage,
  checkRoleToRedirect,
} from "../helpers/login-functions";
import { queryData } from "./queryData";
import { setIsLogin } from "../../store/StoreAction";

const useOtherLogin = (navigate) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loginLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    const fetchLogin = async () => {
      const login = await queryData(`${devApiVersion}/user/token`, "post", {
        token: checkLocalStorage().token,
      });

      if (typeof login === "undefined" || !login.success) {
        localStorage.removeItem("zapropertiestoken");
        setLoading(false);
      } else {
        setLoading(false);
        // console.log("useIsLogin", login.data);
        checkRoleToRedirect(navigate, login.data);
      }
    };
    if (
      checkLocalStorage() !== null &&
      checkLocalStorage().token !== undefined
    ) {
      fetchLogin();
      dispatch(setIsLogin(false));
    } else {
      setLoading(false);
      dispatch(setIsLogin(true));
    }
  }, []);

  return { loginLoading };
};

export default useOtherLogin;
