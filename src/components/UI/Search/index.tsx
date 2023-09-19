import { useState } from 'react';
import styles from './style.module.scss';
import iconUrl from '../../../assets/img/icons/search.svg';
function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div
      className={styles.search}
      onClick={() => setIsOpen(!isOpen)}
      onSubmit={(e: React.SyntheticEvent) => e.preventDefault()}
    >
      {isOpen ? (
        <div className={styles.search__input}>
          <img src={iconUrl} alt="icon" />
          <input
            name="search"
            type="search"
            placeholder="Search"
            autoFocus
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchValue(e.target.value)
            }
          />
        </div>
      ) : (
        <img src={iconUrl} alt="icon" />
      )}
    </div>
  );
}
export default Search;
