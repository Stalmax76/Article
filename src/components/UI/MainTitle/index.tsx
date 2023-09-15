import styles from './style.module.scss';

const MainTitle = ({ mainTitleText }: { mainTitleText: string }) => {
  return (
    <div className={styles.mainTitle}>
      <h1>{mainTitleText}</h1>
    </div>
  );
};

export default MainTitle;
