import { createBrowserRouter } from "react-router-dom";

import { IdolGroups } from "./data/idolgroup";
import Home from "./pages/Home";
import Idolgroup from "./pages/Idolgroup";
import Layout from "./components/Layout";

const routerData = [
  { path: "/", element: <Home /> },
  {
    path: "/idolgroup",
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
];

export const routers = createBrowserRouter(routerData);
