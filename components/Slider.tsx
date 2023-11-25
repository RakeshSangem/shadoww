import React, { ReactElement, HTMLProps, ChangeEvent } from 'react';

interface SliderProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  value?: number | string;
  label?: string;
  ariaLabel?: string;
  unit?: 'px' | '%'; // New prop for unit
  type?:
    | 'range'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | undefined;
  onChange?: (value: number | string | any) => void;
}

export default function Slider({
  value = 0,
  type = 'range',
  label,
  ariaLabel,
  onChange,
  unit = 'px',
  ...rest
}: SliderProps): ReactElement {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue =
      type === 'color' ? event.target.value : parseInt(event.target.value, 10);
    if (onChange) {
      onChange(newValue);
      console.log(newValue);
    }
  };

  if (type === 'color') {
    return (
      <>
        <label htmlFor="xInput" className="text-gray-600 font-normal">
          {label}
        </label>
        <div className="flex items-center gap-x-8">
          <input
            id="xInput"
            name="x"
            type={type}
            value={value}
            aria-label={ariaLabel}
            onChange={handleInputChange}
            className="w-full"
            {...rest}
          />
          <input
            type="text"
            name="hex"
            onChange={(e) => {
              const newValue = e.target.value;
              if (onChange) {
                onChange(newValue);
              }
            }}
            value={value}
            className="border-[1px] border-gray-200 px-4 py-1 rounded-md w-1/3 text-center"
          />
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col mb-2">
      <div className="flex justify-between mb-2">
        {label && (
          <label htmlFor="xInput" className="text-gray-600 font-normal">
            {label}
          </label>
        )}
        <div className="flex gap-x-[2px] rounded-sm">
          <span className="text-[#363636] text-base">{value}</span>
          {type === 'range' && (
            <span className="text-slate-500 font-normal">{unit}</span>
          )}
        </div>
      </div>
      <input
        id="xInput"
        name="x"
        type={type}
        value={value}
        aria-label={ariaLabel}
        onChange={handleInputChange}
        className="w-full"
        {...rest}
      />
    </div>
  );
}
