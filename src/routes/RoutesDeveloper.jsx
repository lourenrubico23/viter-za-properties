import { devNavUrl } from "@/components/helpers/functions-general";
import CreateOtherPassword from "../components/pages/access/user-other/CreateOtherPassword";
import OtherUserForgetPassword from "../components/pages/access/user-other/OtherUserForgetPassword";
import OtherUserLogin from "../components/pages/access/user-other/OtherUserLogin";
import Banner from "../components/pages/developer/banner/Banner";
import OtherUser from "../components/pages/developer/user/other-user/OtherUser";
import Role from "../components/pages/developer/user/role/Role";
import Buyers from "../components/pages/website/buyers/Buyers";
import Contact from "../components/pages/website/contact/Contact";
import Home from "../components/pages/website/home/Home";
import Properties from "../components/pages/website/properties/Properties";
import Sellers from "../components/pages/website/sellers/Sellers";

export const RoutesDeveloper = [
  {
    path: `${devNavUrl}/`,
    element: <Home />,
  },
  {
    path: `${devNavUrl}/properties`,
    element: <Properties />,
  },
  {
    path: `${devNavUrl}/buyers`,
    element: <Buyers />,
  },
  {
    path: `${devNavUrl}/sellers`,
    element: <Sellers />,
  },
  {
    path: `${devNavUrl}/contact`,
    element: <Contact />,
  },

  {
    path: `${devNavUrl}/banner`,
    element: <Banner />,
  },
  {
    path: `${devNavUrl}/other-user`,
    element: <OtherUser />,
  },
  {
    path: `${devNavUrl}/user-role`,
    element: <Role />,
  },
  {
    path: `${devNavUrl}/create-pass`,
    element: <CreateOtherPassword />,
  },
  {
    path: `${devNavUrl}/forgot-password`,
    element: <OtherUserForgetPassword />,
  },
  {
    path: `${devNavUrl}/login`,
    element: <OtherUserLogin />,
  },
];
