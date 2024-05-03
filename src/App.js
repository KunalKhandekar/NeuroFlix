import { createBrowserRouter, Outlet } from 'react-router-dom';
import HeaderAndSideBar from './Components/HeaderAndSideBar';
import CategoriesPage from './Pages/Browse/CategoriesPage';
import SuggestionPage from './Components/SuggestionPage';
import GenrePage from './Pages/Browse/GenrePage';
import Browse from './Pages/Browse/Browse';
import Home from './Pages/Home/Home';
import Info from './Components/Info';

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
        element: <GenrePage />,
      },
      {
        path: '/browse/categories/:categoryNo',
        element: <CategoriesPage />,
      },
      {
        path: '/browse/info/:movieID',
        element: <Info />,
      },
      {
        path: '/browse/suggestion',
        element: <SuggestionPage />,
      }
    ]
  }
]);



export default appRouter;