import { ArrowUpRight } from '../icons/UIIcons';
import { portfolioLinks } from '../../data/footerLinks';

const FooterPortfolioLinks = () => (
  <div className="lg:col-span-3 lg:col-start-7">
    <h4 className="text-white font-bold mb-8 tracking-widest uppercase text-sm">Portfolio</h4>
    <ul className="space-y-4 font-medium text-white/60">
      {portfolioLinks.map(({ label, href }) => (
        <li key={href}>
          <a href={href} className="hover:text-brand-accent transition-colors flex items-center gap-2">
            <ArrowUpRight className="w-4 h-4" /> {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterPortfolioLinks;
