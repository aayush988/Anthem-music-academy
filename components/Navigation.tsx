import React, { useState, useEffect, useRef } from 'react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if at top
      if (currentScrollY < 10) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY.current && !isOpen) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {/* 
        Full Width Navigation Bar 
        - Hides on scroll down (translate-y-full)
        - Shows on scroll up
        - Transparent at top, Solid background when scrolled
      */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] transform
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            ${!isAtTop || isOpen ? 'py-4 bg-[#F5F3F0]/95 backdrop-blur-md shadow-sm border-b border-[#153F3F]/5' : 'py-6 bg-transparent'}
        `}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative">
            
            {/* LEFT: CTA (Desktop) */}
            <div className={`hidden md:flex items-center transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <a 
                    href="#contact" 
                    className="group relative text-xs font-bold uppercase tracking-widest text-[#153F3F] overflow-hidden"
                >
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Book a Tour</span>
                    <span className="absolute left-0 top-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-[#2B6F6F]">Let's Go</span>
                </a>
            </div>

            {/* CENTER: Logo & Name (Stacked Vertically with Equal Spacing) */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 group cursor-pointer">
                {/* 
                   Unified Flex Container for strict equal spacing.
                   gap-1.5 applies uniform spacing between:
                   1. Icon
                   2. ANTHEM
                   3. Music Academy
                */}
                <a href="#" className={`flex flex-col items-center justify-center gap-1.5 transition-colors duration-300 ${isOpen ? 'text-[#F5F3F0]' : 'text-[#153F3F]'}`}>
                  
                  {/* Music Icon: Beamed Notes */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform duration-500 block">
                    <path d="M9 18V5L21 3V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="6" cy="18" r="3" fill="currentColor"/>
                    <circle cx="18" cy="16" r="3" fill="currentColor"/>
                  </svg>
                
                  {/* Main Title */}
                  <span className="font-serif font-bold text-xl tracking-tight leading-none">ANTHEM</span>
                  
                  {/* Subtitle */}
                  <span className="font-sans text-[8px] font-bold uppercase tracking-[0.25em] opacity-80 leading-none">Music Academy</span>
                </a>
            </div>

            {/* RIGHT: Menu Trigger */}
            <div className="flex items-center ml-auto md:ml-0 gap-4">
                <span className={`hidden md:block text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isOpen ? 'text-[#F5F3F0]' : 'text-[#153F3F]'}`}>
                    {isOpen ? 'Close' : 'Menu'}
                </span>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#F5F3F0]/20 text-[#F5F3F0]' : 'bg-transparent text-[#153F3F] hover:bg-[#153F3F]/5'}`}
                    aria-label="Toggle Menu"
                >
                    <div className="flex flex-col gap-1.5 items-end w-6 justify-center">
                        <span className={`block h-[2px] bg-current transition-all duration-500 ease-in-out ${isOpen ? 'w-6 rotate-45 translate-y-[3.5px]' : 'w-6'}`} />
                        <span className={`block h-[2px] bg-current transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-4'}`} />
                        <span className={`block h-[2px] bg-current transition-all duration-500 ease-in-out ${isOpen ? 'w-6 -rotate-45 -translate-y-[3.5px]' : 'w-6'}`} />
                    </div>
                </button>
            </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div className={`
          fixed inset-0 z-40 bg-[#153F3F] transition-all duration-700 cubic-bezier(0.76, 0, 0.24, 1)
          ${isOpen ? 'clip-path-circle-open pointer-events-auto' : 'clip-path-circle-closed pointer-events-none delay-200'}
      `}>
         
         <div className="h-full w-full flex flex-col justify-center items-center relative text-[#F5F3F0]">
            
            {/* Decorative Background Text */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.03]">
                <span className="font-serif text-[40vw] leading-none">A</span>
            </div>

            <nav className="flex flex-col items-center space-y-6 md:space-y-8 relative z-10">
                {['Home', 'Why Us', 'Programs', 'About', 'Contact'].map((item, idx) => (
                    <a 
                       key={item}
                       href={`#${item.toLowerCase().replace(' ', '-')}`}
                       onClick={() => setIsOpen(false)}
                       className={`font-serif text-5xl md:text-7xl lg:text-8xl hover:italic hover:text-[#a8d5d5] transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                       style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                        {item}
                    </a>
                ))}
            </nav>

            <div className={`absolute bottom-12 md:bottom-20 flex flex-col items-center gap-4 transition-all duration-700 delay-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-xs uppercase tracking-[0.3em] opacity-50">Emeryville, CA</p>
                <div className="flex gap-8 text-sm">
                    <a href="#" className="hover:underline">Instagram</a>
                    <a href="#" className="hover:underline">Email</a>
                </div>
            </div>

         </div>
      </div>
      
      <style>{`
        .clip-path-circle-closed {
            clip-path: circle(0% at 100% 0%);
        }
        .clip-path-circle-open {
            clip-path: circle(150% at 100% 0%);
        }
      `}</style>
    </>
  );
};

export default Navigation;