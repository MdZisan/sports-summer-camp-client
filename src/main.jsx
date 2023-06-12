import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import "./index.css";
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <Toaster/>
   < QueryClientProvider client={queryClient}>

   <RouterProvider router={Routes}/>
</QueryClientProvider>

  
  </AuthProvider>
  </React.StrictMode>,
)
