"use client";
import React from "react";

export default function ProgressBar() {
  const percent = 63;
  const leftStyle = { left: `${percent}%` };

  return (
    <div className="w-full py-8">
      <div className="relative ">
        <div className="relative">
          <div className="h-[5px] w-full rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-[#6abd8a]"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={leftStyle}
          >
            <div className="absolute bottom-4 -translate-x-1/2">
              <div className="relative">
                <div className="flex items-center justify-center rounded-full border border-gray-200 bg-white px-2 py-2 text-sm font-semibold text-black shadow-md">
                  You
                </div>
                <div className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-gray-200 bg-white"></div>
              </div>
            </div>
            <div className="absolute top-4 -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-gray-600">
              {percent}%
            </div>
          </div>
        </div>
      </div>
      <div className="sr-only" role="status" aria-live="polite">
        Progress: {percent} percent
      </div>
    </div>
  );
}