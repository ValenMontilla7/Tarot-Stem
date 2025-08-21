import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CardList from "./pages/CardList.jsx";
import CardDetail from "./pages/CardDetail.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cards", element: <CardList /> },
  { path: "/cards/:id", element: <CardDetail /> }
]);

export default router;