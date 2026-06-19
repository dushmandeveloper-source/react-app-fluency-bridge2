import FloatingShape from '../FloatingShape';
import FloatingEduBadge from '../FloatingEduBadge';
import MotionText from '../MotionText';
import { ArrowUpRight } from '../icons/UIIcons';
import { GradCapIcon, DocumentIcon, AwardIcon } from '../icons/EduIcons';
import nzAcademicBridgeImage from '../../assets/Gemini_Generated_Image_5he8935he8935he82.png';
import nzAcademicBridgeLogo from '../../assets/nz-academic-bridge-logo.png';

const NZAcademicBridgeSection = () => (
  <section id="NZAcademicBridge" className="w-full lg:w-1/2 relative flex flex-col justify-center px-6 lg:px-12 xl:px-20 py-12 lg:py-32 transition-all duration-700 group hover:bg-white/10">

    <FloatingShape type="plus" className="w-6 h-6 opacity-80 top-1/4 right-10 animate-float-slow" />
    <FloatingShape type="dot" className="w-8 h-8 opacity-60 bottom-1/3 left-10 animate-float-fast" />

    {/* Floating Unique Logo - NZ Academic Bridge */}
    <div className="absolute top-[5%] lg:top-[8%] right-[5%] lg:right-[10%] w-24 h-24 lg:w-36 lg:h-36 bg-white/80 backdrop-blur-xl border border-white/50 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex items-center justify-center animate-float-slow z-40 p-1">
      <img src={nzAcademicBridgeLogo} alt="NZ Academic Bridge logo" className="w-full h-full object-contain rounded-full" />
    </div>

    {/* Floating Education Icons for NZ Academic */}
    <FloatingEduBadge
      icon={<GradCapIcon />}
      className="w-16 h-16 top-[30%] lg:top-[28%] right-[5%] lg:right-[8%]"
      animation="animate-float"
    />
    <FloatingEduBadge
      icon={<DocumentIcon />}
      className="w-14 h-14 bottom-[35%] lg:bottom-[45%] right-[10%] lg:right-[15%]"
      animation="animate-float-slow"
      delay="0.8s"
    />
    <FloatingEduBadge
      icon={<AwardIcon />}
      className="w-14 h-14 top-[40%] lg:top-[45%] left-[10%] lg:left-[12%]"
      animation="animate-float-fast"
      delay="1.2s"
    />

    {/* Text Content (Placed above image for diagonal symmetry on desktop) */}
    <div className="relative z-20 max-w-lg mx-auto w-full mb-10 lg:order-1 order-2 flex flex-col h-full lg:justify-end bg-white/80 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] mt-16 lg:mt-0">
      <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-brand-dark mb-4 tracking-tighter leading-[1.1]">
        <MotionText text="NZ Academic" delayOffset={200} /><br />
        <MotionText text="Bridge." delayOffset={400} className="font-serif italic font-normal text-brand-accent glow-green animate-blink-soft" />
      </h2>

      <p className="text-base xl:text-lg text-gray-700 leading-relaxed mb-8 font-medium opacity-0 animate-fade-in-up delay-500">
        Our specialised, dedicated branding branch specifically established to execute all international student recruitment, expert tertiary placement, and career transition consultancy services.
      </p>

      <div className="opacity-0 animate-fade-in-up delay-600">
        <button className="flex items-center gap-3 text-brand-dark font-bold text-base group/btn hover:text-brand-accent transition-colors">
          <span className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover/btn:border-brand-accent group-hover/btn:shadow-[0_0_15px_rgba(152,219,198,0.5)] group-hover/btn:bg-brand-accent/20 transition-all bg-white/80">
            <ArrowUpRight className="group-hover/btn:rotate-45 transition-transform duration-300" />
          </span>
          Explore the consultancy
        </button>
      </div>
    </div>

    {/* Organic Glass Blob Image */}
    <div className="w-full flex justify-center lg:order-2 order-1 mb-10 lg:mb-0 lg:mt-10 relative z-20">
      <div className="blob-shape-2 w-[80%] max-w-md aspect-[4/5] overflow-hidden animate-reveal-image shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-white/20 delay-200">
        <img src={nzAcademicBridgeImage} alt="Group of students talking outdoors" className="w-full h-full object-cover" />
      </div>
    </div>

  </section>
);

export default NZAcademicBridgeSection;
