import React, { useState } from 'react';

export default function Toggle({ onToggleChange }: any): JSX.Element {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggle = () => {
    setIsChecked(!isChecked);
    onToggleChange(!isChecked);
  };

  return (
    <div className="flex justify-between items-center py-3">
      <span className="text-gray-600 font-normal">Inner shadow</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isChecked}
          onChange={toggle}
        />
        <div
          className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-800`}
        ></div>
      </label>
    </div>
  );
}
