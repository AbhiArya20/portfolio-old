import { useEffect, useState } from 'react';

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const localStorageValue = localStorage.getItem('isDarkTheme');
    let isDarkTheme = localStorageValue === 'true';
    if (!localStorageValue) {
      isDarkTheme = true;
    }
    if (isDarkTheme) {
      document.body.classList.add('dark-mode');
    }
    setIsDarkMode(isDarkTheme);
  }, []);

  const toggleDarkMode = async () => {
    document.body.classList.add('body-opacity-0');
    await delay(1000);
    document.body.classList.toggle('dark-mode');
    setIsDarkMode((prev) => !prev);
    await delay(1000);
    document.body.classList.remove('body-opacity-0');

    localStorage.setItem('isDarkTheme', !isDarkMode);
  };
  return [isDarkMode, toggleDarkMode];
}
