import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import SellerTools from './pages/SellerTools'
import ProductLink from './pages/ProductLink'
import HomeLayout from './pages/HomeLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <SellerTools />,
      },
      {
        path: 'productlink',
        element: <ProductLink />,
      },
    ],
  },
])
function App() {
  return <RouterProvider router={router} />
}

export default App
