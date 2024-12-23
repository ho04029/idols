import { createBrowserRouter, RouteObject } from "react-router-dom";

import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Idolgroup from "./pages/Idolgroup";
import IdolMemberSpecific from "./pages/IdolMemberSpecific";
import AlbumChart from "./pages/AlbumChart";

const routerData: RouteObject[] = [
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
      {
        path: "/chart/:groupName",
        element: <AlbumChart />,
      },
    ],
  },
];

export const routers = createBrowserRouter(routerData, {
  future: {
    v7_fetcherPersist: true,
    v7_relativeSplatPath: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});
