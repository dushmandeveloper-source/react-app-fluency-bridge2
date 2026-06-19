import { useEffect, useRef } from 'react';
import anime from 'animejs';

const AnimatedParagraph = ({ text, className = '' }) => {
  const lineRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const textWrapper = textRef.current;
    if (!textWrapper) return;

    textWrapper.innerHTML = text
      .split(' ')
      .map((word) => `<span class="word inline-block opacity-0">${word}</span>`)
      .join(' ');

    const anim = anime
      .timeline({ loop: false })
      .add({
        targets: lineRef.current,
        scaleX: [0, 1],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 800,
      })
      .add({
        targets: textWrapper.querySelectorAll('.word'),
        opacity: [0, 1],
        translateY: ['0.6em', 0],
        easing: 'easeOutExpo',
        duration: 800,
        delay: (el, i) => i * 35,
        offset: '-=400',
      });

    return () => anim.pause();
  }, [text]);

  return (
    <div className={className}>
      <span ref={lineRef} className="block h-px w-24 bg-brand-accent mx-auto mb-8 origin-center scale-x-0"></span>
      <p ref={textRef} className="inline"></p>
    </div>
  );
};

export default AnimatedParagraph;
