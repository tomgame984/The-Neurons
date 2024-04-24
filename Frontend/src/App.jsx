import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import { Dashboard } from './pages/Dashboard'

const router = createBrowserRouter([
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
