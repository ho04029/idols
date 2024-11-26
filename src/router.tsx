import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Idolgroup from "./pages/Idolgroup";
import IdolMemberSpecific from "./pages/IdolMemberSpecific";
import NotFound from "./pages/NotFound";

const routerData = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "/idolgroup/:groupName",
        element: <Idolgroup />,
      },
      {
        path: "/idolgroup/:groupName/:memberName",
        element: <IdolMemberSpecific />,
      },
    ],
  },
];

export const routers = createBrowserRouter(routerData);
