/* eslint-disable no-unused-vars */
import React, { useState, useLayoutEffect } from 'react';

const useScrollPosition = (ref, offset = 0) => {
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const pos = ref.current.getBoundingClientRect().top;

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (pos + offset < scrollPos) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrolled;
};

export default useScrollPosition;
