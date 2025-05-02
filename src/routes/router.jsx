import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CatergoryNews from "../pages/CatergoryNews";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        loader: () => fetch("/demo-data/news.json"),
        hydrateFallbackElement: <div>loading....</div>,
        element: <CatergoryNews></CatergoryNews>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Auth layout</h2>,
  },
  {
    path: "/news",
    element: <h2>News layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error 404 layout</h2>,
  },
]);
export default router;
