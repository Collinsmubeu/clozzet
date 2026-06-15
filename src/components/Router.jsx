import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Shop from "../pages/shop";
import Product from "../pages/product";
import NotFound from "../pages/NotFound";
import Layout from "../pages/Layout";
import Cart from "../pages/Cart"
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/shop"
          element={
            <Layout>
              <Shop />
            </Layout>
          }
        />
        <Route
          path="/product"
          element={
            <Layout>
              <Product />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
        <Route
          path="/Cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
