import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import Buttons from './components/Buttons'


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

        <Buttons />

      <RouterProvider router={router} />

    </>
  );
};

export default App
