import React, { useEffect, useState, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhyUs from './components/Philosophy'; 
import Portfolio from './components/Programs';
import About from './components/People';
import Services from './components/Experience';
import Location from './components/Location';
import Testimonials from './components/Community';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';
import Loader from './components/Loader';

// Simple Custom Cursor Component
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (followerRef.current) {
        // Simple lag effect via CSS transition, updating position
        followerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseDown = () => {
        if(followerRef.current) followerRef.current.classList.add('scale-75');
    };
    const handleMouseUp = () => {
        if(followerRef.current) followerRef.current.classList.remove('scale-75');
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add hover states for interactive elements
    const handleLinkHover = () => followerRef.current?.classList.add('scale-[3]', 'opacity-30', 'bg-[#F5F3F0]', 'mix-blend-difference');
    const handleLinkLeave = () => followerRef.current?.classList.remove('scale-[3]', 'opacity-30', 'bg-[#F5F3F0]', 'mix-blend-difference');

    document.querySelectorAll('a, button, .cursor-hover').forEach(el => {
        el.addEventListener('mouseenter', handleLinkHover);
        el.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.querySelectorAll('a, button, .cursor-hover').forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main Dot */}
      <div ref={cursorRef} className="fixed top-0 left-0 w-2 h-2 bg-[#153F3F] rounded-full pointer-events-none z-[9999] -mt-1 -ml-1 mix-blend-difference hidden md:block"></div>
      {/* Lagging Follower Ring */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-[#153F3F] rounded-full pointer-events-none z-[9998] -mt-4 -ml-4 transition-transform duration-100 ease-out mix-blend-difference hidden md:block will-change-transform"
      ></div>
    </>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
       document.body.style.overflow = 'hidden';
       window.scrollTo(0, 0);
    } else {
       document.body.style.overflow = 'unset';
       
       // Initialize intersection observer after loading is done
       const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up', 'opacity-100');
            entry.target.classList.remove('opacity-0');
          }
        });
      }, { threshold: 0.1 });
  
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('opacity-0');
        observer.observe(el);
      });
  
      return () => observer.disconnect();
    }
  }, [isLoading]);

  return (
    <>
      <CustomCursor />
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      
      <div className="w-full relative min-h-screen">
        <Navigation />
        
        {/* 
           The Main Content has a high Z-Index and a margin-bottom.
           This allows the footer (fixed behind it) to be revealed.
           The margin-bottom matches the footer height approximately.
        */}
        <main className="relative z-10 bg-[#F5F3F0] mb-[80vh] md:mb-[70vh] shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
          <Hero />
          <WhyUs />
          <Portfolio />
          <About />
          <Services />
          <Location />
          <Testimonials />
          <PreFooter />
        </main>

        {/* The Footer sits fixed behind everything */}
        <div className="fixed bottom-0 left-0 w-full h-[80vh] md:h-[70vh] z-0">
           <Footer />
        </div>
      </div>
    </>
  );
};

export default App;