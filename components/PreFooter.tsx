import React, { useState } from 'react';
import Spinner from './Spinner';

const PreFooter: React.FC = () => {
  const [isBooking, setIsBooking] = useState(false);

  const handleBooking = () => {
    setIsBooking(true);
    // Simulate network request/availability check
    setTimeout(() => {
      setIsBooking(false);
      window.location.href = "mailto:enroll@anthemmusicacademy.com?subject=Book a Tour";
    }, 2000);
  };

  return (
    <section className="py-32 bg-[#153F3F] text-[#F5F3F0] text-center relative overflow-hidden">
      
      {/* Decorative Wavy Divider (Inverted) */}
      <div className="absolute top-0 left-0 w-full leading-none z-20 text-[#F5F3F0] rotate-180 overflow-hidden">
        <svg className="relative block w-[120%] -ml-[10%] h-[60px] animate-wave" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F5F3F0" transform="scale(1, -1) translate(0, -120)"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-12">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#F5F3F0]/60 mb-6 block reveal">Emeryville, CA</span>
        
        <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-[1.1] reveal delay-100">
          Ready to <span className="italic">find</span> your <br/> sound?
        </h2>
        
        <div className="bg-white/10 backdrop-blur-md inline-block px-8 py-4 rounded-xl mb-12 border border-white/10 reveal delay-200">
           <span className="block text-xs uppercase tracking-widest opacity-70 mb-1">Exclusive Offer</span>
           <p className="font-serif text-xl">
             Use code <span className="font-bold text-[#F5F3F0] tracking-wider">TAKE150</span> for $150 off tuition
           </p>
        </div>

        <p className="font-sans text-[#F5F3F0]/80 text-lg mb-12 max-w-xl mx-auto leading-relaxed reveal delay-300">
          Limited spots available for the upcoming semester. Book your tour or contact us directly.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 items-center reveal delay-500">
            <button 
              onClick={handleBooking}
              disabled={isBooking}
              className="px-12 py-5 bg-[#F5F3F0] text-[#153F3F] rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#d4c5a8] hover:text-[#153F3F] transition-all duration-300 shadow-xl min-w-[200px] flex items-center justify-center gap-3 disabled:opacity-90 disabled:cursor-not-allowed"
            >
              {isBooking ? (
                <>
                  <Spinner className="w-4 h-4" />
                  <span>Checking Availability</span>
                </>
              ) : (
                "Book a Tour"
              )}
            </button>
            <a href="mailto:enroll@anthemmusicacademy.com" className="px-12 py-5 border border-[#F5F3F0]/30 text-[#F5F3F0] rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#F5F3F0]/10 transition-all duration-300 min-w-[200px]">
              Contact Us
            </a>
        </div>

        <div className="mt-16 text-[#F5F3F0]/40 text-sm font-sans tracking-wider reveal delay-700">
           <p>enroll@anthemmusicacademy.com</p>
           <p className="mt-2">(510) 588-5312</p>
        </div>

      </div>
    </section>
  );
};

export default PreFooter;