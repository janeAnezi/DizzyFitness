import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from './Component/LayOut.jsx';
import Benefits from './Component/Benefits.jsx';
import FreeTips from './Component/FreeTips.jsx';
import Products from './Component/Products.jsx';
import Services from './Component/Services.jsx';
import About from './Component/About.jsx';
import Login from './Component/LogIn.jsx';
import Register from './Component/Register.jsx';
import Home from './Component/Home.jsx'; 
import Eyes from './Component/Eyes.jsx';
import Head from './Component/Head.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
     
          {
            index: true, 
            element: <Home />
          },
          {
            path:'home',
            element:<Head/>
          },
          {
            path: 'benefits',
            element: <Benefits />
          },
          {
            path: 'freetips',
            element: <FreeTips />
          },
          {
            path: 'products',
            element: <Products />
          },
          {
            path: 'services',
            element: <Services />
          },
          {
            path: 'about',
            element: <About />
          },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: '/fitness/:id',
        element: <Eyes />,
        loader: ({ params }) => fetch(`http://localhost:5000/fitness/${params.id}`).then(res => res.json()),
      }
      
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);



