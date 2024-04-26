import './App.css';
import { createBrowserRouter, RouterProvider, useRoutes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Browse from './Pages/Browse/Browse';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/browse',
    element: <Browse />
  }
]);

const App = () => {
  return (
    <RouterProvider router={appRouter} />
  );
};




export default App;