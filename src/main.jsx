import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/acceuil.jsx';
import Layout from './components/layout.jsx';

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



