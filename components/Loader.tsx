import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [shouldAnimateOut, setShouldAnimateOut] = useState(false);
  const [displayNone, setDisplayNone] = useState(false);

  useEffect(() => {
    // Trigger Exit
    const exitTimer = setTimeout(() => {
      setShouldAnimateOut(true);
    }, 2500);

    // Remove from DOM
    const removeTimer = setTimeout(() => {
      setDisplayNone(true);
      onLoadingComplete();
    }, 4000); 

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [onLoadingComplete]);

  if (displayNone) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-transform duration-[1500ms] cubic-bezier(0.76, 0, 0.24, 1) ${shouldAnimateOut ? '-translate-y-full' : 'translate-y-0'}`}>
      
      {/* Main Background */}
      <div className="absolute inset-0 bg-[#091a1a] flex flex-col items-center justify-center z-20">
        
        {/* Typography Animation Container */}
        <div className="flex flex-col items-center justify-center z-30 px-6">
            <div className="overflow-hidden mb-4">
                 <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F5F3F0] tracking-tight leading-none animate-reveal-title">
                    ANTHEM
                 </h1>
            </div>
            
            <div className="flex gap-3 md:gap-5 overflow-hidden">
                <span className="font-sans text-xs md:text-sm text-[#F5F3F0]/60 tracking-[0.3em] uppercase animate-reveal-subtitle" style={{ animationDelay: '0.3s' }}>
                    Music
                </span>
                <span className="font-sans text-xs md:text-sm text-[#F5F3F0]/60 tracking-[0.3em] uppercase animate-reveal-subtitle" style={{ animationDelay: '0.5s' }}>
                    Academy
                </span>
            </div>
        </div>

      </div>

      {/* The Wave Shape Reveal - Multi-layered for liquid effect */}
      <div className="absolute -bottom-1 left-0 w-full h-[50vh] z-10 pointer-events-none translate-y-[99%]">
         <svg 
           viewBox="0 0 1440 320" 
           className="w-full h-full"
           preserveAspectRatio="none"
         >
            {/* Trailing Wave (Semi-transparent) */}
            <path 
              fill="#091a1a" 
              fillOpacity="0.5"
              d="M0,0L0,200L60,210C120,220,240,240,360,230C480,220,600,180,720,170C840,160,960,180,1080,200C1200,220,1320,240,1380,250L1440,260L1440,0L0,0Z"
            />
            {/* Main Solid Wave */}
            <path 
              fill="#091a1a" 
              fillOpacity="1"
              d="M0,0L0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,138.7C840,117,960,107,1080,117.3C1200,128,1320,160,1380,176L1440,192L1440,0L0,0Z"
            />
         </svg>
      </div>

      <style>{`
        @keyframes revealTitle {
            0% { transform: translateY(110%); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes revealSubtitle {
            0% { transform: translateY(150%); opacity: 0; }
            100% { transform: translateY(0); opacity: 0.7; }
        }
        .animate-reveal-title {
            animation: revealTitle 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-reveal-subtitle {
            opacity: 0;
            animation: revealSubtitle 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

    </div>
  );
};

export default Loader;