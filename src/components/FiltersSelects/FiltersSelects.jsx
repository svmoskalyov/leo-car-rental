import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redax/filters/filtersSlice';
import {
  selectFilterBrand,
  selectFilterType,
  selectFilterYear,
  selectFilterPrice,
} from 'redax/filters/filterSelectors';
import carBrands from 'assets/data/brands';
import carTypes from 'assets/data/types.json';
import carYears from 'assets/data/years.json';
import s from './FiltersSelects.module.scss';

export const FiltersSelects = () => {
  const dispatch = useDispatch();
  const selBrand = useSelector(selectFilterBrand);
  const selType = useSelector(selectFilterType);
  const selYear = useSelector(selectFilterYear);
  const selPrice = useSelector(selectFilterPrice);

  const handleBrandChange = event => {
    const { value } = event.target;
    dispatch(setFilter({ brand: value }));
  };

  const handleTypeChange = event => {
    const { value } = event.target;
    dispatch(setFilter({ type: value }));
  };

  const handleYearChange = event => {
    const { value } = event.target;
    dispatch(setFilter({ year: Number(value) }));
  };

  const handlePriceChange = event => {
    const { value } = event.target;
    dispatch(setFilter({ price: Number(value) }));
  };

  return (
    <>
      <div className={s.selectBox}>
        <div className={s.selectTitle}>Car brand</div>
        <div className={s.selectWrapper}>
          <select
            className={s.selectInput}
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

      <div className={s.selectBox}>
        <div className={s.selectTitle}>Body type</div>
        <div className={s.selectWrapper}>
          <select
            className={s.selectInput}
            value={selType}
            onChange={handleTypeChange}
          >
            <option value="All">All</option>
            {carTypes.map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={s.selectBox}>
        <div className={s.selectTitle}>Year</div>
        <div className={s.selectWrapper}>
          <select
            className={s.selectInput}
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
      </div>

      <div className={s.selectBox}>
        <div className={s.selectTitle}>Price per day</div>
        <div className={s.selectWrapper}>
          <select
            className={s.selectInput}
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
    </>
  );
};
