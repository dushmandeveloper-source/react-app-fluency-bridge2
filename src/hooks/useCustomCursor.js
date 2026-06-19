import { useEffect, useRef } from 'react';

const useCustomCursor = () => {
  const cursorRef = useRef(null);
  const trailerRef = useRef(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let trailerX = window.innerWidth / 2;
    let trailerY = window.innerHeight / 2;
    let animationFrameId;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const renderCursor = () => {
      trailerX += (mouseX - trailerX) * 0.15;
      trailerY += (mouseY - trailerY) * 0.15;
      if (trailerRef.current) {
        trailerRef.current.style.transform = `translate3d(${trailerX}px, ${trailerY}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(renderCursor);
    };

    window.addEventListener('mousemove', onMouseMove);
    renderCursor();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return { cursorRef, trailerRef };
};

export default useCustomCursor;
