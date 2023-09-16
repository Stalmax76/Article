import styles from './style.module.scss';
import ActiveBlock from './ActiveBlock/';
import MainTitle from '../../UI/MainTitle';
import Button from '../../UI/Button';

const HeaderHead = () => {
  const mainTitleText = 'VinnitsaTimes';
  const buttonText = 'Оформити підписку';

  return (
    <div className={styles.headerHead}>
      <ActiveBlock />
      <MainTitle mainTitleText={mainTitleText} />
      <Button buttonText={buttonText} />
    </div>
  );
};

export default HeaderHead;
