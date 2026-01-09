import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F5F3F0]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-16 reveal">
           <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#153F3F]">About Us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <h2 className="font-serif text-5xl md:text-7xl text-[#153F3F] leading-[1.1] mb-12 reveal delay-100">
                A brand you can <span className="italic">feel</span>, <br />
                a team you can <span className="italic">trust.</span>
              </h2>
            </div>
        </div>

        <div className="relative mt-8 reveal delay-200">
            <div className="aspect-[16/9] w-full overflow-hidden shadow-2xl rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Team" 
                className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-1000"
              />
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
           <p className="font-sans text-[#153F3F]/80 text-lg leading-relaxed reveal delay-300">
              We believe the best careers are built on care as much as sound. That is why students trust us to read the room, set the tone, and keep the inspiration alive from start to finish.
           </p>
           <div className="reveal delay-500">
             <p className="font-sans text-[#153F3F]/80 text-lg leading-relaxed mb-8">
               Anthem Music Academy is an Emeryville-based team dedicated to making every session unforgettable. We bring a premium yet approachable touch to education and events across California and beyond.
             </p>
             <button className="px-10 py-4 bg-[#153F3F] text-[#F5F3F0] rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#0d2929] transition-all hover:scale-105">
                Meet Our Team
             </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;