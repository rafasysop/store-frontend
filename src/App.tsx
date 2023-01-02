import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TemmplateMain } from "./components/Template/Main";
import { AdminPage } from "./pages/AdminPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TemmplateMain />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
