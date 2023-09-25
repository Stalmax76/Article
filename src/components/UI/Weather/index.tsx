import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import iconisLoading from '../../../assets/img/icons/animated_loader_gif_n6b5x0.gif';

const KEY = '3fa1b2022990b86e709116d551f9ac84';
const API__Url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Warszawa&appid=${KEY}`;

interface IWeather {
  weather: { icon: string; main: string }[];
  main: { temp: number };
}

function Weather() {
  const [dataWeather, setDataWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  let weatherIcon,
    weatherStatus,
    temperatura = null;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API__Url, { method: 'GET' });
        const data = await res.json();
        setDataWeather(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);
  if (error) {
    return <h2> Error:{error}</h2>;
  }
  function getWeather(data: IWeather) {
    weatherIcon = data.weather[0].icon;
    weatherStatus = data.weather[0].main;
    temperatura = Math.round(data.main.temp);
  }

  if (dataWeather) {
    getWeather(dataWeather);
  }
  // console.log({ weatherIcon }, { weatherStatus }, { temperatura });
  return (
    <div className={styles.weather}>
      {isLoading ? (
        <div className={styles.isLoading}>
          <img src={iconisLoading} alt="loading..." />
        </div>
      ) : (
        <>
          <div className={styles.weather__icon}>
            <img
              src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
              alt={weatherStatus}
            />
          </div>
          <div className={styles.weather__temperature}>
            {temperatura} <span>&#176;</span>C
          </div>
        </>
      )}
    </div>
  );
}
export default Weather;
