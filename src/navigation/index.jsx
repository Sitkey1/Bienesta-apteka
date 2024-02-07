import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/Main";
import { NotFoundPage } from "../pages/404";
import { CategoriesPages } from "../pages/Categories";
import { routeNames } from "./routeNames";

export const router = createBrowserRouter([
  {
    path: routeNames.main,
    element: <MainPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: routeNames.categories,
    element: <CategoriesPages />,
  },
]);
