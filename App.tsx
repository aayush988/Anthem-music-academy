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

// Main App Component
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  // Scroll Reveal Observer
  useEffect(() => {
    // We only attach the observer once the loader is finished (or immediately if you prefer)
    // to ensure animations don't play behind the loader screen.
    if (isLoading) return;

    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px 0px -10% 0px', // Trigger when the top of the element is 10% from the bottom of the viewport
      threshold: 0.1, // Trigger when at least 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Ensure animation only plays once
        }
      });
    }, observerOptions);

    // Select all elements with the 'reveal' class
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, [isLoading]);

  // Custom Cursor Logic
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
      {/* Custom Cursor Elements */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-[#153F3F] rounded-full pointer-events-none z-[9999] hidden md:block -ml-1 -mt-1" 
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-[#153F3F] rounded-full pointer-events-none z-[9998] transition-transform duration-100 ease-out hidden md:block -ml-4 -mt-4" 
      />

      {/* 
         Loader controls the initial "isLoading" state. 
         When it finishes (onLoadingComplete), we set isLoading to false.
      */}
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      
      <div className="w-full relative min-h-screen">
        <Navigation />
        
        {/* 
           The Main Content has a high Z-Index and a margin-bottom.
           This allows the footer (fixed behind it) to be revealed.
        */}
        <main className="relative z-10 bg-[#F5F3F0] mb-[80vh] md:mb-[70vh] shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
          {/* 
             Pass !isLoading as startAnimation. 
             This ensures Hero animations wait until the Loader is gone.
          */}
          <Hero startAnimation={!isLoading} />
          
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