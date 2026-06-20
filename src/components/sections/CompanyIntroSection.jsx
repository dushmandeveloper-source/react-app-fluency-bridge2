import AnimatedParagraph from '../AnimatedParagraph';

const COMPANY_INTRO_SEGMENTS = [
  {
    text: 'Fluency Bridge Global Limited is a premier New Zealand-based, service-oriented enterprise. ',
    className: 'text-brand-dark',
  },
  {
    text: 'We bridge the gap between regional potential and global success through our parent corporate infrastructure, managing two distinct, specialised operational branches:',
    className: 'text-brand-accent glow-green',
  },
];

const CompanyIntroSection = () => (
  <section className="relative z-10 pt-20 lg:pt-24 pb-8 lg:pb-10 px-6 lg:px-16">
    <AnimatedParagraph
      segments={COMPANY_INTRO_SEGMENTS}
      className="max-w-3xl mx-auto text-center font-serif font-bold text-2xl lg:text-3xl leading-relaxed"
    />
  </section>
);

export default CompanyIntroSection;
