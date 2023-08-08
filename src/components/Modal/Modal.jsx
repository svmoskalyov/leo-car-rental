import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.documentElement.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.documentElement.style.overflowX = 'hidden';
      document.documentElement.style.overflowY = 'auto';
    };
  }, [handleKeyDown]);

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      {children}
    </div>,
    modalRoot,
  );
};
