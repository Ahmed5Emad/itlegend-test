"use client";

export default function Player({ src, poster }: { src: string; poster?: string }) {
  return (
    // On small and medium screens (lg and below), the player will be sticky.
    // On large screens (lg and up), it will be static.
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