import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Screen/home';
import Errorpagr from './Screen/errorpagr';
import { ClerkProvider } from '@clerk/clerk-react'
import Profile from '@/Screen/Profile/index'
import AddListing from './Screen/AddListing';


const router = createBrowserRouter([
 {
  path: '/',  
  element:<Home/>,
 },
 {
  path: '/*',
  element:<Errorpagr/>
 },
 {
  path: '/profile',
  element: <Profile/>
 },
 {
  path: '/add-listing',
  element: <AddListing />
 }
]);


// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
     <RouterProvider router={router} />
    </ClerkProvider> 
  </StrictMode>,
)
