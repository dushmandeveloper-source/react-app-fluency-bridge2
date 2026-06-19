import { useEffect, useRef } from 'react';
import anime from 'animejs';

const MotionText = ({ text, delayOffset = 0, className = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const textWrapper = containerRef.current;
    if (!textWrapper) return;

    textWrapper.innerHTML = text.replace(/\S/g, "<span class='letter inline-block' style='transform-origin: 0 100%;'>$&</span>");

    const anim = anime.timeline({ loop: false }).add({
      targets: textWrapper.querySelectorAll('.letter'),
      translateY: ['1.1em', 0],
      translateZ: 0,
      duration: 1200,
      delay: (el, i) => delayOffset + 40 * i,
      easing: 'easeOutExpo',
    });

    return () => anim.pause();
  }, [text, delayOffset]);

  return (
    <span className={`overflow-hidden inline-block leading-tight ${className}`}>
      <span ref={containerRef} className="inline-block">{text}</span>
    </span>
  );
};

export default MotionText;
