import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import AuthProvider from './Providers/AuthProvider.jsx';
import router from './Routes/Routes.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <AuthProvider>
  //     <RouterProvider router={router} />
  //   </AuthProvider>
  // </React.StrictMode>,

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
