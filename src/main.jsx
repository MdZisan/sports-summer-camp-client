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
   < QueryClientProvider client={queryClient}>
  <AuthProvider>
    <Toaster/>

   <RouterProvider router={Routes}/>
  </AuthProvider>
</QueryClientProvider>
  </React.StrictMode>,
)
