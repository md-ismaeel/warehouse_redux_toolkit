import './App.css';
import Layout from './Layout/Layout';
import { Home } from './Page/Home/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WarehouseDetails } from './Page/WarehouseDetails/WarehouseDetails';

function App() {

  const routers = createBrowserRouter([
    {
      path: '/', element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/details/:id', element: <WarehouseDetails /> },
      ]
    },
  ])

  return (
    <RouterProvider router={routers}></RouterProvider>
  )
}

export default App
