import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="pt-24 pb-48 bg-[#153F3F] relative text-[#F5F3F0]">
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        
        <div className="mb-16 reveal">
           <span className="font-sans text-xs uppercase tracking-[0.3em] opacity-70">Why Us?</span>
        </div>

        <div className="max-w-4xl mx-auto reveal delay-100">
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-12">
            More than <span className="italic opacity-80">music</span>, it's about <span className="italic opacity-80">connection.</span>
          </h2>
          
          <p className="font-serif text-xl md:text-2xl leading-relaxed opacity-90 font-light reveal delay-200">
            At Anthem, we read the room, set the pace, and keep the inspiration flowing — turning your passion for audio into a career people talk about long after the session ends.
          </p>
        </div>
      </div>

      {/* Wavy Divider - Transition back to Cream */}
      <div className="absolute bottom-[-1px] left-0 w-full leading-none z-20 text-[#F5F3F0] overflow-hidden">
        <svg className="relative block w-[120%] -ml-[10%] h-[80px] md:h-[120px] animate-wave" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F5F3F0" transform="scale(1, -1) translate(0, -120)"></path>
        </svg>
      </div>
    </section>
  );
};

export default WhyUs;