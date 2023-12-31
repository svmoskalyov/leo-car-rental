import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FiHeart } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { setFavorite } from 'redax/cars/carsSlice';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { CarsListItemDetails } from 'components/CarsListItemDetails/CarsListItemDetails';
import s from './CarsListItem.module.scss';

export const CarsListItem = el => {
  const {
    carId,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
    isFav,
  } = el;

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <li key={carId} className={s.cardItem}>
        <div>
          <img
            className={s.img}
            loading="lazy"
            src={img && `${img}`}
            width={274}
            height={268}
            alt="image car"
          />

          <label className={s.chekboxHeart}>
            <input
              className={'visuallyHidden'}
              type="checkbox"
              name="status"
              checked={isFav}
              onChange={() => dispatch(setFavorite({ ...el, isFav: !isFav }))}
            />
            <FiHeart className={s.heart} />
          </label>

          <div className={s.titleWrapper}>
            <h2 className={s.title}>
              {make}
              <span className={s.titleAccent}> {model}, </span>
              {year}
            </h2>
            <h2 className={s.title}>{rentalPrice}</h2>
          </div>

          <ul className={s.cartList}>
            <li className={s.cartListItem}>{address?.split(',')[2]}</li>
            <li className={s.cartListItem}>{rentalCompany}</li>
            <li className={s.cartListItem}>{type}</li>
            <li className={s.cartListItem}>{model}</li>
            <li className={s.cartListItem}>{mileage}</li>
            <li className={s.cartListItem}>{functionalities[0]}</li>
          </ul>
        </div>

        <Button onClick={toggleModal} aria-label="button learn more">
          Learn more
        </Button>
      </li>

      {showModal && (
        <Modal onClose={toggleModal}>
          <div className={s.itemDetailsWrapper}>
            <CarsListItemDetails {...el} />
            <Button
              className={s.btnModalCloseWrapper}
              onClick={toggleModal}
              aria-label="button modal close"
            >
              <IoClose className={s.btnModalClose} />
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};
