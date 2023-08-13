import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import carBrands from 'assets/data/brands';
import { setBrand } from 'redax/filters/filtersSlice';
import { selectCars, selectFavorites } from 'redax/cars/carsSelectors';
import {
  selectFilterBrand,
  selectFilterChoiced,
} from 'redax/filters/filterSelectors';
import { CarsList } from 'components/CarsList/CarsList';
import s from './Filters.module.scss';

export const Filters = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);
  const selBrand = useSelector(selectFilterBrand);
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

  const handleBrandChange = event => {
    const { value } = event.target;
    dispatch(setBrand(value));
  };

  useEffect(() => {
    if (!selFilterChoiced) {
      return;
    }

    let filteredData = filterBrand(catalog);
    setFilteredCars(filteredData);
  }, [selBrand, favorites]);

  return (
    <>
      <div className={s.filters}>
        <div className={s.brandFilter}>
          <div>Filter by Brand :</div>
          <select
            className={s.brandInput}
            value={selBrand}
            onChange={handleBrandChange}
          >
            <option value="All">All</option>
            {carBrands.map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selFilterChoiced && <CarsList catalog={filteredCars} />}
      {selFilterChoiced && filteredCars.length === 0 && (
        <div>No cars matching the filter</div>
      )}
    </>
  );
};
