import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SocialLookBook from '../src/components/SocialLookBook'
import StyleFeed from '../src/components/StyleFeed';
import SocialChallenges from '../src/components/SocialChallenges'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '../src/components/Home';

import {RouterProvider, createBrowserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoute=createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/social-look',
      element:<SocialLookBook/>
    },
    {
      path:'/social-challenges',
      element:<SocialChallenges/>

    },
    {
      path:'/style-feed',
      element:<StyleFeed/>
    },
  ]
)
root.render(
  <React.StrictMode>
  <RouterProvider router={allRoute} />
  </React.StrictMode>
);




