import { devNavUrl, urlAdmin } from "../components/helpers/functions-general";
import ProtectedRouteUser from "../components/pages/access/ProtectedRouteUser";
import BlogsBanner from "../components/pages/developer/blogs/blogs-banner/BlogsBanner.jsx";
import BlogsContactUs from "../components/pages/developer/blogs/blogs-contactUs/BlogsContactUs.jsx";
import Blogs from "../components/pages/developer/blogs/Blogs.jsx";
import BlogsPage from "../components/pages/developer/blogs/BlogsPage.jsx";
import Buyers from "../components/pages/developer/buyers/Buyers.jsx";
import ContactForm from "../components/pages/developer/contact-form/ContactForm.jsx";
import ContactBanner from "../components/pages/developer/contact/contact-banner/ContactBanner.jsx";
import ContactContactUs from "../components/pages/developer/contact/contact-contactUs/ContactContactUs.jsx";
import Contact from "../components/pages/developer/contact/Contact.jsx";
import ContactNo from "../components/pages/developer/header/contact-no/ContactNo";
import Logo from "../components/pages/developer/header/logo/Logo";
import Home from "../components/pages/developer/home/Home.jsx";
import Notification from "../components/pages/developer/notification/Notification.jsx";
import Properties from "../components/pages/developer/properties/Properties.jsx";
import PropertyList from "../components/pages/developer/properties/property-list/PropertyList";
import PropertyStatus from "../components/pages/developer/properties/property-status/PropertyStatus.jsx";
import PropertyType from "../components/pages/developer/properties/property-type/PropertyType";
import SellersBanner from "../components/pages/developer/sellers/banner/SellersBanner.jsx";
import SellersContactUs from "../components/pages/developer/sellers/sellers-contactUs/SellersContactUs.jsx";
import Sellers from "../components/pages/developer/sellers/Sellers.jsx";
import Testimonial from "../components/pages/developer/testimonial/Testimonial.jsx";
import OtherUser from "../components/pages/developer/user/other-user/OtherUser";
import Role from "../components/pages/developer/user/role/Role";

export const RoutesAdmin = [
  {
    path: `${devNavUrl}/${urlAdmin}/`,
    element: (
      <ProtectedRouteUser>
        <Home />
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
    path: `${devNavUrl}/${urlAdmin}/properties`,
    element: (
      <ProtectedRouteUser>
        <Properties />
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
    path: `${devNavUrl}/${urlAdmin}/home-client-reviews`,
    element: (
      <ProtectedRouteUser>
        <Testimonial />
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
    path: `${devNavUrl}/${urlAdmin}/buyers`,
    element: (
      <ProtectedRouteUser>
        <Buyers />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/sellers`,
    element: (
      <ProtectedRouteUser>
        <Sellers />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/blogs`,
    element: (
      <ProtectedRouteUser>
        <BlogsPage />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/contact`,
    element: (
      <ProtectedRouteUser>
        <Contact />
      </ProtectedRouteUser>
    ),
  },
];
