import styles from './App.module.css';
import Header from './components/Header';
import Pages from './components/Pages';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <Header />
        <Pages />
      </div>
    </div>
  );
}

export default App;
