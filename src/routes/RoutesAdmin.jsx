import { devNavUrl, urlAdmin } from "../components/helpers/functions-general";
import ProtectedRouteUser from "../components/pages/access/ProtectedRouteUser";
import UserVerifyEmail from "../components/pages/access/user-other/UserVerifyEmail";
import OtherUser from "../components/pages/developer/user/other-user/OtherUser";
import Role from "../components/pages/developer/user/role/Role";
import Home from "../components/pages/website/home/Home";

export const RoutesAdmin = [
  {
    path: `${devNavUrl}/${urlAdmin}/`,
    element: (
      <ProtectedRouteUser>
        <OtherUser />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/users`,
    element: (
      <ProtectedRouteUser>
        <OtherUser />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/roles`,
    element: (
      <ProtectedRouteUser>
        <Role />
      </ProtectedRouteUser>
    ),
  },
  // {
  //   path: `${devNavUrl}/${urlAdmin}/create-pass`,
  //   element: (
  //     <ProtectedRouteUser>
  //       <UserVerifyEmail />
  //     </ProtectedRouteUser>
  //   ),
  // },
];
