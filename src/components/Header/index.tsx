import { useState } from 'react';
import styles from './style.module.scss';
import HeaderHead from './HeaderHead';
import Menu from './Menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <HeaderHead onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        <Menu isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Header;
