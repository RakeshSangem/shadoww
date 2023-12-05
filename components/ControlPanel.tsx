// ControlPanel.tsx
import React from 'react';
import Slider from '@/components/Slider';
import Toggle from './Toggle';

export interface ControlPanelProps {
  x: number;
  y: number;
  blur: number;
  spread: number;
  opacity: number;
  color: string;
  onXChange: (value: number) => void;
  onYChange: (value: number) => void;
  onBlurChange: (value: number) => void;
  onSpreadChange: (value: number) => void;
  onOpacityChange: (value: number) => void;
  onColorChange: (value: string) => void;
  onToggleChange?: (value: boolean) => void;
}

export default function ControlPanel({
  x,
  y,
  blur,
  spread,
  opacity,
  color,
  onXChange,
  onYChange,
  onBlurChange,
  onSpreadChange,
  onOpacityChange,
  onColorChange,
  onToggleChange,
}: ControlPanelProps): JSX.Element {
  return (
    <div className="px-1 overflow-y-scroll flex-shrink-0 ">
      <div className="flex flex-col h-full gap-4">
        <h2 className="font-medium text-xl border-b border-dashed border-gray-400 pb-1">
          Playground
        </h2>

        <Toggle onToggleChange={onToggleChange} />

        <Slider label="X offset" value={x} onChange={onXChange} />
        <Slider label="Y offset" value={y} onChange={onYChange} />
        <Slider label="Blur" value={blur} onChange={onBlurChange} />
        <Slider label="Spread" value={spread} onChange={onSpreadChange} />
        <Slider
          label="Opacity"
          value={opacity}
          min={0}
          max={100}
          unit="%"
          onChange={onOpacityChange}
        />
        <Slider
          type="color"
          label="Shadow Color"
          value={color}
          onChange={onColorChange}
        />
      </div>
    </div>
  );
}
