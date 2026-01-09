import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // 1. Allow time for entrance animations (2.2s)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2200);

    // 2. Wait for exit transition to complete (1.5s)
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
      onLoadingComplete();
    }, 3700); // 2200ms + 1500ms duration

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [onLoadingComplete]);

  if (!shouldRender) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-500 ${isExiting ? 'pointer-events-none' : ''}`}>
        
        {/* 
            Background Curtain 
            - Uses clip-path to wipe from Bottom to Top (inset bottom 100%)
            - This reveals the website underneath vertically
        */}
        <div 
            className="absolute inset-0 bg-[#153F3F] transition-all duration-[1500ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{ 
                clipPath: isExiting ? 'inset(0 0 100% 0)' : 'inset(0 0 0% 0)' 
            }}
        />

        {/* 
            Content Container 
            - Moves UP to match the header position
            - Scales DOWN to match header logo size
            - Changes COLOR from White to Green (to contrast with the revealed cream website)
        */}
        <div 
            className={`relative z-10 flex flex-col items-center transition-all duration-[1500ms] ease-[cubic-bezier(0.76,0,0.24,1)]
                ${isExiting ? 'text-[#153F3F]' : 'text-[#F5F3F0]'}
            `}
            style={{
                // Calculate move: Center (50vh) to approx header height (~20-30px from top)
                transform: isExiting ? 'translateY(calc(-50vh + 32px)) scale(0.25)' : 'translateY(0) scale(1)',
            }}
        >
             {/* Icon */}
            <div className="mb-6 flex justify-center">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18V5L21 3V16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" 
                          className="animate-draw"
                    />
                    <circle cx="6" cy="18" r="3" fill="currentColor" className="animate-pop delay-300"/>
                    <circle cx="18" cy="16" r="3" fill="currentColor" className="animate-pop delay-500"/>
                </svg>
            </div>

            {/* Typography */}
            <div className="overflow-hidden mb-2 text-center">
                 <h1 className="font-serif text-6xl md:text-9xl tracking-tighter leading-none animate-reveal-text">
                    ANTHEM
                 </h1>
            </div>
            
            <div className="overflow-hidden">
                <p className="font-sans text-xs md:text-base tracking-[0.5em] uppercase opacity-80 animate-reveal-text delay-200 font-medium">
                    Music Academy
                </p>
            </div>
        </div>

        <style>{`
            @keyframes revealText {
                0% { transform: translateY(100%); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
            }
            @keyframes drawPath {
                0% { stroke-dasharray: 100; stroke-dashoffset: 100; }
                100% { stroke-dasharray: 100; stroke-dashoffset: 0; }
            }
            @keyframes popIn {
                0% { transform: scale(0); opacity: 0; }
                50% { transform: scale(1.2); }
                100% { transform: scale(1); opacity: 1; }
            }
            
            .animate-reveal-text {
                animation: revealText 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            }
            .animate-draw {
                animation: drawPath 1.5s ease-out forwards;
            }
            .animate-pop {
                transform-origin: center;
                animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                opacity: 0; /* Start hidden */
            }
            .delay-200 { animation-delay: 200ms; }
            .delay-300 { animation-delay: 300ms; }
            .delay-500 { animation-delay: 500ms; }
        `}</style>
    </div>
  );
};

export default Loader;