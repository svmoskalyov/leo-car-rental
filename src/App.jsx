import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { CatalogsPage } from 'pages/CatalogsPage/CatalogsPage';
import { FavoritesPage } from 'pages/FavoritesPage/FavoritesPage';
import { Layout } from 'components/Layout/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="catalogs" element={<CatalogsPage />} />
      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
