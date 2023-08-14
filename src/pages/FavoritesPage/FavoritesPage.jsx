import { useSelector } from 'react-redux';
import {
  selectError,
  selectFavorites,
  selectIsLoading,
} from 'redax/cars/carsSelectors';
import { Loader } from 'components/Loader/Loader';
import { CarsList } from 'components/CarsList/CarsList';
import s from './FavoritesPage.module.scss';

export const FavoritesPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {isLoading && !error && <Loader name="Hearts" />}
      {favorites.length !== 0 && <CarsList catalog={favorites} />}

      {favorites.length === 0 && (
        <div className={s.notFavCar}>No favorites cars </div>
      )}
    </>
  );
};
