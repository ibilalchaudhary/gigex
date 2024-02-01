import "./app.scss";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";

//fonts
import "./fonts/DomaineDispNar-Black.woff";
import "./fonts/DomaineDispNar-BlackItalic.woff";
import "./fonts/DomaineDispNar-Bold.woff";
import "./fonts/DomaineDispNar-BoldItalic.woff";
import "./fonts/DomaineDispNar-Extrabold.woff";
import "./fonts/DomaineDispNar-ExtraboldItalic.woff";
import "./fonts/DomaineDispNar-Medium.woff";
import "./fonts/DomaineDispNar-MediumItalic.woff";
import "./fonts/DomaineDispNar-Regular.woff";
import "./fonts/DomaineDispNar-Regularitalic.woff";
import "./fonts/DomaineDispNar-Semibold.woff";
import "./fonts/DomaineDispNar-SemiboldItalic.woff";


import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
