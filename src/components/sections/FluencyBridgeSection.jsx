import FloatingShape from '../FloatingShape';
import FloatingEduBadge from '../FloatingEduBadge';
import MotionText from '../MotionText';
import { ArrowUpRight } from '../icons/UIIcons';
import { MicIcon, TranslateIcon, ChatIcon } from '../icons/EduIcons';
import fluencyBridgeImage from '../../assets/Gemini_Generated_Image_5he8935he8935he8.png';
import fluencyBridgeLogo from '../../assets/fluency-bridge-logo.png';

const FluencyBridgeSection = () => (
  <section id="FluencyBridge" className="w-full lg:w-1/2 relative flex flex-col justify-center px-6 lg:px-12 xl:px-20 py-12 lg:py-32 border-b lg:border-b-0 lg:border-r border-white/30 transition-all duration-700 group hover:bg-white/10">

    <FloatingShape type="dot" className="w-4 h-4 opacity-80 top-1/3 left-10 animate-float-fast" />
    <FloatingShape type="ring" className="w-16 h-16 opacity-60 bottom-1/4 right-20 animate-float-slow" />

    {/* Floating Unique Logo - Fluency Bridge */}
    <div className="absolute top-[5%] lg:top-[8%] left-[5%] lg:left-[10%] w-24 h-24 lg:w-36 lg:h-36 bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center justify-center animate-float z-40 p-2">
      <img src={fluencyBridgeLogo} alt="Fluency Bridge logo" className="w-full h-full object-contain" />
    </div>

    {/* Floating Education Icons for Fluency */}
    <FloatingEduBadge
      icon={<MicIcon />}
      className="w-16 h-16 top-[30%] lg:top-[28%] left-[5%] lg:left-[8%]"
      animation="animate-float"
    />
    <FloatingEduBadge
      icon={<TranslateIcon />}
      className="w-14 h-14 bottom-[40%] lg:bottom-[35%] left-[10%] lg:left-[15%]"
      animation="animate-float-slow"
      delay="1s"
    />
    <FloatingEduBadge
      icon={<ChatIcon />}
      className="w-14 h-14 top-[20%] lg:top-[25%] right-[10%] lg:right-[15%]"
      animation="animate-float-fast"
      delay="0.5s"
    />

    {/* Organic Glass Blob Image */}
    <div className="w-full flex justify-center mb-10 mt-16 lg:mt-12 relative z-20">
      <div className="blob-shape-1 w-[80%] max-w-md aspect-[4/5] overflow-hidden animate-reveal-image shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-white/20">
        <img src={fluencyBridgeImage} alt="Woman speaking on microphone" className="w-full h-full object-cover" />
      </div>
    </div>

    {/* Text Content */}
    <div className="relative z-20 max-w-lg mx-auto w-full flex flex-col bg-white/80 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] mt-4">
      <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-brand-dark mb-4 tracking-tighter leading-[1.1]">
        <MotionText text="Fluency" delayOffset={100} /><br />
        <MotionText text="Bridge." delayOffset={300} className="font-serif italic font-normal text-brand-accent glow-green animate-blink-soft" />
      </h1>

      <p className="text-base xl:text-lg text-gray-700 leading-relaxed mb-8 font-medium opacity-0 animate-fade-in-up delay-400">
        Our elite frontline program focusing on high-performance English communication coaching for professionals and international students following the Natural English Method.
      </p>

      <div className="opacity-0 animate-fade-in-up delay-600 mt-auto">
        <button className="flex items-center gap-3 text-brand-dark font-bold text-base group/btn hover:text-brand-accent transition-colors">
          <span className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover/btn:border-brand-accent group-hover/btn:bg-brand-accent/20 transition-all bg-white/80">
            <ArrowUpRight className="group-hover/btn:rotate-45 transition-transform duration-300" />
          </span>
          Explore the coaching program
        </button>
      </div>
    </div>
  </section>
);

export default FluencyBridgeSection;
