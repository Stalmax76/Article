import styles from './style.module.scss';
const Button = ({ buttonText }: { buttonText: string }) => {
  return (
    <div className={styles.button}>
      <a>{buttonText}</a>
    </div>
  );
};

export default Button;
