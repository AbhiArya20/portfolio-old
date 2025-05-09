import { useEffect, useState } from 'react';

const getActive = (path) => {
  switch (path) {
    case '':
      return 0;
    case 'portfolio':
      return 1;
    case 'blog':
      return 2;
    case 'about-me':
      return 3;
    case 'contact':
      return 4;
    default:
      return undefined;
  }
};

export default function useActive() {
  const [path, setPath] = useState(() => window.location.pathname.split('/')[1]);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname.split('/')[1]);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const active = getActive(path);
  return { active, path };
}
