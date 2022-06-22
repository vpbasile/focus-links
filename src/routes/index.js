import AdminLayout from "../layouts/Admin";
import UserLayout from "../layouts/User";
import SignInLayout from "../layouts/SignIn";
import LandingLayout from "../layouts/Landing";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const routes = (isLogged = false) => [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/users",
    element: <AdminLayout />,
    children: [],
  },
  {
    path: "/admin",
    element: <UserLayout />,
    children: [],
  },
  {
    path: "/sign-in",
    element: <SignInLayout />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default routes;
