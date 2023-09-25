import { MouseEventHandler } from 'react';
import styles from './style.module.scss';
const Burger = (props: {
  onClick: MouseEventHandler<HTMLDivElement>;
  isOpen: boolean;
}) => {
  const { onClick, isOpen } = props;
  return (
    <div
      className={`${styles.burger} ${isOpen ? styles.active : ''}`}
      onClick={onClick}
    >
      <span></span>
    </div>
  );
};

export default Burger;
