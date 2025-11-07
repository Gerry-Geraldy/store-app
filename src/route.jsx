import UserLayout from "./layouts/UserLayout";
import Home from "./pages/Home";
import Form from "./pages/Form";

export const routes = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/form", element: <Form /> },
    ],
  },
];
