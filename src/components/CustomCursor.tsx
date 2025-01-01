"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add new dot to trail
      setTrail(prevTrail => [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...prevTrail.slice(0, 5), // Keep only last 5 dots
      ]);
    };

    const updateCursorActivity = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsActive(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateCursorActivity);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateCursorActivity);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window)) {
    return null;
  }

  return (
    <>
      <div
        className={`custom-cursor ${isActive ? 'active' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {/* Trail dots */}
      {trail.map((dot, index) => (
        <div
          key={dot.id}
          className="trail-dot"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            opacity: 1 - (index * 0.2), // Fade out older dots
            transform: `scale(${1 - (index * 0.15)})`, // Make older dots smaller
          }}
        />
      ))}
    </>
  );
} 