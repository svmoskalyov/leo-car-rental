/* eslint-disable react/prop-types */
import { Suspense } from 'react';
import { Await } from 'react-router-dom';
import { CarsListItem } from 'components/CarsListItem/CarsListItem';
import { Loader } from 'components/Loader/Loader';
import s from './CarsList.module.scss';

export const CarsList = ({ catalog }) => {
  return (
    <ul className={s.cardList}>
      <Suspense fallback={<Loader name="Grid" />}>
        <Await resolve={catalog}>
          {resolvedCars =>
            resolvedCars?.map(el => {
              return <CarsListItem key={el.id} {...el} />;
            })
          }
        </Await>
      </Suspense>
    </ul>
  );
};
