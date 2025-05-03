import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CatergoryNews from "../pages/CatergoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../provider/PrivateRoute";
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
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/news-details/:newsId",
    loader: () => fetch("/demo-data/news.json"),
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
