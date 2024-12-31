"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      setPosition({ x: currentX, y: currentY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x - 20}px`,
          top: `${position.y - 20}px`,
        }}
      />
    </>
  );
} 