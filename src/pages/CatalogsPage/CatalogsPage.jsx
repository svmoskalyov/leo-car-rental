import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectError,
  selectIsLoading,
  selectTotalCars,
  selectStartId,
} from 'redax/cars/carsSelectors';
import { getCars, getTotalCars } from 'redax/cars/carsOperations';
import { Button } from 'components/Button/Button';
import { CarsList } from 'components/CarsList/CarsList';
import { Loader } from 'components/Loader/Loader';
import s from './CatalogsPage.module.scss';

export const CatalogsPage = () => {
  const dispatch = useDispatch();
  const initialized = useRef(false);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const catalog = useSelector(selectCars);
  const totalCars = useSelector(selectTotalCars);
  const startId = useSelector(selectStartId);

  const onClickLoadMore = () => {
    dispatch(getCars(startId + 1));
    setTimeout(() => {
      window.scrollBy({
        top: window.innerHeight - 164,
        behavior: 'smooth',
      });
    }, 500);
  };

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      if (catalog.length === 0) {
        dispatch(getCars(startId));
        dispatch(getTotalCars());
      }
    }
  }, [dispatch, catalog.length, startId]);

  return (
    <>
      {isLoading && !error && totalCars === 0 && <Loader name="Grid" />}
      <CarsList catalog={catalog} />

      {catalog.length < totalCars && (
        <Button
          className={s.btnLoadMore}
          onClick={onClickLoadMore}
          aria-label="button load more"
        >
          {isLoading && !error && catalog.length !== 0 ? (
            <Loader name="ThreeDots" />
          ) : (
            ' Load more'
          )}
        </Button>
      )}
    </>
  );
};
