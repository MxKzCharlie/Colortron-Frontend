import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import Products from './components/productsPage/Products.jsx'
import MainProducts from './components/productsPage/MainProducts.jsx'
import PaymentSection from './components/productsPage/PaymentSection.jsx'
import DetailsProductQuote from './components/productsPage/DetailsProductQuote.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "productos/",
    element: <ProductsPage />,
    children: [
      {
        path: ":producto/",
        element: <Products />,
      },
      {
        path: "principal/",
        element: <MainProducts />,
      },
      {
        path: "pago/",
        element: <PaymentSection />,
        children: [
          {
            path: "detalles/",
            element: <DetailsProductQuote />,
          },
        ],
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
);
