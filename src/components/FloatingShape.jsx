const FloatingShape = ({ type, className, style }) => {
  if (type === 'dot') return <div className={`absolute rounded-full bg-brand-accent ${className}`} style={style}></div>;
  if (type === 'ring') return <div className={`absolute rounded-full border border-brand-accent/50 ${className}`} style={style}></div>;
  if (type === 'plus') return (
    <div className={`absolute text-brand-accent font-bold ${className}`} style={style}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </div>
  );
  return null;
};

export default FloatingShape;
