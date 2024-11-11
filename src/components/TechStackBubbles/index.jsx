// TechStackBubbles.js
import './TechStackBubbles.css';
import nodejs from '../../img/Node.js_logo.png';
import react from '../../img/file-type-reactjs.png';
import mongodb from '../../img/MongoDB_Logo.png';
import html from '../../img/HTML5_logo_and_wordmark.png';
import css from '../../img/CSS3_logo_and_wordmark.png';
import sql from '../../img/Sql_data_base_with_logo.png';
import c from '../../img/C_Programming_Language.png';
import cplus from '../../img/ISO_C++_Logo.png';
import vue from '../../img/Vue.js_Logo_2.png';
import angular from '../../img/Angular_full_color_logo.png';
import ec2 from '../../img/aws-ec2.png';
import gcp from '../../img/google-cloud.png';
import redux from '../../img/redux-original.png'
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

const techStack = [
  { name: 'Node.js', src: nodejs },
  { name: 'React.js', src: react },
  { name: 'MongoDB', src: mongodb },
  { name: 'HTML', src: html },
  { name: 'CSS', src: css },
  { name: 'SQL', src: sql },
  { name: 'C', src: c },
  { name: 'C++', src: cplus },
  { name: 'Vue.js', src: vue },
  { name: 'Angular.js', src: angular },
  { name: 'ec2', src: ec2 },
  { name: 'gcp', src: gcp },
  { name: 'redux', src: redux },
];


const getRandomSpeed = () => ({
  x: (Math.random() - 0.2) * 2, // Speed between -1 and 1
  y: (Math.random() - 0.2) * 2,
});

const TechStackBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  // Initialize bubble positions and speeds
  useEffect(() => {
    const initialBubbles = techStack.map((tech, index) => ({
      id: index,
      src: tech.src,
      name: tech.name,
      top: Math.random() * 80 + 10, // Random top position
      left: Math.random() * 80 + 10, // Random left position
      speed: getRandomSpeed(),
    }));
    setBubbles(initialBubbles);
  }, []);

  // Animation logic
  const animationRef = useRef();
  const animate = () => {
    setBubbles((prevBubbles) =>
      prevBubbles.map((bubble) => {
        let newTop = bubble.top + bubble.speed.y;
        let newLeft = bubble.left + bubble.speed.x;

        // Bounce off edges
        if (newTop < 0 || newTop > window.innerHeight - 80) {
          bubble.speed.y *= -1; // Reverse vertical speed
          newTop = Math.max(0, Math.min(newTop, window.innerHeight - 80));
        }
        if (newLeft < 0 || newLeft > window.innerWidth - 80) {
          bubble.speed.x *= -1; // Reverse horizontal speed
          newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - 80));
        }

        return { ...bubble, top: newTop, left: newLeft };
      })
    );
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current); // Cleanup on unmount
  }, []);

  return (
    <div className="bubble-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            top: `${bubble.top}px`,
            left: `${bubble.left}px`,
            position: 'absolute',
            transition: 'none', // Disable CSS transition for smooth animation
          }}
        >
          <img src={bubble.src} alt={bubble.name} />
          <Box component={'p'} sx={{color:'text.disabled'}}>{bubble.name}</Box>
          {/* MUI */}
        </div>
      ))}
    </div>
  );
};

export default TechStackBubbles;