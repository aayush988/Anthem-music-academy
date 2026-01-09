import React, { useState, useEffect } from 'react';

interface HeroProps {
  startAnimation: boolean;
}

const Hero: React.FC<HeroProps> = ({ startAnimation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const studioDetails = [
    { 
      label: "Control Room A", 
      src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop",
      vibe: "Deep Focus"
    },
    { 
      label: "Analog Chain", 
      src: "https://images.unsplash.com/photo-1558584724-0e4d32ca55a4?q=80&w=1000&auto=format&fit=crop",
      vibe: "Warmth"
    },
    { 
      label: "Vocal Booth", 
      src: "https://images.unsplash.com/photo-1525011268546-bf3f9b0bd02f?q=80&w=1000&auto=format&fit=crop",
      vibe: "Clarity"
    }
  ];

  useEffect(() => {
    let timer: number;
    if (isPlaying) {
      timer = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % studioDetails.length);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % studioDetails.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + studioDetails.length) % studioDetails.length);
    setIsPlaying(false);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section className="relative min-h-screen w-full bg-[#F5F3F0] flex flex-col items-center pt-36 pb-20 px-4 md:px-12 overflow-hidden">
      
      {/* Decorative Musical SVG: Floating Note */}
      <div 
        className={`absolute top-32 left-[10%] opacity-20 pointer-events-none transition-all duration-1000 delay-1000 ${startAnimation ? 'translate-y-0 opacity-20' : 'translate-y-10 opacity-0'}`}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-float-slow">
            <path d="M9 18V5L21 3V16" stroke="#153F3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="6" cy="18" r="3" fill="#153F3F"/>
            <circle cx="18" cy="16" r="3" fill="#153F3F"/>
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl flex flex-col items-center text-center relative z-10">
        
        {/* Headline - Split for staggered entrance */}
        <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-[#153F3F] leading-[0.95] tracking-tighter mb-8 relative">
           {/* Line 1 */}
           <div className="overflow-hidden">
              <span className={`block transition-all duration-1000 cubic-bezier(0.22, 1, 0.36, 1) delay-300 ${startAnimation ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'}`}>
                Unforgettable
              </span>
           </div>
           
           {/* Line 2 */}
           <div className="overflow-hidden">
              <span className={`block transition-all duration-1000 cubic-bezier(0.22, 1, 0.36, 1) delay-500 ${startAnimation ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'}`}>
                moments start
              </span>
           </div>

           {/* Line 3 */}
           <div className="overflow-hidden relative pb-4 md:pb-6">
               <span className={`block transition-all duration-1000 cubic-bezier(0.22, 1, 0.36, 1) delay-700 ${startAnimation ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'}`}>
                  with the <span className="italic font-light text-[#2B6F6F]">music.</span>
               </span>
               
               {/* Scribble decoration - Revealed last */}
               <svg 
                 className={`absolute bottom-2 md:bottom-4 right-0 w-[120px] md:w-[200px] text-[#e05a39] opacity-80 transition-all duration-1000 delay-1000 ${startAnimation ? 'stroke-dashoffset-0 opacity-80' : 'stroke-dashoffset-full opacity-0'}`} 
                 viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                 style={{ strokeDasharray: 200, strokeDashoffset: startAnimation ? 0 : 200 }}
               >
                  <path d="M2 10C40 15 80 15 198 2" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
               </svg>
           </div>
        </h1>

        <p 
            className={`font-sans text-[#153F3F] text-lg md:text-xl max-w-2xl leading-relaxed mb-12 transition-all duration-1000 delay-1000 ${startAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Rooted in Emeryville, bringing creativity & production to life.
        </p>

        {/* BENTO GRID DASHBOARD */}
        <div 
            className={`w-full grid grid-cols-1 md:grid-cols-12 gap-6 transition-all duration-1000 delay-[1200ms] ${startAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            
            {/* Card 1: Spotify-Style Studio Player */}
            <div className="md:col-span-3 bg-[#153F3F] rounded-3xl overflow-hidden shadow-xl flex flex-col h-[380px] group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-[#153F3F]">
                
                {/* Top Half: Visual Cover Art */}
                <div className="relative h-[60%] w-full bg-black overflow-hidden">
                    {studioDetails.map((item, index) => (
                        <div 
                            key={index} 
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <img 
                                src={item.src} 
                                alt={item.label} 
                                className="w-full h-full object-cover opacity-90 transition-transform duration-[4000ms] ease-linear scale-110" 
                                style={{ transform: index === currentSlide && isPlaying ? 'scale(1.1)' : 'scale(1)' }} 
                            />
                        </div>
                    ))}
                    {/* Live Badge */}
                    <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-[#e05a39] animate-pulse' : 'bg-white/50'}`}></div>
                        <span className="text-[9px] text-white font-bold uppercase tracking-wider">On Air</span>
                    </div>
                </div>

                {/* Bottom Half: Player Controls */}
                <div className="flex-1 px-5 py-4 flex flex-col justify-between relative bg-[#153F3F]">
                    
                    {/* Track Info */}
                    <div className="flex flex-col items-start">
                        <h3 className="font-serif text-xl text-[#F5F3F0] truncate w-full leading-tight">
                            {studioDetails[currentSlide].vibe}
                        </h3>
                        <p className="text-[10px] text-[#F5F3F0]/60 uppercase tracking-widest mt-1">
                            {studioDetails[currentSlide].label}
                        </p>
                    </div>

                    {/* Progress Bar & Buttons */}
                    <div className="space-y-3 mt-2">
                        {/* Progress Bar */}
                        <div className="w-full flex items-center gap-2 group/progress cursor-pointer">
                            <span className="text-[9px] text-[#F5F3F0]/40 font-mono">0:0{currentSlide + 1}</span>
                            <div className="flex-grow h-1 bg-[#F5F3F0]/10 rounded-full overflow-hidden relative">
                                <div 
                                    key={`${currentSlide}-${isPlaying}`} 
                                    className={`absolute top-0 left-0 h-full bg-[#e05a39] rounded-full ${isPlaying ? 'animate-[progress_4s_linear_forwards]' : 'w-full opacity-50'}`}
                                    style={{ animationPlayState: isPlaying ? 'running' : 'paused', width: isPlaying ? 'auto' : '30%' }}
                                ></div>
                            </div>
                            <span className="text-[9px] text-[#F5F3F0]/40 font-mono">0:04</span>
                        </div>

                        {/* Control Buttons */}
                        <div className="flex items-center justify-center gap-6">
                            <button 
                                onClick={handlePrev}
                                className="text-[#F5F3F0]/60 hover:text-[#F5F3F0] transition-colors"
                                aria-label="Previous"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 6h2v12H7zm3.5 6l8.5 6V6z"/></svg>
                            </button>

                            <button 
                                onClick={togglePlay}
                                className="w-10 h-10 bg-[#F5F3F0] text-[#153F3F] rounded-full flex items-center justify-center hover:scale-110 hover:bg-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                aria-label={isPlaying ? "Pause" : "Play"}
                            >
                                {isPlaying ? (
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" transform="rotate(0)" style={{ display: 'none' }}/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                                ) : (
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5"><path d="M8 5v14l11-7z"/></svg>
                                )}
                            </button>

                            <button 
                                onClick={handleNext}
                                className="text-[#F5F3F0]/60 hover:text-[#F5F3F0] transition-colors"
                                aria-label="Next"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 18l8.5-6L7 6v12zM17 6v12h2V6h-2z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 2: The Main Story (Center - Large) */}
            <div className="md:col-span-6 bg-[#153F3F] rounded-3xl overflow-hidden relative h-[380px] group shadow-2xl cursor-pointer">
                {/* Heavy Gradient Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 z-10 group-hover:via-black/30 transition-all duration-500"></div>
                
                <img 
                    src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop" 
                    alt="Studio Session" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2000ms] ease-out" 
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-[#F5F3F0]/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-xl bg-white/5">
                         <div className="w-12 h-12 bg-[#F5F3F0] rounded-full flex items-center justify-center text-[#153F3F] shadow-inner">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                                <path d="M8 5V19L19 12L8 5Z" />
                            </svg>
                         </div>
                    </div>
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#F5F3F0] mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 text-shadow">
                        Watch Story
                    </span>
                </div>

                <div className="absolute bottom-6 left-6 z-20 text-left">
                     <h3 className="font-serif text-2xl md:text-3xl text-[#F5F3F0] leading-none mb-2 drop-shadow-md">Session One</h3>
                     <p className="text-[10px] text-[#F5F3F0]/80 uppercase tracking-widest border-l-2 border-[#e05a39] pl-3">Documentary Series</p>
                </div>

                {/* Sound Indicator */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full z-20 border border-white/10">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.84 14 18.7V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM3 9V15H7L12 20V4L7 9H3Z" />
                    </svg>
                    <span className="text-[9px] text-white font-bold uppercase tracking-wider">Sound On</span>
                </div>
            </div>

            {/* Card 3: The Session Log (Right) */}
            <div className="md:col-span-3 bg-[#e8e6e1] rounded-3xl p-6 border border-[#153F3F]/10 flex flex-col justify-between h-[380px] relative group hover:bg-[#dcd9d3] transition-colors">
                 <div className="flex justify-between items-start">
                     <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#153F3F]/60">Schedule</span>
                     <span className="bg-[#153F3F] text-[#F5F3F0] text-[10px] font-bold px-2 py-1 rounded uppercase">New</span>
                 </div>

                 <div className="my-auto relative z-10">
                    <h3 className="font-serif text-3xl text-[#153F3F] leading-none mb-1">Upcoming <br/> Sessions</h3>
                    <p className="text-xs text-[#153F3F]/60 mt-2">Reserve your slot for the Fall semester.</p>
                 </div>

                 <div className="space-y-4 relative z-10">
                     <div className="flex justify-between text-xs font-bold border-b border-[#153F3F]/10 pb-2">
                         <span>Next Open House</span>
                         <span className="text-[#e05a39]">Aug 24</span>
                     </div>
                     {/* SVG Barcode - Visual Storytelling Element */}
                     <div className="flex items-end justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                         <div>
                             <span className="block text-xl font-bold font-sans tracking-tighter">RSVP</span>
                         </div>
                         <svg height="25" width="80" viewBox="0 0 100 30" preserveAspectRatio="none">
                             <rect x="0" y="0" width="4" height="30" fill="#153F3F"/>
                             <rect x="8" y="5" width="2" height="25" fill="#153F3F"/>
                             <rect x="14" y="0" width="6" height="30" fill="#153F3F"/>
                             <rect x="24" y="8" width="1" height="22" fill="#153F3F"/>
                             <rect x="28" y="0" width="3" height="30" fill="#153F3F"/>
                             <rect x="36" y="2" width="8" height="28" fill="#153F3F"/>
                             <rect x="50" y="0" width="2" height="30" fill="#153F3F"/>
                             <rect x="56" y="10" width="4" height="20" fill="#153F3F"/>
                             <rect x="64" y="0" width="2" height="30" fill="#153F3F"/>
                             <rect x="70" y="5" width="5" height="25" fill="#153F3F"/>
                             <rect x="80" y="0" width="3" height="30" fill="#153F3F"/>
                             <rect x="88" y="0" width="12" height="30" fill="#153F3F"/>
                         </svg>
                     </div>
                 </div>
                 
                 {/* Hover effect background decoration */}
                 <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#153F3F]/5 rounded-full blur-2xl group-hover:bg-[#153F3F]/10 transition-colors"></div>
            </div>

        </div>

      </div>
      
      <style>{`
        @keyframes progress { 
            from { width: 0%; } 
            to { width: 100%; } 
        }
        .text-shadow {
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
};

export default Hero;