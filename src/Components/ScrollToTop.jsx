// Example of handling scroll to a section on route change
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { hash } = useLocation();
  

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'instant' });
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToTop;
