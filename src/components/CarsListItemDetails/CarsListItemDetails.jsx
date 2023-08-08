import { Button } from 'components/Button/Button';
import s from './CarsListItemDetails.module.scss';

export const CarsListItemDetails = el => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = el;

  return (
    <div key={id} className={s.cardItem}>
      <div className={s.cardWrapper}>
        <img
          className={s.img}
          loading="lazy"
          src={img && `${img}`}
          width={461}
          height={248}
          alt="image car"
        />

        <h2 className={s.title}>
          {make}
          <span className={s.titleAccent}> {model}, </span>
          {year}
        </h2>

        <ul className={s.cartList}>
          <li className={s.cartListItem}>{address.split(',')[1]}</li>
          <li className={s.cartListItem}>{address.split(',')[2]}</li>
          <li className={s.cartListItem}>{rentalCompany}</li>
          <li className={s.cartListItem}>{type}</li>
          <li className={s.cartListItem}>{model}</li>
          <li className={s.cartListItem}>{mileage}</li>
          <li className={s.cartListItem}>{functionalities[0]}</li>
        </ul>

        <p className={s.description}>{description}</p>

        <p className={s.subTitle}>Accessories and functionalities: </p>

        <ul>
          <li>
            {accessories?.map((e, i) => (
              <span key={i} className={s.cartListItem}>
                {e}
              </span>
            ))}
          </li>
          <li>
            {functionalities?.map((e, i) => (
              <span key={i} className={s.cartListItem}>
                {e}
              </span>
            ))}
          </li>
        </ul>

        <p className={s.subTitle}>Rental Conditions: </p>

        <ul className={s.rentalList}>
          <li className={s.rentalListItem}>
            {rentalConditions.split(':')[0]}:
            <span className={s.rentalListSpan}>
              {rentalConditions.split('\n')[0].split(':')[1]}
            </span>
          </li>
          <li className={s.rentalListItem}>
            {rentalConditions.split('\n')[1]}
            <span className={s.rentalListSpan}></span>
          </li>
          <li className={s.rentalListItem}>
            {rentalConditions.split('\n')[2]}
            <span className={s.rentalListSpan}></span>
          </li>
          <li className={s.rentalListItem}>
            Mileage:
            <span className={s.rentalListSpan}>
              {`${mileage / 1000}`.replace('.', ',')}
            </span>
          </li>
          <li className={s.rentalListItem}>
            Price:
            <span className={s.rentalListSpan}>{rentalPrice}</span>
          </li>
        </ul>
      </div>

      <a className={s.btnRentalTel} href="tel:+380730000000">
        <Button className={s.btnRental}>Rental car</Button>
      </a>
    </div>
  );
};
