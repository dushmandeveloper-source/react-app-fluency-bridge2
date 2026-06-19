import { useState } from 'react';
import useScrolled from '../hooks/useScrolled';
import { menuItems } from '../data/navigation';
import { ArrowUpRight, MenuIcon, CloseIcon } from './icons/UIIcons';
import fluencyBridgeLogo from '../assets/fluency-bridge-logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 py-5 lg:px-16 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-md py-4 border-b border-white/40' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">

        <div className="flex items-center gap-4 cursor-none">
          <img src={fluencyBridgeLogo} alt="Fluency Bridge logo" className="h-16 w-auto object-contain" />
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.replace(/\s+/g, '')}`} className="px-4 py-2 rounded-full text-sm font-extrabold tracking-wide text-brand-dark hover:text-brand-accent transition-all">
              {item}
            </a>
          ))}
          <a href="#ContactUs" className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-dark text-white text-sm font-bold hover:bg-brand-accent hover:text-brand-dark transition-all shadow-lg ml-4">
            Contact Us <ArrowUpRight />
          </a>
        </div>

        <button className="lg:hidden p-2 text-brand-dark bg-white/80 rounded-lg shadow-sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden max-w-[1400px] mx-auto mt-4 flex flex-col gap-3 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/40 shadow-lg p-4 animate-fade-in-up">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.replace(/\s+/g, '')}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-extrabold tracking-wide text-brand-dark hover:text-brand-accent transition-all text-center"
            >
              {item}
            </a>
          ))}
          <a
            href="#ContactUs"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-dark text-white text-sm font-bold hover:bg-brand-accent hover:text-brand-dark transition-all shadow-lg"
          >
            Contact Us <ArrowUpRight />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
