import styles from './App.module.css';
import Header from './components/Header';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <Header />
      </div>
    </div>
  );
}

export default App;
