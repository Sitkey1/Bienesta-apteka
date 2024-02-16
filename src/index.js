import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { router } from "./navigation";
import { routeNames } from "./navigation/routeNames";
import { MainPage } from "./pages/Main";
import { CategoriesPages } from "./pages/Categories";
import { BasketPage } from "./pages/Basket";
import { InformationPage } from "./pages/Information";
import { ContactsPage } from "./pages/Contacts";
import { FaqPage } from "./pages/Faq";
import { PolicyPage } from "./pages/Policy";
import { NewsPage } from "./pages/News";
import { CategoryPage } from "./pages/Category";

import { Layout } from "./components/Layout";
import { ProductPage } from "./pages/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={routeNames.main} element={<Layout />}>
          <Route index path={routeNames.main} element={<MainPage />} />
          <Route path={routeNames.categories} element={<CategoriesPages />} />
          <Route
            path={`${routeNames.categories}/:id`}
            element={<CategoryPage />}
          />
          <Route path={routeNames.product} element={<ProductPage />} />
          <Route path={routeNames.basket} element={<BasketPage />} />
          <Route path={routeNames.information} element={<InformationPage />} />
          <Route path={routeNames.contacts} element={<ContactsPage />} />
          <Route path={routeNames.faq} element={<FaqPage />} />
          <Route path={routeNames.policy} element={<PolicyPage />} />
          <Route path={routeNames.news} element={<NewsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
