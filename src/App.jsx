import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Browse from './Components/Browse'
import { Store } from './utils/store'
import { Provider } from 'react-redux'
import Body from './Components/Body'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Login'

import Home from './Components/Home'

function App() {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Body/>,
      children:[
        {
          path:'/',
          element:<Home/>

        },
        {
          path:'login',
          element:<Login/>

        },
        {
          path:'browse',
          element:<Browse/>
        },
        // {
        //   path:'gpt',
        //   element:<GptSearch/>
        // }
      ]
    }
  ])
 

  return (
    <>
  
    <RouterProvider router={appRouter}/>
    

    </>
  )
}

export default App
