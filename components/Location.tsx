import React from 'react';

const Location: React.FC = () => {
  return (
    <section className="relative h-[85vh] min-h-[700px] w-full bg-[#0a1515] text-[#F5F3F0] overflow-hidden flex items-center justify-center">
      
      {/* Background Map - Stylized Dark Mode */}
      <div className="absolute inset-0 z-0">
         {/* Using a high-contrast dark map texture representation */}
         <img 
            src="https://images.unsplash.com/photo-1624969862293-b749659ccc4e?q=80&w=2070&auto=format&fit=crop" 
            alt="Stylized Dark Map of Emeryville" 
            className="w-full h-full object-cover opacity-50"
         />
         {/* Overlay Gradients for Depth */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#0a1515] via-transparent to-[#0a1515]/80"></div>
         <div className="absolute inset-0 bg-[#153F3F]/20 mix-blend-overlay"></div>
      </div>

      {/* Animated Location Pin on 'Map' (Center visual anchor) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 md:opacity-100">
          <div className="w-96 h-96 rounded-full border border-[#F5F3F0]/10 flex items-center justify-center animate-[spin_60s_linear_infinite]">
             <div className="w-64 h-64 rounded-full border border-[#F5F3F0]/20 border-dashed"></div>
          </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex justify-center items-center">
        
        {/* Floating Glassmorphism Location Card */}
        <div className="w-full max-w-2xl bg-[#0F1F1F]/90 backdrop-blur-2xl border border-[#F5F3F0]/10 p-8 md:p-14 rounded-3xl shadow-2xl reveal group transform hover:scale-[1.01] transition-all duration-500">
            
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                
                {/* Left: Content */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-6 text-[#a8d5d5]">
                        <span className="flex h-3 w-3 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a8d5d5] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#a8d5d5]"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.25em]">HQ: Emeryville</span>
                    </div>

                    <h2 className="font-serif text-5xl md:text-6xl mb-6 leading-none">
                       The Creative <br/> <span className="italic text-[#F5F3F0]/50">Center.</span>
                    </h2>
                    
                    <div className="space-y-1 mb-8">
                        <p className="font-serif text-xl md:text-2xl text-[#F5F3F0]">4000 Adeline St.</p>
                        <p className="font-sans text-sm text-[#F5F3F0]/60 uppercase tracking-widest">Emeryville, CA 94608</p>
                    </div>

                    <p className="font-sans text-[#F5F3F0]/70 text-base leading-relaxed max-w-xs mb-8">
                       Located in the historic Grill Studios building. A space designed for sound, surrounded by industrial soul.
                    </p>

                    <a href="https://maps.google.com/?q=4000+Adeline+St,+Emeryville,+CA" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 px-8 py-3 bg-[#F5F3F0] text-[#153F3F] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                        <span>Open in Maps</span>
                    </a>
                </div>

                {/* Right: Visual/Image in Card */}
                <div className="hidden md:block w-48 shrink-0">
                    <div className="aspect-[3/4] rounded-full overflow-hidden border-4 border-[#F5F3F0]/5 relative shadow-inner">
                        <img 
                           src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1000&auto=format&fit=crop" 
                           alt="Building Exterior" 
                           className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-[#153F3F]/30 mix-blend-multiply"></div>
                    </div>
                </div>

            </div>

        </div>

      </div>
    </section>
  );
};

export default Location;