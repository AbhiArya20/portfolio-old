import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

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
    document.body.classList.toggle('dark-mode');
    setIsDarkMode((prev) => !prev);
    localStorage.setItem('isDarkTheme', isDarkMode ? "false" : "true");
  };

  return [isDarkMode, toggleDarkMode] as const;
}

export type DarkModeHook = {
  isDarkMode: ReturnType<typeof useDarkMode>[0];
  toggleDarkMode: ReturnType<typeof useDarkMode>[1];
};