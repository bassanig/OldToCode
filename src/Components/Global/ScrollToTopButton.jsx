import React from 'react';
import arrow from '../../assets/icons/arrowDark.svg';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 max-sm:hidden right-6 z-[100]">
      {isVisible && 
        <button 
          onClick={scrollToTop}
          className="bg-amarelo hover:bg-amarelo-escuro text-white font-bold py-6 px-6 rounded-full shadow-lg cursor-pointer"
        >
          <img src={arrow} className='-rotate-90' alt="" />
        </button>
      }
    </div>
  );
};

export default ScrollToTopButton;
