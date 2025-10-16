"use client";
import React, { useState, useEffect, useRef, JSX } from "react";

// This component doesn't take any props, so we can define its return type as JSX.Element.
export default function ProgressBar(): JSX.Element {
  const targetPercent = 85;

  // Explicitly type the state. 'currentPercent' will always be a number.
  const [currentPercent, setCurrentPercent] = useState<number>(0);

  // Type the ref. It will point to an HTMLDivElement, or be null before it's attached.
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // A guard clause is good practice in TypeScript to ensure the ref is attached.
    const currentRef = progressBarRef.current;
    if (!currentRef) {
      return;
    }

    const observer = new IntersectionObserver(
      // Type the 'entries' array for the observer callback.
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const duration = 2000; // Animation duration in milliseconds
          const startTime = performance.now();

          // Type the 'currentTime' parameter for the animation frame callback.
          // DOMHighResTimeStamp is essentially a number.
          const animate = (currentTime: DOMHighResTimeStamp) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const animatedValue = Math.floor(progress * targetPercent);

            setCurrentPercent(animatedValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              // Ensure it ends exactly on the target value
              setCurrentPercent(targetPercent);
            }
          };

          requestAnimationFrame(animate);
          // Disconnect the observer once the animation has been triggered.
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    // Start observing the element.
    observer.observe(currentRef);

    // Cleanup function to unobserve when the component unmounts.
    return () => {
      observer.unobserve(currentRef);
    };
  }, [targetPercent]); // Dependency array ensures this runs only once on mount.

  // The types for style objects are inferred automatically by TypeScript.
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