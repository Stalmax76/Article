import styles from './style.module.scss';
import Burger from '../../UI/Burger';
import MainTitle from '../../UI/MainTitle';
import Button from '../../UI/Button';

const HeaderHead = () => {
  const mainTitleText = 'VinnitsaTimes';
  const buttonText = 'Оформити підписку';

  return (
    <div className={styles.headerHead}>
      <Burger />
      <MainTitle mainTitleText={mainTitleText} />
      <Button buttonText={buttonText} />
    </div>
  );
};

export default HeaderHead;
