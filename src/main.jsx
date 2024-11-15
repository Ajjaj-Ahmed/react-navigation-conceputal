import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './route/router';
import DataProvider from './provider/DataProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
    <RouterProvider router={router} />
    </DataProvider>
    
  </StrictMode>,
)
