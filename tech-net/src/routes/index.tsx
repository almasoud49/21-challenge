import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import NotFound from "../page/NotFound";
import App from "../App";

const routes = createBrowserRouter([
  {
    path: "/app",
    element: <App/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  }
]);

export default routes