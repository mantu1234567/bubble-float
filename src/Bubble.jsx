import React, { useState, useEffect } from 'react';
import './Bubble.css';

const Bubble = () => {
  const [size, setSize] = useState(150); // Initial size of the bubble
  const [position, setPosition] = useState({ top: '20%', left: '50%' }); // Initial position
  const [isBursting, setIsBursting] = useState(false); // To trigger the burst effect

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newSize = 150 + scrollY * 0.1; // Increase size based on scroll position
      setSize(newSize);

      // Move the bubble across the screen based on scroll position
      const newTop = 20 + (scrollY * 0.05) % 60; // Moving vertically within 20% to 80%
      const newLeft = 50 + (Math.sin(scrollY * 0.01) * 30); // Move left-right with a sine wave
      setPosition({ top: `${newTop}%`, left: `${newLeft}%` });

      // Check if we're at the last section by checking scroll height
      if (window.innerHeight + scrollY >= document.body.scrollHeight - 10) {
        setIsBursting(true);
      } else {
        setIsBursting(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`bubble ${isBursting ? 'burst' : ''}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: position.top,
        left: position.left,
      }}
    ></div>
  );
};

export default Bubble;
