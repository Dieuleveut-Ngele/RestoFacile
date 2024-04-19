import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/acceuil.jsx';
import Login from './pages/login.jsx';
import Layout from './components/layout.jsx';
import RegisterRestaurantForm from './pages/RegisterRestaurantForm.jsx';

import './index.css'



 const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Layout/>,
      children: [
        {
          path:"/",
          element:<HomePage/>,
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/registerform",
          element:<RegisterRestaurantForm/>
        }
      ]
    }
  ]
 )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Importer le fichier de styles Tailwind CSS ici


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/



