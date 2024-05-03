import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/acceuil.jsx';
import Login from './pages/login.jsx';
import Layout from './components/layout.jsx';
import RegisterRestaurantForm from './pages/RegisterRestaurantForm.jsx';
import Contact from './pages/contact.jsx';
import Register from './pages/register.jsx';
import AboutPage from './pages/about.jsx';
import RestaurantAllList from './pages/RestaurantsList.jsx';
//import ReservationForm from './pages/ReservationForm.jsx';
import './index.css'
//import AddRestaurant from './pages/AddRestaurant.jsx';
//import OwnerInfoForm from './pages/OwnerInfoForm.jsx';
//import RestaurantInfoForm from './pages/RestaurantInfoForm.jsx';



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
          path:"/enregistrement",
          element:<RegisterRestaurantForm/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/about",
          element:<AboutPage/>
        },
        {
          path:"/listerestaurant",
          element:<RestaurantAllList/>
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




/*import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import Layout from './components/layout.jsx';
import HomePage from './pages/acceuil.jsx';
import Login from './pages/login.jsx';
import RegisterRestaurantForm from './pages/RegisterRestaurantForm.jsx';
import Contact from './pages/contact.jsx';
import Register from './pages/register.jsx';
import AboutPage from './pages/about.jsx';
import RestaurantAllList from './pages/RestaurantsList.jsx';
import App from './App.jsx';
import './index.css';

const router = (
  <BrowserRouter>
    <RouterProvider>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registerform" element={<RegisterRestaurantForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/listerestaurant" element={<RestaurantAllList />} />
        </Route>
      </Routes>
    </RouterProvider>
  </BrowserRouter>
);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);*/




