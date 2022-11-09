import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import SignIn from './pages/SignIn'
import Admin from './pages/Admin'
import { Error } from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '*',
    element: <Error />,
  },
])

export { router }
