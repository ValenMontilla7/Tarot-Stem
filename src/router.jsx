import { createBrowserRouter } from "react-router-dom";
import CardList from "./pages/CardList.jsx";
import CardDetail from "./pages/CardDetail.jsx";
import Home from "./pages/home.jsx";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cards", element: <CardList /> },
  { path: "/cards/:id", element: <CardDetail /> }
]);

export default router;