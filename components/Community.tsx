import React, { useState, useRef } from 'react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Touch handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const testimonials = [
    {
      id: 1,
      quote: "Anthem didn't just teach me how to use the gear. They taught me how to listen, how to act in a session, and gave me the confidence to call myself a producer.",
      author: "Sarah Jenkins",
      role: "Class of 2023",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      quote: "The mentorship here is unmatched. Having a Grammy-winning engineer critique your mix is an experience you simply cannot get from online tutorials.",
      author: "Marcus Cole",
      role: "Class of 2022",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      quote: "A beautiful space that inspires creativity. I made lifelong friends and industry connections that jumpstarted my career immediately after graduation.",
      author: "Elena Rodriguez",
      role: "Class of 2024",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  const changeSlide = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(newIndex);
    // Allow animation to complete before accepting new clicks (optional lock)
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleNext = () => {
    changeSlide((activeIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    changeSlide((activeIndex - 1 + testimonials.length) % testimonials.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    
    // Swipe Threshold: 50px
    if (distance > 50) handleNext();
    else if (distance < -50) handlePrev();
    
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="relative py-32 overflow-hidden text-[#F5F3F0]">
        
        {/* Subtle Parallax Background */}
        <div 
            className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
            style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop")',
                backgroundPosition: 'center 20%'
            }}
        >
             {/* Dark overlay for contrast */}
             <div className="absolute inset-0 bg-[#153F3F]/90 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-16 reveal">
                 <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#F5F3F0]/60 mb-4 block">Community</span>
                 <h2 className="font-serif text-4xl md:text-6xl text-[#F5F3F0]">Voices of Anthem</h2>
            </div>

            {/* Content Area */}
            <div 
                className="max-w-6xl mx-auto"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {/* 
                   Key based re-rendering triggers the animation. 
                   We use 'animate-fade-in-up' which mimics a fresh slide entry.
                */}
                <div key={activeIndex} className="flex flex-col md:flex-row items-center gap-12 md:gap-24 animate-fade-in-up">
                    
                    {/* Image Column */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative aspect-[4/5] w-full max-w-sm group">
                            {/* Decorative offset border */}
                            <div className="absolute inset-0 border border-[#F5F3F0]/20 translate-x-4 translate-y-4 rounded-sm transition-transform duration-700 group-hover:translate-x-3 group-hover:translate-y-3"></div>
                            
                            {/* Image Container */}
                            <div className="relative h-full w-full overflow-hidden rounded-sm bg-[#153F3F] shadow-2xl">
                                 <div className="absolute inset-0 bg-[#153F3F]/20 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
                                 <img 
                                    src={testimonials[activeIndex].image} 
                                    alt={testimonials[activeIndex].author}
                                    className="w-full h-full object-cover grayscale contrast-110 transition-transform duration-1000 transform group-hover:scale-110"
                                    draggable="false"
                                 />
                            </div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        {/* Quote Icon */}
                        <svg className="w-12 h-12 text-[#F5F3F0]/30 mb-8 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M14.017 21L14.017 18C14.017 16.896 14.321 16.067 14.929 15.513C15.537 14.959 16.485 14.682 17.773 14.682V14.502C17.061 13.978 16.513 13.434 16.129 12.87C15.745 12.306 15.553 11.59 15.553 10.722C15.553 9.854 15.825 9.074 16.369 8.382C16.913 7.69 17.685 7.344 18.685 7.344C19.533 7.344 20.209 7.638 20.713 8.226C21.217 8.814 21.469 9.538 21.469 10.398C21.469 11.758 20.941 13.118 19.885 14.478C18.829 15.838 17.473 17.182 15.817 18.51L14.017 21ZM6.009 21L6.009 18C6.009 16.896 6.313 16.067 6.921 15.513C7.529 14.959 8.477 14.682 9.765 14.682V14.502C9.053 13.978 8.505 13.434 8.121 12.87C7.737 12.306 7.545 11.59 7.545 10.722C7.545 9.854 7.817 9.074 8.361 8.382C8.905 7.69 9.677 7.344 10.677 7.344C11.525 7.344 12.201 7.638 12.705 8.226C13.209 8.814 13.461 9.538 13.461 10.398C13.461 11.758 12.933 13.118 11.877 14.478C10.821 15.838 9.465 17.182 7.809 18.51L6.009 21Z" />
                        </svg>
                        
                        <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight mb-10 drop-shadow-md opacity-95">
                           &ldquo;{testimonials[activeIndex].quote}&rdquo;
                        </p>
                        
                        <div className="flex flex-col md:items-start items-center">
                            <span className="font-sans font-bold text-sm uppercase tracking-widest text-[#F5F3F0] mb-1">
                                {testimonials[activeIndex].author}
                            </span>
                            <span className="font-serif text-[#F5F3F0]/60 italic">
                                {testimonials[activeIndex].role}
                            </span>
                        </div>
                        
                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-center md:justify-start gap-4 mt-12">
                             <button 
                                onClick={handlePrev} 
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-[#F5F3F0]/20 hover:bg-[#F5F3F0] hover:text-[#153F3F] transition-all duration-300 group"
                                aria-label="Previous"
                             >
                                <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span>
                             </button>
                             
                             {/* Pagination Indicators */}
                             <div className="flex gap-2 mx-4">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => changeSlide(idx)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-[#F5F3F0]' : 'w-1.5 bg-[#F5F3F0]/30 hover:bg-[#F5F3F0]/50'}`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                             </div>

                             <button 
                                onClick={handleNext} 
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-[#F5F3F0]/20 hover:bg-[#F5F3F0] hover:text-[#153F3F] transition-all duration-300 group"
                                aria-label="Next"
                             >
                                <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>{`
            @keyframes fadeInUpSoft {
                0% { opacity: 0; transform: translateY(30px) scale(0.98); }
                100% { opacity: 1; transform: translateY(0) scale(1); }
            }
            .animate-fade-in-up {
                animation: fadeInUpSoft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
        `}</style>
    </section>
  );
};

export default Testimonials;