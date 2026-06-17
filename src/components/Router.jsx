import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/shop";
import Product from "../pages/product";
import NotFound from "../pages/NotFound";
import Layout from "../pages/Layout";
import Cart from "../pages/Cart";
function Router() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default Router;
