import fluencyBridgeLogo from '../../assets/fluency-bridge-logo.png';

const FooterBrand = () => (
  <div className="lg:col-span-5">
    <div className="bg-white/90 rounded-2xl p-2 h-14 w-fit flex items-center justify-center mb-8">
      <img src={fluencyBridgeLogo} alt="Fluency Bridge logo" className="h-full w-auto object-contain" />
    </div>
    <p className="text-lg text-white/60 font-medium leading-relaxed max-w-md">
      Architecting Global Futures through elite English coaching and ethical NZ education consultancy.
    </p>
  </div>
);

export default FooterBrand;
