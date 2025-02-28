import { devNavUrl } from "../components/helpers/functions-general";
import OtherUserForgetPassword from "../components/pages/access/user-other/OtherUserForgetPassword";
import OtherUserLogin from "../components/pages/access/user-other/OtherUserLogin";
import UserCreatePassword from "../components/pages/access/user-other/UserCreatePassword";
import UserVerifyEmail from "../components/pages/access/user-other/UserVerifyEmail";

export const RoutesAccess = [
  {
    path: `${devNavUrl}/login`,
    element: <OtherUserLogin />,
  },
  {
    path: `${devNavUrl}/create-password`,
    element: <UserCreatePassword />,
  },
  {
    path: `${devNavUrl}/forgot-password`,
    element: <OtherUserForgetPassword />,
  },
  {
    path: `${devNavUrl}/verify-email`,
    element: <UserVerifyEmail />,
  },
];
