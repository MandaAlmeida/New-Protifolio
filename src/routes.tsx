import { createBrowserRouter } from "react-router-dom";
import Project from "./Pages/Project";
import Home from "./Pages/Home";
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
    ],
  },
]);

export default router;
