import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import ManageOrders from "../pages/admin/ManageOrders";
import ManageProducts from "../pages/admin/ManageProducts";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Orders from "../pages/Orders";
import ProductDetails from "../pages/ProductDetails";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Shop from "../pages/Shop";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/products/:id" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route element={<PrivateRoute />}>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/orders" element={<Orders />} />
    </Route>
    <Route element={<PrivateRoute adminOnly />}>
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/products" element={<ManageProducts />} />
      <Route path="/admin/orders" element={<ManageOrders />} />
    </Route>
  </Routes>
);

export default AppRoutes;
