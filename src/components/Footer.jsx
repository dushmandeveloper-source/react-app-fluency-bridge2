import FooterBrand from './footer/FooterBrand';
import FooterPortfolioLinks from './footer/FooterPortfolioLinks';
import FooterContact from './footer/FooterContact';
import FooterBottomBar from './footer/FooterBottomBar';

const Footer = () => (
  <footer id="ContactUs" className="bg-[#0A2540] pt-24 pb-12 px-6 lg:px-16 text-white relative z-20 overflow-hidden">
    {/* Subtle background element in footer */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 border-b border-white/10 pb-16 mb-10">
        <FooterBrand />
        <FooterPortfolioLinks />
        <FooterContact />
      </div>

      <FooterBottomBar />
    </div>
  </footer>
);

export default Footer;
