import { devNavUrl, urlAdmin } from "../components/helpers/functions-general";
import ProtectedRouteUser from "../components/pages/access/ProtectedRouteUser";
import UserVerifyEmail from "../components/pages/access/user-other/UserVerifyEmail";
import About from "../components/pages/developer/about/About.jsx";
import BlogsBanner from "../components/pages/developer/blogs/blogs-banner/BlogsBanner.jsx";
import BlogsContactUs from "../components/pages/developer/blogs/blogs-contactUs/BlogsContactUs.jsx";
import Blogs from "../components/pages/developer/blogs/Blogs.jsx";
import BuyersBanner from "../components/pages/developer/buyers/banner/BuyersBanner.jsx";
import BuyersContactUs from "../components/pages/developer/buyers/buyers-contactUs/BuyersContactUs.jsx";
import ContactForm from "../components/pages/developer/contact-form/ContactForm.jsx";
import ContactBanner from "../components/pages/developer/contact/contact-banner/ContactBanner.jsx";
import ContactContactUs from "../components/pages/developer/contact/contact-contactUs/ContactContactUs.jsx";
import Banner from "../components/pages/developer/header/banner/Banner";
import ContactNo from "../components/pages/developer/header/contact-no/ContactNo";
import HomeContactUs from "../components/pages/developer/header/home-contactUs/HomeContactUs.jsx";
import Links from "../components/pages/developer/header/links/Links";
import Logo from "../components/pages/developer/header/logo/Logo";
import Notification from "../components/pages/developer/notification/Notification.jsx";
import PropertiesBanner from "../components/pages/developer/properties/banner/PropertiesBanner.jsx";
import PropertyContactUs from "../components/pages/developer/properties/property-contactUs/PropertyContactUs.jsx";
import PropertyList from "../components/pages/developer/properties/property-list/PropertyList";
import PropertyStatus from "../components/pages/developer/properties/property-status/PropertyStatus.jsx";
import PropertyType from "../components/pages/developer/properties/property-type/PropertyType";
import SellersBanner from "../components/pages/developer/sellers/banner/SellersBanner.jsx";
import SellersContactUs from "../components/pages/developer/sellers/sellers-contactUs/SellersContactUs.jsx";
import Testimonial from "../components/pages/developer/testimonial/Testimonial.jsx";
import OtherUser from "../components/pages/developer/user/other-user/OtherUser";
import Role from "../components/pages/developer/user/role/Role";
import Home from "../components/pages/website/home/Home";

export const RoutesAdmin = [
  {
    path: `${devNavUrl}/${urlAdmin}/`,
    element: (
      <ProtectedRouteUser>
        <Links />
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
    path: `${devNavUrl}/${urlAdmin}/home`,
    element: (
      <ProtectedRouteUser>
        <Links />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/footer`,
    element: (
      <ProtectedRouteUser>
        <ContactNo />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/navigation`,
    element: (
      <ProtectedRouteUser>
        <Logo />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/home-banner`,
    element: (
      <ProtectedRouteUser>
        <Banner />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/home-contact-us`,
    element: (
      <ProtectedRouteUser>
        <HomeContactUs />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/property-banner`,
    element: (
      <ProtectedRouteUser>
        <PropertiesBanner />
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
    path: `${devNavUrl}/${urlAdmin}/property-status`,
    element: (
      <ProtectedRouteUser>
        <PropertyStatus />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/property-contact-us`,
    element: (
      <ProtectedRouteUser>
        <PropertyContactUs />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/home-about`,
    element: (
      <ProtectedRouteUser>
        <About />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/home-client-reviews`,
    element: (
      <ProtectedRouteUser>
        <Testimonial />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/blogs-banner`,
    element: (
      <ProtectedRouteUser>
        <BlogsBanner />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/blogs-list`,
    element: (
      <ProtectedRouteUser>
        <Blogs />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/blogs-contact-us`,
    element: (
      <ProtectedRouteUser>
        <BlogsContactUs />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/contact-banner`,
    element: (
      <ProtectedRouteUser>
        <ContactBanner />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/contact-contact-us`,
    element: (
      <ProtectedRouteUser>
        <ContactContactUs />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/contact-form`,
    element: (
      <ProtectedRouteUser>
        <ContactForm />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/notification`,
    element: (
      <ProtectedRouteUser>
        <Notification />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/buyers-banner`,
    element: (
      <ProtectedRouteUser>
        <BuyersBanner />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/buyers-contact-us`,
    element: (
      <ProtectedRouteUser>
        <BuyersContactUs />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/sellers-banner`,
    element: (
      <ProtectedRouteUser>
        <SellersBanner />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/sellers-contact-us`,
    element: (
      <ProtectedRouteUser>
        <SellersContactUs />
      </ProtectedRouteUser>
    ),
  },
];
