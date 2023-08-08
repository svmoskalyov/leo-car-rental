/* eslint-disable react/prop-types */
import s from './Button.module.scss';

export const Button = ({
  className,
  type = 'button',
  children,
  onClick,
  ...allyProps
}) => {
  return (
    <button
      className={`${className} ${s.button}`}
      type={type}
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
};
