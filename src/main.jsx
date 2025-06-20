import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage'
import ChatPage from './routes/chatPage/chatPage'
import DashboardPage from './routes/dashboardPage/DashboardPage'
import RootLayout from './layouts/rootLayout/rootLayout'
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout'
import SigninPage from './routes/signinPage/SigninPage'
import SignUpPage from './routes/signUpPage/signUpPage'

const router = createBrowserRouter([
  
  {
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/sign-in/*",
        element: <SigninPage/>,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage/>,
      },
      {
        element: <DashboardLayout/>,
        children: [
        {
          path: "/dashboard",
          element: <DashboardPage/>,
        },
        {
          path: "/dashboard/chats/:id",
          element: <ChatPage/>,
        }
    ],
  },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
