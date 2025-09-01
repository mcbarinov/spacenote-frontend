import { createBrowserRouter } from "react-router"
import Login from "./components/pages/Login"
import Layout from "./components/layout/Layout"
import Home from "./components/pages/Home"

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/", element: <Layout />, children: [{ path: "/", element: <Home /> }] },
])
