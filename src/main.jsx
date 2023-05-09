import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.jsx';
import AboutMeScreen from './screens/AboutMeScreen.jsx';
import ExperienceScreen from './screens/ExperienceScreen.jsx';
import SkillScreen from './screens/SkillScreen.jsx';
import ProjectScreen from './screens/ProjectScreen.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />
  },
  {
    path: '/about_me',
    element: <AboutMeScreen />
  },
  {
    path: '/experiences',
    element: <ExperienceScreen />
  },
  {
    path: '/skills',
    element: <SkillScreen />
  },
  {
    path: '/projects',
    element: <ProjectScreen />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)