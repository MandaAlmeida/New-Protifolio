import { createBrowserRouter } from "react-router-dom";
import Project from "./Pages/Project";
import Home from "./Pages/Home";
import AboutI from "./Pages/About-I";
import App from "./Pages/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/projetos",
        element: <Project />,
      },
      {
        path: "/sobre",
        element: <AboutI />,
      },
    ],
  },
]);

export default router;
