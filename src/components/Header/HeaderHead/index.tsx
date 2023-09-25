import { MouseEventHandler } from 'react';
import styles from './style.module.scss';
import ActiveBlock from './ActiveBlock/';
import MainTitle from '../../UI/MainTitle';
import Button from '../../UI/Button';

const HeaderHead = (props: {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLElement>;
}) => {
  const { isOpen, onClick } = props;
  const mainTitleText = 'VinnitsaTimes';
  const buttonText = 'Оформити підписку';

  return (
    <div className={styles.headerHead}>
      <ActiveBlock onClick={onClick} isOpen={isOpen} />
      <MainTitle mainTitleText={mainTitleText} />
      <Button buttonText={buttonText} />
    </div>
  );
};

export default HeaderHead;
