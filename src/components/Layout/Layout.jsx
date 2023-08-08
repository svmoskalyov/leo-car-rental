import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import s from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={s.container}>
      <AppBar />
      <main>
        <Suspense fallback={<Loader name="Grid" />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
