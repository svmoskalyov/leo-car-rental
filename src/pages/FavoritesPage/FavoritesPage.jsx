import { Loader } from 'components/Loader/Loader';
import { CarsList } from 'components/CarsList/CarsList';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalCars } from 'redax/cars/carsOperations';
import {
  selectError,
  selectFavorites,
  selectIsLoading,
} from 'redax/cars/carsSelectors';

export const FavoritesPage = () => {
  const dispatch = useDispatch();
  const initialized = useRef(false);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      if (favorites.length === 0) {
        dispatch(getTotalCars());
      }
    }
  }, [dispatch, favorites.length]);

  return (
    <>
      {isLoading && !error && <Loader name="Hearts" />}
      <CarsList catalog={favorites} />
    </>
  );
};
