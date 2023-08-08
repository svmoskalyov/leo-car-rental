import { Grid, Hearts, ThreeDots } from 'react-loader-spinner';
import s from './Loader.module.scss';

export const Loader = name => {
  switch (name.name) {
    case 'Grid':
      return (
        <Grid
          height="80"
          width="80"
          color="#3470ff"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass={s.backdrop}
          visible={true}
        />
      );

    case 'ThreeDots':
      return (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3470ff"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      );

    case 'Hearts':
      return (
        <Hearts
          height="80"
          width="80"
          color="#3470ff"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass={s.backdrop}
          visible={true}
        />
      );

    default:
      return <div>Loading...</div>;
  }
};
