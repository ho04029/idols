import { createBrowserRouter } from "react-router-dom";

import { IdolGroups } from "./data/idolgroup";
import Home from "./pages/Home";
import Idolgroup from "./pages/Idolgroup";

const routerData = [
  { id: 0, path: "/", element: <Home /> },
  {
    id: 1,
    path: "/idolgroup/THEBOYZ",
    element: <Idolgroup group={IdolGroups[0]} />,
  },
  {
    id: 2,
    path: "/idolgroup/ZEROBASEONE",
    element: <Idolgroup group={IdolGroups[1]} />,
  },
  {
    id: 3,
    path: "/idolgroup/RIIZE",
    element: <Idolgroup group={IdolGroups[2]} />,
  },
  {
    id: 4,
    path: "/idolgroup/NCTWISH",
    element: <Idolgroup group={IdolGroups[3]} />,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => ({ path: router.path, element: router.element }))
);
