import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ROUTES from './router/router'

const router = createBrowserRouter(ROUTES)
function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
