import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';
import './index.css'
import { MyContext } from './context/MyContext.tsx';

const router = createBrowserRouter([
  {path: "/", element: <MainPage />},
  {path: "/mapa", element: <MainPage />}
])

createRoot(document.getElementById('root')!).render(
  <MyContext>
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  </MyContext>,
)
