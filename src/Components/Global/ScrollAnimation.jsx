import React, { useEffect, useState, useRef } from 'react';

const ScrollAnimation = ({ children, direction }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(elementRef.current);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getInitialPositionClass = () => {
    switch (direction) {
      case 'left':
        return '-translate-x-10';
      case 'right':
        return 'translate-x-10';
      case 'up':
        return 'translate-y-10';
      case 'down':
        return '-translate-y-10';
      default:
        return '';
    }
  };

  const classes = `transition-all duration-700 ease-out ${
    isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${getInitialPositionClass()}`
  }`;

  return (
    <div ref={elementRef} className={classes}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
