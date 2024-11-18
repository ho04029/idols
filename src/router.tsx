import { createBrowserRouter } from "react-router-dom";

import { IdolGroups } from "./data/idolgroup";
import Home from "./pages/Home";
import Idolgroup from "./pages/Idolgroup";
import Layout from "./components/Layout";
import IdolMemberSpecific from "./pages/IdolMemberSpecific";

const routerData = [
  { path: "/", element: <Home /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/idolgroup/THEBOYZ",
        element: <Idolgroup group={IdolGroups[0]} />,
      },
      {
        path: "/idolgroup/ZEROBASEONE",
        element: <Idolgroup group={IdolGroups[1]} />,
      },
      {
        path: "/idolgroup/RIIZE",
        element: <Idolgroup group={IdolGroups[2]} />,
      },
      {
        path: "/idolgroup/NCTWISH",
        element: <Idolgroup group={IdolGroups[3]} />,
      },
    ],
  },
  {
    path: "/idolgroup",
    children: [
      {
        path: "THEBOYZ/:memberName",
        element: <IdolMemberSpecific />,
      },
      {
        path: "ZEROBASEONE/:memberName",
        element: <IdolMemberSpecific />,
      },
      {
        path: "RIIZE/:memberName",
        element: <IdolMemberSpecific />,
      },
      {
        path: "NCTWISH/:memberName",
        element: <IdolMemberSpecific />,
      },
    ],
  },
];

export const routers = createBrowserRouter(routerData);
