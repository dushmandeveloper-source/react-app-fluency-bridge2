import AnimatedParagraph from '../AnimatedParagraph';

const COMPANY_INTRO_TEXT =
  'Fluency Bridge Global Limited is a premier New Zealand-based, service-oriented enterprise. We bridge the gap between regional potential and global success through our parent corporate infrastructure, managing two distinct, specialised operational branches:';

const CompanyIntroSection = () => (
  <section className="relative z-10 pt-20 lg:pt-24 pb-8 lg:pb-10 px-6 lg:px-16">
    <AnimatedParagraph
      text={COMPANY_INTRO_TEXT}
      className="max-w-3xl mx-auto text-center font-serif font-bold text-2xl lg:text-3xl text-brand-dark leading-relaxed"
    />
  </section>
);

export default CompanyIntroSection;
