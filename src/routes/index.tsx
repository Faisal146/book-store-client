import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/main/MainLayout";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import Home from "../pages/home/Home";
import Details from "../pages/Books/Details";
import About from "../pages/about/About";
import ContactPage from "../pages/contact/Contact";
import AdminLayout from "../components/layout/admin/AdminLayout";
import Dashboard from "../AdminPages/Dashboard";
import Users from "../AdminPages/Users";
import Products from "../AdminPages/Products";
import AdminIndex from "../components/layout/admin/AdminIndex";
import AllItems from "../pages/Books/AllItems";
import ProductForm from "../AdminPages/ProductForm";
import UpdateProduct from "../AdminPages/UpdateProduct";
import UpateUser from "../AdminPages/UpateUser";
import Orders from "../AdminPages/order/Orders";
import AdminProtectedRoute from "./AdminProtectedRoute";
import Profile from "../pages/auth/profile";
import CartPage from "../pages/cart/CartPage";
import CheckoutPage from "../pages/orders/CheckOutForm";
import OrderCompletedPage from "../pages/orders/Complited";
import MyOrders from "../pages/orders/MyOrders";
import UpdateProfile from "../pages/auth/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book/:id",
        element: <Details></Details>,
      },
      {
        path: "/books",
        element: <AllItems></AllItems>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/cart",
        element: <CartPage></CartPage>,
      },
      {
        path: "/checkout",
        element: <CheckoutPage></CheckoutPage>,
      },
      {
        path: "/order-complited/:id",
        element: <OrderCompletedPage></OrderCompletedPage>,
      },
      {
        path: "/orders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },
      // {
      //   path: "/shop",
      //   element: <AllItems></AllItems>,
      // },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminProtectedRoute>
        <AdminLayout></AdminLayout>
      </AdminProtectedRoute>
    ),
    children: [
      {
        index: true,
        path: "",
        element: <AdminIndex></AdminIndex>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "users",
        element: <Users></Users>,
      },
      {
        path: "users/update/:id",
        element: <UpateUser></UpateUser>,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "products/add",
        element: <ProductForm></ProductForm>,
      },
      {
        path: "products/update/:id",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Registration></Registration>,
  },
]);

export default router;
