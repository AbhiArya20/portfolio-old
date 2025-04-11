import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const active = getActive(path);
  return { active, path };
}
