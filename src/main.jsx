import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './components/About/About';
import Main from './components/Main/Main';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        children:[
          {
            path:'/',
            element:<h2>Button One</h2>
          },
          {
            path:'/buttonTwo',
            element:<h2>Button Two</h2>
          }
        ]
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
