import React, { useRef, useEffect } from 'react';

const Programs: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const offerings = [
    {
      id: "short-courses",
      title: "Short Courses",
      subtitle: "Skill-Specific Training",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop", 
      description: "Master specific tools like Ableton & Logic in 10-week sprints.",
      features: ["Ableton Live", "Mixing", "Logic Pro"],
      price: "From $900",
      cta: "View Courses"
    },
    {
      id: "anthem-program",
      title: "The Anthem Program",
      subtitle: "Flagship Certification",
      image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1000&auto=format&fit=crop", 
      description: "Complete professional foundation for career producers.",
      features: ["6 Months", "120+ Hours", "Career Support"],
      price: "From $6,000",
      cta: "Apply Now"
    },
    {
      id: "mentorship",
      title: "Private Mentorship",
      subtitle: "1-on-1 Guidance",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000&auto=format&fit=crop", 
      description: "Customized coaching for your unique sound.",
      features: ["Flexible", "Direct Feedback", "Expert Mentors"],
      price: "$150 / hr",
      cta: "Book Session"
    },
    {
      id: "community",
      title: "Community Events",
      subtitle: "Network & Grow",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop", 
      description: "Weekly meetups and masterclasses in the studio.",
      features: ["Networking", "Masterclasses", "Jam Sessions"],
      price: "Free Entry",
      cta: "Join Us"
    }
  ];

  return (
    <section id="programs" className="relative bg-[#F5F3F0] py-24 md:py-32 overflow-hidden">
      
      {/* Storytelling Element: Abstract musical flow background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="score-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
               <path d="M0 20h100M0 40h100M0 60h100M0 80h100" stroke="#153F3F" strokeWidth="1" fill="none"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#score-pattern)" />
         </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end md:justify-between relative z-10">
        <div className="mb-8 md:mb-0">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#153F3F] mb-4 block reveal">Our Curriculum</span>
            <h2 className="font-serif text-5xl md:text-7xl text-[#153F3F] leading-[0.95] reveal delay-100">
            Choose your <br/> <span className="italic text-[#2B6F6F]">path.</span>
            </h2>
        </div>
        
        <div className="hidden md:flex gap-4 mb-4 reveal delay-200">
            {/* Custom Navigation buttons could go here, but native scrollbar is hidden */}
            <p className="font-sans text-[#153F3F]/60 text-sm max-w-xs text-right">
                Swipe to explore our programs &rarr;
            </p>
        </div>
      </div>

      {/* Horizontal Scroll Layout */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-12 no-scrollbar snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        {offerings.map((item, index) => (
            <div 
               key={item.id} 
               className="reveal group flex flex-col flex-shrink-0 w-[85vw] md:w-[450px] snap-center h-full"
               style={{ animationDelay: `${index * 150}ms` }}
            >
               <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-[#153F3F]/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                  
                  {/* Image Container - Fixed Aspect Ratio */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                     <div className="absolute inset-0 bg-[#153F3F] opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                     <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                     />
                     <div className="absolute top-4 left-4 z-20">
                        <span className="inline-block bg-[#153F3F] text-[#F5F3F0] px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest shadow-md">
                           {item.subtitle}
                        </span>
                     </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex flex-col flex-grow">
                     <div className="mb-6">
                        <h3 className="font-serif text-3xl text-[#153F3F] mb-3 group-hover:text-[#2B6F6F] transition-colors">{item.title}</h3>
                        <p className="text-[#153F3F]/70 text-sm leading-relaxed mb-4">{item.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                           {item.features.map((f, i) => (
                              <span key={i} className="text-[10px] uppercase font-bold tracking-wider text-[#153F3F]/60 border border-[#153F3F]/10 px-2 py-1 rounded bg-[#F5F3F0]/50">
                                 {f}
                              </span>
                           ))}
                        </div>
                     </div>

                     <div className="mt-auto pt-6 border-t border-[#153F3F]/10 flex items-center justify-between">
                        <div>
                           <span className="block text-[10px] uppercase text-[#153F3F]/40 tracking-widest mb-1">Tuition</span>
                           <span className="font-serif text-xl text-[#153F3F] font-medium">{item.price}</span>
                        </div>
                        <button className="px-6 py-2 rounded-full border border-[#153F3F] text-[#153F3F] text-xs font-bold uppercase tracking-widest hover:bg-[#153F3F] hover:text-[#F5F3F0] transition-colors duration-300">
                           {item.cta}
                        </button>
                     </div>
                  </div>
               </div>
            </div>
        ))}
        
        {/* Spacer for right padding in horizontal scroll */}
        <div className="w-6 md:w-12 flex-shrink-0"></div>
      </div>
    </section>
  );
};

export default Programs;