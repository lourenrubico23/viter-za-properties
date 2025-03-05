import { devNavUrl } from "@/components/helpers/functions-general";
import Buyers from "../components/pages/website/buyers/Buyers";
import Contact from "../components/pages/website/contact/Contact";
import Home from "../components/pages/website/home/Home";
import Properties from "../components/pages/website/properties/Properties";
import Sellers from "../components/pages/website/sellers/Sellers";
import PropertyDescriptionPage from "../components/partials/PropertyDescriptionPage.jsx";

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
    path: `${devNavUrl}/property/listing/:propertyName`,
    element: <PropertyDescriptionPage />,
  },
];
