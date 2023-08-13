import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import carBrands from 'assets/data/brands';
import carYears from 'assets/data/years.json';
import { setBrand, setPrice, setYear } from 'redax/filters/filtersSlice';
import { selectCars, selectFavorites } from 'redax/cars/carsSelectors';
import {
  selectFilterBrand,
  selectFilterYear,
  selectFilterPrice,
  selectFilterChoiced,
} from 'redax/filters/filterSelectors';
import { CarsList } from 'components/CarsList/CarsList';
import s from './Filters.module.scss';

export const Filters = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);
  const selBrand = useSelector(selectFilterBrand);
  const selYear = useSelector(selectFilterYear);
  const selPrice = useSelector(selectFilterPrice);
  const selFilterChoiced = useSelector(selectFilterChoiced);
  console.log('🚀 ~ Filters ~ selFilterChoiced:', selFilterChoiced);
  const [filteredCars, setFilteredCars] = useState([]);

  // console.log(catalog.map(el=>el.year));

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

  const filterYear = filteredData => {
    if (selYear === 0) {
      return filteredData;
    }
    const filteredCars = filteredData.filter(car => car.year === selYear);
    return filteredCars;
  };

  const handleYearChange = event => {
    const { value } = event.target;
    dispatch(setYear(Number(value)));
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

  const handlePriceChange = event => {
    const { value } = event.target;
    dispatch(setPrice(Number(value)));
  };

  useEffect(() => {
    if (!selFilterChoiced) {
      return;
    }

    let filteredData = filterBrand(catalog);
    filteredData = filterYear(filteredData);
    filteredData = filterPrice(filteredData);
    console.log('🚀 ~ useEffect ~ filteredData:', filteredData);
    setFilteredCars(filteredData);
  }, [selBrand, selYear, selPrice, favorites]);

  return (
    <>
      <div className={s.filters}>
        <div className={s.brandFilter}>
          <div>Filter by Brand:</div>
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

        <div className={s.yearFilter}>
          <div>Filter by Year:</div>
          <select
            className={s.yearInput}
            value={selYear}
            onChange={handleYearChange}
          >
            <option value={0}>All</option>
            {carYears.map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </select>
        </div>

        <div className={s.priceFilter}>
          <div>Filter by Price:</div>
          <select
            className={s.priceInput}
            value={selPrice}
            onChange={handlePriceChange}
          >
            <option value={0}>All</option>
            <option value={100}>$ 0 - $ 100</option>
            <option value={500}>$ 100 - $ 500</option>
            <option value={1000}>$ 500 - $ 1000</option>
            <option value={1001}>$ 1000 +</option>
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
