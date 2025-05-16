import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import SkipSelectPage from '@/pages/skip-select';
import NotfoundPage from '@/pages/not-found';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SkipSelectPage />,
  },
  {
    path: '*',
    element: <NotfoundPage />,
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
