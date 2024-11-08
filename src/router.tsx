import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Idolgroup from "./pages/Idolgroup";

const routerData = [
  { id: 0, path: "/", element: <Home /> },
  { id: 1, path: "/idolgroup/THEBOYZ", element: <Idolgroup /> },
  { id: 2, path: "/idolgroup/ZEROBASEONE", element: <Idolgroup /> },
  { id: 3, path: "/idolgroup/RIIZE", element: <Idolgroup /> },
  { id: 4, path: "/idolgroup/NCTWISH", element: <Idolgroup /> },
];

export const routers = createBrowserRouter(
  routerData.map((router) => ({ path: router.path, element: router.element }))
);
