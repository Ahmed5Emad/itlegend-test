"use client";

export default function Player({ src, poster }: { src: string; poster?: string }) {
  return (
    
    
    <div className="w-full">
      <video
        className="rounded-sm shadow-lg"
        src={src}
        poster={poster}
        controls
        preload="metadata"
      />
    </div>
  );
}