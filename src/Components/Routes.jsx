import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./Home/home";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import Services from "./pages/services";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
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
