import Home from './components/Home'
import Venue from './components/Venue'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/venue/:venueId',
    element: <Venue />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
