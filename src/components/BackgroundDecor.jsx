import FloatingShape from './FloatingShape';

const BackgroundDecor = () => (
  <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-r from-[#9DC8EF] via-[#EBF3F9] to-[#AEE6D5]">
    {/* Softly blending the texture over the gradient so the color remains prominent */}
    <img src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2000&auto=format&fit=crop" alt="Mountain Texture Overlay" className="w-full h-full object-cover opacity-10 mix-blend-multiply" />
    <div className="absolute inset-0 bg-white/20 backdrop-blur-[16px]"></div>

    <FloatingShape type="plus" className="w-8 h-8 opacity-50 top-[15%] left-[5%] animate-float-slow text-[#9DC8EF]" />
    <FloatingShape type="ring" className="w-32 h-32 opacity-40 bottom-[10%] right-[5%] animate-float border-[#AEE6D5]" />
  </div>
);

export default BackgroundDecor;
