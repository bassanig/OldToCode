import { useEffect } from 'react';

const useNarrator = (isNarratorOn) => {
  useEffect(() => {
    if (!isNarratorOn) {
      speechSynthesis.cancel();
      return;
    }

    const handleMouseOver = (event) => {
      const text = event.target.innerText;
      if (text) {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
      }
    };

    const handleMouseOut = () => {
      speechSynthesis.cancel();
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      speechSynthesis.cancel();
    };
  }, [isNarratorOn]);
};

export default useNarrator;
