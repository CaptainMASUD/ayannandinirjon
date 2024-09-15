import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Layout from './Components/Layout/Layout.jsx';
import TravelTribe from './Components/ProjectDetilsCard/TravelTribe.jsx';
import PythonProject from './Components/ProjectDetilsCard/PythonProject.jsx';
import HumanFollowingRobot from './Components/ProjectDetilsCard/HumanFollowingRobot.jsx';
import VideoLibrary from './Components/VideoLibrary/VideoLibrary.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'travelproject',
        element: <TravelTribe />
      },
      {
        path: 'pythonProject',
        element: <PythonProject />
      },
      {
        path: 'humanfollowingrobot',
        element: <HumanFollowingRobot />
      },
      {
        path: 'videolibrary',
        element: <VideoLibrary />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
