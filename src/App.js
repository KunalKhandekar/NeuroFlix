import MoviesGenrePage from './Pages/Browse/Movie/Genres/MoviesGenrePage'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import HeaderAndSideBar from './Components/HeaderAndSideBar';
import Browse from './Pages/Browse/Browse';
import Home from './Pages/Home/Home';
import './App.css';

const App = () => {
  return (
    <>
      <HeaderAndSideBar />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/browse',
    element: <App />,
    children: [
      {
        path: '/browse',
        element: <Browse />,
      },
      {
        path: '/browse/:genre',
        element: <MoviesGenrePage />,
      }
    ]
  }
]);



export default appRouter;