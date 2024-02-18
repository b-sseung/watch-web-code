import { useState, useEffect, createContext } from 'react';
import MainComponent from './component/MainComponent';
import i18next from './locales/i18n';
import { getLang } from './locales/i18n';

export const AppContext = createContext();

function App() {
  const [week, setWeek] = useState(0);
  const [date, setDate] = useState('0000-00-00');
  const [time, setTime] = useState(null);

  useEffect(() => {
    const getFormatNumber = (text) => {
      return text.toString().padStart(2, '0');
    };

    console.log(getLang());
    i18next.changeLanguage(getLang());

    const interval = setInterval(() => {
      const now = new Date();
      setWeek(now.getDay());
      setDate(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`);
      setTime(
        `${getFormatNumber(now.getHours())}:${getFormatNumber(now.getMinutes())}:${getFormatNumber(now.getSeconds())}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AppContext.Provider value={{ week, date, time }}>
      <MainComponent></MainComponent>
    </AppContext.Provider>
  );
}

export default App;
