import { devNavUrl } from "@/components/helpers/functions-general";
import Home from "../components/pages/website/home/Home";
import PropertyDescriptionPage from "../components/partials/PropertyDescriptionPage";
import Properties from "../components/pages/website/properties/Properties";
import Buyers from "../components/pages/website/buyers/Buyers";

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
];
