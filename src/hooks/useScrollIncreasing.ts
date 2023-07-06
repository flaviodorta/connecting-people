import { useEffect, useState } from 'react';

const useScrollIncreasing = (initialValue = true) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [increasing, setIncreasing] = useState(initialValue);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isIncreasing = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setIncreasing(isIncreasing);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return increasing;
};

export default useScrollIncreasing;
