import useCustomCursor from '../hooks/useCustomCursor';

const CustomCursor = () => {
  const { cursorRef, trailerRef } = useCustomCursor();

  return (
    <>
      <div ref={cursorRef} className="fixed top-0 left-0 w-3 h-3 bg-brand-accent rounded-full pointer-events-none z-[9999] animate-cursor-blink mix-blend-difference"></div>
      <div ref={trailerRef} className="fixed top-0 left-0 w-10 h-10 border border-brand-accent/50 rounded-full pointer-events-none z-[9998] backdrop-blur-[1px] mix-blend-difference"></div>
    </>
  );
};

export default CustomCursor;
