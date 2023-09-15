import styles from './style.module.scss';
import HeaderHead from './HeaderHead';
import Menu from './Menu';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <HeaderHead />
        <Menu />
      </div>
    </div>
  );
};

export default Header;
