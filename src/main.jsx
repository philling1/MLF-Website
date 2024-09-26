import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage.jsx';
import WhoWeArePage from './pages/WhoWeArePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/who-we-are',
    element: <WhoWeArePage />
  },
  {
    path: '/research-report',
    element: <ResearchPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
