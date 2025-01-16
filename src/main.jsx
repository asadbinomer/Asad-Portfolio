import React from 'react'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Work from './pages/work/Work.jsx';
import Service from './pages/service/Service.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Contact from './pages/contact/Contact.jsx';
import WorkCaseStudies from './pages/workCaseStudies/WorkCaseStudies.jsx';
import UserService from './pages/userService/UserService.jsx';
import BlogStudy from './pages/blogStudy/BlogStudy.jsx';
import PageNotFound from './component/pageNotFound/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'work', element: <Work /> },
      { path: 'service', element: <Service /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
      { path: 'work-case-studies', element: <WorkCaseStudies /> },
      { path: 'userService', element: <UserService /> },
      { path: 'blogStudy', element: <BlogStudy /> },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
