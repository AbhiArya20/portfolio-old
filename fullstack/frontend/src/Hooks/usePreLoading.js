import { useState } from 'react';

export default function usePreLoading() {
  const [preLoading, setPreLoading] = useState(true);
  setTimeout(() => {
    setPreLoading(false);
  }, 2800);
  return preLoading;
}
