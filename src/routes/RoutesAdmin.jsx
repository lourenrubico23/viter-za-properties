import { devNavUrl, urlAdmin } from "../components/helpers/functions-general";
import ProtectedRouteUser from "../components/pages/access/ProtectedRouteUser";
import UserVerifyEmail from "../components/pages/access/user-other/UserVerifyEmail";
import About from "../components/pages/developer/about/About.jsx";
import Blogs from "../components/pages/developer/blogs/Blogs.jsx";
import Banner from "../components/pages/developer/header/banner/Banner";
import ContactNo from "../components/pages/developer/header/contact-no/ContactNo";
import Links from "../components/pages/developer/header/links/Links";
import Logo from "../components/pages/developer/header/logo/Logo";
import PropertyList from "../components/pages/developer/properties/property-list/PropertyList";
import PropertyType from "../components/pages/developer/properties/property-type/PropertyType";
import Testimonial from "../components/pages/developer/testimonial/Testimonial.jsx";
import OtherUser from "../components/pages/developer/user/other-user/OtherUser";
import Role from "../components/pages/developer/user/role/Role";
import Home from "../components/pages/website/home/Home";

export const RoutesAdmin = [
  {
    path: `${devNavUrl}/${urlAdmin}/`,
    element: (
      <ProtectedRouteUser>
        <About />
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
  {
    path: `${devNavUrl}/${urlAdmin}/links`,
    element: (
      <ProtectedRouteUser>
        <Links />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/contact-no`,
    element: (
      <ProtectedRouteUser>
        <ContactNo />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/logo`,
    element: (
      <ProtectedRouteUser>
        <Logo />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/banner`,
    element: (
      <ProtectedRouteUser>
        <Banner />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/property-type`,
    element: (
      <ProtectedRouteUser>
        <PropertyType />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/property-list`,
    element: (
      <ProtectedRouteUser>
        <PropertyList />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/about`,
    element: (
      <ProtectedRouteUser>
        <About />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/testimonials`,
    element: (
      <ProtectedRouteUser>
        <Testimonial />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/blogs`,
    element: (
      <ProtectedRouteUser>
        <Blogs />
      </ProtectedRouteUser>
    ),
  },
];
