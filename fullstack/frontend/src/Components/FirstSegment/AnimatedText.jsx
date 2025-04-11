import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const splitTextToSpans = (text) => {
  return text.split('').map((char, index) => (
    <span key={index} className='char'>
      {char}
    </span>
  ));
};

const AnimatedText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const chars = textRef.current.querySelectorAll('.char');

    const tl = gsap.timeline();

    tl.from(chars, {
      duration: 5,
      opacity: 0,
      scale: 0.9,
      y: 80,
      rotationX: 150,
      transformOrigin: '0% 50% -50',
      ease: 'back',
      stagger: 0.02
    });
  }, []);

  return <h1 ref={textRef}>{splitTextToSpans(text)}</h1>;
};

export default AnimatedText;
