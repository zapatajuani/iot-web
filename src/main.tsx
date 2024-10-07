import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';
import './index.css'
import { MyContext } from './context/MyContext.tsx';
import Graphs from './pages/Graphs.tsx';

const router = createBrowserRouter([
  {path: "/", element: <MainPage />},
  {path: "/mapa", element: <MainPage />},
  {path: "/graficos", element: <Graphs />}
])

createRoot(document.getElementById('root')!).render(
  <MyContext>
    <RouterProvider router={router}/>
  </MyContext>,
)
