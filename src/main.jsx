import React from 'react'    // Import react library
import ReactDOM from 'react-dom/client'    // Import react-dom library
import App from './App.jsx'    // Import App.jsx file
import './index.css'    // Import css file
import { RouterProvider } from 'react-router-dom'    // Import react-router-dom library
import router from './Routes/Route.jsx'    // Import route.jsx file

ReactDOM.createRoot(document.getElementById('root')).render(    // render the App.jsx in root
  <React.StrictMode>   
    <RouterProvider router={router} />    
  </React.StrictMode>,
)
