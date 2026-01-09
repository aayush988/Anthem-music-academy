import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050c0c] text-[#F5F3F0] h-full flex flex-col justify-between">
      
      {/* Top Content */}
      <div className="container mx-auto px-6 md:px-12 pt-32 relative z-10 flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-0">
            
            {/* Brand Statement */}
            <div className="max-w-md">
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#2B6F6F] mb-6 block">Est. 2018</span>
                <p className="font-serif text-3xl md:text-4xl leading-tight">
                    Shaping the next generation of sound in the heart of California.
                </p>
            </div>

            {/* Links Grid */}
            <div className="flex gap-16 md:gap-32">
                <div>
                    <h4 className="font-sans font-bold uppercase tracking-widest text-[10px] text-[#F5F3F0]/40 mb-6">Socials</h4>
                    <ul className="space-y-3 font-sans text-sm tracking-wide">
                        <li><a href="#" className="hover:text-[#2B6F6F] transition-colors block hover:translate-x-2 duration-300">Instagram</a></li>
                        <li><a href="#" className="hover:text-[#2B6F6F] transition-colors block hover:translate-x-2 duration-300">TikTok</a></li>
                        <li><a href="#" className="hover:text-[#2B6F6F] transition-colors block hover:translate-x-2 duration-300">YouTube</a></li>
                        <li><a href="#" className="hover:text-[#2B6F6F] transition-colors block hover:translate-x-2 duration-300">SoundCloud</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-sans font-bold uppercase tracking-widest text-[10px] text-[#F5F3F0]/40 mb-6">Sitemap</h4>
                    <ul className="space-y-3 font-sans text-sm tracking-wide">
                        <li><a href="#programs" className="hover:text-[#2B6F6F] transition-colors block hover:translate-x-2 duration-300">Programs</a></li>
                        <li><a href="#about" className="hover:text-[#2B6F6F] transition-colors block hover:translate-x-2 duration-300">About</a></li>
                        <li><a href="#contact" className="hover:text-[#2B6F6F] transition-colors block hover:translate-x-2 duration-300">Contact</a></li>
                        <li><a href="#faq" className="hover:text-[#2B6F6F] transition-colors block hover:translate-x-2 duration-300">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>

      {/* Monumental Typography */}
      <div className="relative border-t border-[#F5F3F0]/10 w-full">
          <div className="w-full overflow-hidden">
             {/* Massive text that might get cut off - Editorial style */}
             <h1 className="font-serif text-[18vw] leading-[0.8] text-center text-[#F5F3F0] opacity-10 select-none pointer-events-none translate-y-4">
                ANTHEM
             </h1>
          </div>
          
          {/* Bottom Bar overlaying the big text */}
          <div className="absolute bottom-8 w-full px-6 md:px-12 flex justify-between items-end text-[10px] uppercase tracking-widest text-[#F5F3F0]/40 font-sans">
             <div>&copy; 2024 Anthem Music Academy</div>
             <div className="hidden md:block">Designed in California</div>
             <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
             </div>
          </div>
      </div>

    </footer>
  );
};

export default Footer;