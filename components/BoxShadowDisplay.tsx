import { hexToRgb } from '@/utils/utils';
import React from 'react';

interface BoxShadowDisplayProps {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
  opacity: number;
  inner?: boolean;
}

export default function BoxShadowDisplay({
  x,
  y,
  blur,
  spread,
  color,
  opacity,
  inner,
}: BoxShadowDisplayProps): JSX.Element {
  console.log(inner);

  return (
    <div
      className="w-60 h-60 bg-white border border-slate-400 rounded-2xl"
      style={{
        boxShadow: `${
          inner ? 'inset ' : ''
        }${x}px ${y}px ${blur}px ${spread}px rgba(${hexToRgb(color)}, ${
          opacity / 100 || 1
        })`,
      }}
    ></div>
  );
}
