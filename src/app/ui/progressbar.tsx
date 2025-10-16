"use client";
import React, { useState, useEffect, useRef, JSX } from "react";


export default function ProgressBar(): JSX.Element {
  const targetPercent = 85;

  
  const [currentPercent, setCurrentPercent] = useState<number>(0);

  
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    
    const currentRef = progressBarRef.current;
    if (!currentRef) {
      return;
    }

    const observer = new IntersectionObserver(
      
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const duration = 2000; 
          const startTime = performance.now();

          
          
          const animate = (currentTime: DOMHighResTimeStamp) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const animatedValue = Math.floor(progress * targetPercent);

            setCurrentPercent(animatedValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              
              setCurrentPercent(targetPercent);
            }
          };

          requestAnimationFrame(animate);
          
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, 
      }
    );

    
    observer.observe(currentRef);

    
    return () => {
      observer.unobserve(currentRef);
    };
  }, [targetPercent]); 

  
  const leftStyle = { left: `${currentPercent}%`, transition: 'left 1s ease-out' };

  return (
    <div className="w-full py-8 relative" ref={progressBarRef}>
      <div className="relative">
        <div className="relative">
          <div className="h-[5px] w-full rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-[#6abd8a]"
              style={{ width: `${currentPercent}%`, transition: 'width 1s ease-out' }}
            />
          </div>

          <div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={leftStyle}
          >
            <div className="absolute bottom-4 -translate-x-1/2">
              <div className="relative">
                <div className="flex items-center justify-center rounded-full ring-4 ring-gray-300 bg-white px-2 py-2 text-sm font-semibold text-black ">
                  You
                </div>
                <div className="absolute -bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b-4 border-r-4 border-gray-300 bg-white"></div>
              </div>
            </div>
            <div className="absolute top-4 -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-gray-600">
              {currentPercent}%
            </div>
          </div>
        </div>
      </div>
      <div className="sr-only" role="status" aria-live="polite">
        Progress: {currentPercent} percent
      </div>
    </div>
  );
}