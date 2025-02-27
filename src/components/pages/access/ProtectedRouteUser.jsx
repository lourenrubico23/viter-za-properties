import React from "react";
import { Navigate } from "react-router-dom";
import { queryData } from "../../custom-hooks/queryData";
import { setCredentials } from "../../../store/StoreAction";
import PageNotFound from "../../partials/PageNotFound";
import FetchingSpinner from "../../partials/spinners/FetchingSpinner";
import { devNavUrl } from "../../helpers/functions-general";
import { StoreContext } from "../../../store/StoreContext";

const ProtectedRouteUser = ({ children }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(true);
  const [isAuth, setIsAuth] = React.useState("");
  const zapropertiestoken = JSON.parse(
    localStorage.getItem("zapropertiestoken")
  );
  const [pageStatus, setPageStatus] = React.useState(false);

  React.useEffect(() => {
    const fetchLogin = async () => {
      const login = await queryData(`/v1/user/token`, "post", {
        token: zapropertiestoken.token,
      });

      const isUserKeyMatched =
        login.success && login.data.user_key === login.data.user_other_password;

      // check if the password from database is matched
      // to the password used to login
      // if not, logout the user

      if (isUserKeyMatched === false) {
        setLoading(false);
        setIsAuth("456");
        localStorage.removeItem("zapropertiestoken");
        return;
      }

      if (typeof login === "undefined" || !login.success) {
        setLoading(false);
        setIsAuth("456");
      } else {
        dispatch(
          setCredentials({
            ...login.data,
          })
        );

        console.log({ ...login.data });

        setIsAuth("123");
        setLoading(false);
        delete login.data.user_other_password;
        delete login.data.user_other_key;
        delete login.data.role_description;
        delete login.data.role_created;
        delete login.data.role_datetime;
      }
      if (
        !login.success
        // || login.data.role.toLowerCase() !== login.data.role_name.toLowerCase()
      ) {
        setPageStatus(true);
      }
    };

    if (zapropertiestoken !== null) {
      fetchLogin();
    } else {
      setLoading(false);
      localStorage.removeItem("zapropertiestoken");
      setIsAuth("456");
    }
  }, [dispatch]);

  if (pageStatus) {
    return <PageNotFound />;
  } else {
    return (
      <>
        {loading ? (
          <FetchingSpinner />
        ) : isAuth === "123" ? (
          children
        ) : isAuth === "456" ? (
          <Navigate to={`${devNavUrl}/login`} />
        ) : (
          <p>API end point error / Page not found.</p>
        )}
      </>
    );
  }
};

export default ProtectedRouteUser;
