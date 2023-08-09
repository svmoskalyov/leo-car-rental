// import { getCarsApi, getTotalCarsApi } from 'services/firebaseApi';
import s from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={s.page}>
      <h1 className={s.title}>Welcome to Car Rental 🚘</h1>
      <p className={s.subtitle}>
        On the website, you can choose a car based on a photo and description,
        if you click the button Learn more, you will see detailed information
        about the car. You can add a car you like to your favorites and view the
        added cars on the favorites tab.
      </p>

      {/* <button type="button" onClick={getTotalCarsApi}>
        Total
      </button>
      <button type="button" onClick={()=>getCarsApi()}>
        Cars
      </button> */}
    </div>
  );
};
