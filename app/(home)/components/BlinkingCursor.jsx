import React, { useState, useEffect } from 'react';

const BlinkingCursor = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(v => !v); 
    }, 500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`text-green-500 font-bold ${isVisible ? 'inline' : 'hidden'}`}
    >
      |
    </span>
  );
};

export default BlinkingCursor;
