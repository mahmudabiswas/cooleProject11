import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

export default Routes;
