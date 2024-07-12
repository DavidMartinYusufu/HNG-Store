import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import HeroSec from "./HomePage/HeroSec.jsx"
import Checkout from './CheckoutPage/Checkout.jsx'
import Carts2 from './CheckoutPage/Check2.jsx'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.jsx'
import Carts from './CartsPage/Carts.jsx'
import Check3 from "./CheckoutPage/Check3.jsx";
import Check4 from "./CheckoutPage/Check4.jsx";

const router = createBrowserRouter([
  {path: '/', element: <HeroSec/>, errorElement: <ErrorBoundary/>},
  {path: '/checkout', element: <Checkout/> },
  {path: '/carts', element: <Carts/>},
  {path: '/carts2', element: <Carts2/>},
  {path: '/check3', element: <Check3/>},
  {path: '/check4', element: <Check4/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
