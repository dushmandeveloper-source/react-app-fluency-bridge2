import { legalLinks } from '../../data/footerLinks';

const FooterBottomBar = () => (
  <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/40 font-medium">
    <p>© {new Date().getFullYear()} Fluency Bridge Global Limited. New Zealand.</p>
    <div className="flex gap-8 mt-4 md:mt-0">
      {legalLinks.map((label) => (
        <span key={label} className="hover:text-white cursor-pointer transition-colors">{label}</span>
      ))}
    </div>
  </div>
);

export default FooterBottomBar;
