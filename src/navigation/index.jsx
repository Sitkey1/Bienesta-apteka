import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/Main";
import { NotFoundPage } from "../pages/404";
import { CategoriesPages } from "../pages/Categories";
import { routeNames } from "./routeNames";
import { CategoryPage } from "../pages/Category";
import { ProductPage } from "../pages/Product";
import { InformationPage } from "../pages/Information";
import { ContactsPage } from "../pages/Contacts";
import { BasketPage } from "../pages/Basket";
import { FaqPage } from "../pages/Faq";
import { PolicyPage } from "../pages/Policy";
import { NewsPage } from "../pages/News";

export const router = createBrowserRouter([
  {
    path: routeNames.main,
    element: <MainPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: routeNames.categories,
    element: <CategoriesPages />,
    // children: [
    //   {
    //     path: ":id",
    //     element: <CategoryPage />,
    //   },
    // ],
  },
  {
    path: routeNames.basket,
    element: <BasketPage />,
  },
  {
    path: routeNames.information,
    element: <InformationPage />,
    children: [
      {
        path: routeNames.contacts,
        element: <ContactsPage />,
      },
      // {
      //   path: routeNames.faq,
      //   element: <FaqPage />,
      // },
      // {
      //   path: routeNames.policy,
      //   element: <PolicyPage />,
      // },
      // {
      //   path: routeNames.news,
      //   element: <NewsPage />,
      // },
    ],
  },

  // {
  //   path: `${routeNames.categories}/:id`,
  //   element: <CategoryPage />,
  // },
  // {
  //   path: `${routeNames.categories}/:id/:id`,
  //   element: <ProductPage />,
  // },
]);
