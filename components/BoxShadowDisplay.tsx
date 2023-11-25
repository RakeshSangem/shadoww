// BoxShadowDisplay.tsx
import { hexToRgb } from '@/utils/utils';
import React from 'react';

interface BoxShadowDisplayProps {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
  opacity: number;
}

export default function BoxShadowDisplay({
  x,
  y,
  blur,
  spread,
  color,
  opacity,
}: BoxShadowDisplayProps): JSX.Element {
  return (
    <div
      className="w-60 h-60 bg-white border border-slate-400 rounded-2xl"
      style={{
        boxShadow: `${x}px ${y}px ${blur}px ${spread}px rgba(${hexToRgb(
          color
        )}, ${opacity / 100 || 1})`,
      }}
    ></div>
  );
}
