import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/Main";
import { NotFoundPage } from "../pages/404";
import { CategoriesPages } from "../pages/Categories";
import { routeNames } from "./routeNames";
import { CategoryPage } from "../pages/Category";
import { ProductPage } from "../pages/Product";
import { InformationPage } from "../pages/Information";
import { ContactsPage } from "../pages/Contacts";

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
  {
    path: routeNames.information,
    element: <InformationPage />,
  },
  {
    path: routeNames.contacts,
    element: <ContactsPage />,
  },
  {
    path: `${routeNames.categories}/:id`,
    element: <CategoryPage />,
  },
  {
    path: `${routeNames.categories}/:id/:id`,
    element: <ProductPage />,
  },
]);
