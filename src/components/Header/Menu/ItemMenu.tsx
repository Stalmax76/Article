import styles from './style.module.scss';

interface IMenuItem {
  text: string;
  id: string;
}

function ItemMenu({ text, id }: IMenuItem) {
  // console.log(JSON.stringify({ text, id }));
  return (
    <div className={styles.item}>
      <a href={id} className={styles.item__link}>
        {text}
      </a>
    </div>
  );
}
export default ItemMenu;
