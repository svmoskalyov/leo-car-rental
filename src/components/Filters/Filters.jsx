import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectFavorites } from 'redax/cars/carsSelectors';
import { setFiltersReset } from 'redax/filters/filtersSlice';
import {
  selectFilterBrand,
  selectFilterType,
  selectFilterYear,
  selectFilterPrice,
  selectFilterChoiced,
} from 'redax/filters/filterSelectors';
import { FiltersSelects } from 'components/FiltersSelects/FiltersSelects';
import { CarsList } from 'components/CarsList/CarsList';
import { Button } from 'components/Button/Button';
import s from './Filters.module.scss';

export const Filters = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);
  const selBrand = useSelector(selectFilterBrand);
  const selType = useSelector(selectFilterType);
  const selYear = useSelector(selectFilterYear);
  const selPrice = useSelector(selectFilterPrice);
  const selFilterChoiced = useSelector(selectFilterChoiced);
  const [filteredCars, setFilteredCars] = useState([]);

  const filterBrand = filteredData => {
    if (selBrand === 'All') {
      return filteredData;
    }
    const normalizedBrand = selBrand.toLowerCase();
    const filteredCars = filteredData.filter(
      car => car.make.toLowerCase() === normalizedBrand,
    );
    return filteredCars;
  };

  const filterType = filteredData => {
    if (selType === 'All') {
      return filteredData;
    }
    const normalizedType = selType.toLowerCase();
    const filteredCars = filteredData.filter(
      car => car.type.toLowerCase() === normalizedType,
    );
    return filteredCars;
  };

  const filterYear = filteredData => {
    if (selYear === 0) {
      return filteredData;
    }
    const filteredCars = filteredData.filter(car => car.year === selYear);
    return filteredCars;
  };

  const filterPrice = filteredData => {
    if (selPrice === 0) {
      return filteredData;
    }

    const filteredCars = filteredData.filter(car => {
      const carPrice = car.rentalPrice.split('$')[1];
      if (selPrice === 100) {
        return 0 <= carPrice && carPrice <= 100;
      } else if (selPrice === 500) {
        return 100 <= carPrice && carPrice <= 500;
      } else if (selPrice === 1000) {
        return 500 <= carPrice && carPrice <= 1000;
      } else {
        return 1000 <= carPrice;
      }
    });
    return filteredCars;
  };

  const resetFilters = () => {
    dispatch(setFiltersReset());
  };

  useEffect(() => {
    if (!selFilterChoiced) {
      return;
    }

    let filteredData = filterBrand(catalog);
    filteredData = filterType(filteredData);
    filteredData = filterYear(filteredData);
    filteredData = filterPrice(filteredData);
    setFilteredCars(filteredData);
  }, [selBrand, selType, selYear, selPrice, favorites]);

  return (
    <>
      <div className={s.filters}>
        <FiltersSelects />
        <Button
          className={s.btnFilter}
          onClick={resetFilters}
          aria-label="button reset filters"
        >
          Reset Filters
        </Button>
      </div>

      {selFilterChoiced && filteredCars.length !== 0 && (
        <CarsList catalog={filteredCars} />
      )}
      {selFilterChoiced && filteredCars.length === 0 && (
        <div className={s.notFound}>No cars matching the filter</div>
      )}
    </>
  );
};
