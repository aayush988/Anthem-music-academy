import React from 'react';

const Services: React.FC = () => {
  const services = [
    { title: "Mixing", icon: "🎚️" },
    { title: "Mastering", icon: "🎧" },
    { title: "Recording", icon: "🎙️" },
    { title: "Production", icon: "🎹" },
    { title: "Synthesis", icon: "⚡" },
    { title: "Acoustics", icon: "🔊" },
    { title: "Business", icon: "💼" },
    { title: "Theory", icon: "🎼" },
  ];

  return (
    <section className="py-24 bg-[#F5F3F0] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16 reveal">
        <h2 className="font-serif text-4xl text-[#333333]">Our Expertise</h2>
      </div>

      <div className="relative w-full">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#F5F3F0] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#F5F3F0] to-transparent z-10"></div>

        {/* Scrolling Track */}
        <div className="flex w-max animate-[scroll_30s_linear_infinite] hover:pause">
          {/* Double map for seamless loop */}
          {[...services, ...services, ...services].map((service, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center mx-8 md:mx-16 group cursor-default">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-lg flex items-center justify-center text-3xl md:text-4xl mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 border border-[#2B6F6F]/10">
                {service.icon}
              </div>
              <span className="font-serif text-xl text-[#333333] group-hover:text-[#2B6F6F] transition-colors">{service.title}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Services;