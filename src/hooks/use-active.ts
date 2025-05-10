import { useEffect, useState } from 'react';

const getActive = (hash: string) => {
  switch (hash) {
    case '#home':
      return 0;
    case '#project':
      return 1;
    case '#contact':
      return 2;
    default:
      return 0;
  }
};

export default function useActive() {
  const [active, setActive] = useState(getActive(window.location.hash));
  const handleHashChange = () => {
    if (!window?.location?.hash) return;
    setActive(getActive(window.location.hash));
  };

  useEffect(() => {
    const sections = ['home', 'project', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const newHash = `#${id}`;
            if (window.location.hash !== newHash) {
              history.replaceState(null, '', newHash);
              handleHashChange();
            }
          }
        },
        { threshold: .6 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    }
  }, []);


  return { active };
}