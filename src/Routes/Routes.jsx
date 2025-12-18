import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/Errorpage/Errorpage';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/Apps/AllApps';
import AppDetailsPage from '../Pages/AppDetailsPage/AppDetailsPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {
            path:'/',
            Component:Home,
            loader: () => fetch('/trendingAppsData.json'),
        },
        {
          path:'/allApps',
          Component:AllApps,
          loader: () => fetch('/trendingAppsData.json'),
        },
         {
          path:'/appsDetails',
          Component:AppDetailsPage,
        }
    ]
  },
]);