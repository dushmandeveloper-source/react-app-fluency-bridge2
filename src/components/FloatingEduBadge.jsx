const FloatingEduBadge = ({ icon, className, animation, delay }) => (
  <div className={`absolute bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center justify-center text-brand-dark z-40 ${animation} ${className}`} style={{ animationDelay: delay }}>
    {icon}
  </div>
);

export default FloatingEduBadge;
