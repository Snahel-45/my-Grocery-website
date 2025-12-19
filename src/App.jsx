import React from 'react'
import Home from './components/Home/Home'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import SeaFood from './components/SeaFood/SeaFood'
import AllProducts from './components/AllProducts/AllProducts'
import Layout from './components/Layout/Layout'

import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'fruits',
        element: <Fruits />
      },
      {
        path: 'dairy',
        element: <Dairy />
      },
      {
        path: 'seafood',
        element: <SeaFood />
      },
      {
        path: 'allproducts',
        element: <AllProducts />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
