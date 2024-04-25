import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { HomePage } from "./pages/Landing/Homepage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  }
]);

const App = () => {
  return (
    <>

      <RouterProvider router={router} />

    </>
  );
};

export default App
