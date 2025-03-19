import { useState } from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Login } from './home/login'
import { Error } from '../error/error'
import { LoadAction } from './action/action'
import { Dashboard } from './home/Dashboard/dashboard'

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Login />,
      errorElement:<Error />,
      action:LoadAction
    },
    {
      path:'/dashboard',
      element:<Dashboard />

    },
    {
      path:'*',
      element:<Error />
    }
  ])

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
