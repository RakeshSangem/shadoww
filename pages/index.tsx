import { useState } from 'react';

import { Inter } from 'next/font/google';
import Copy from '@/components/icons/Copy';
import { toast } from 'sonner';
import BoxShadowDisplay from '@/components/BoxShadowDisplay';
import ControlPanel from '@/components/ControlPanel';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [blur, setBlur] = useState<number>(0);
  const [spread, setSpread] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(100);
  const [color, setColor] = useState<string>('#000000');
  const [generatedCSS, setGeneratedCSS] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);

  function hexToRgb(hexString: string): string {
    const hex = String(hexString).replace(/[^0-9a-f]/gi, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  }

  const generateCSS = (): string => {
    const cssLines = [
      `box-shadow: ${x}px ${y}px ${blur}px ${spread}px rgba(${hexToRgb(
        color
      )}, ${opacity / 100 || 1});`,
      `-moz-box-shadow: ${x}px ${y}px ${blur}px ${spread}px rgba(${hexToRgb(
        color
      )}, ${opacity / 100 || 1});`,
      `-webkit-box-shadow: ${x}px ${y}px ${blur}px ${spread}px rgba(${hexToRgb(
        color
      )}, ${opacity / 100 || 1});`,
    ];

    const joinedCSS = cssLines.join('\n');
    setGeneratedCSS(joinedCSS);
    return joinedCSS;
  };

  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(generateCSS());
      toast.success('Copied to clipboard');
    } else {
      console.log('Clipboard API not available');
    }
  };

  return (
    <div className={`flex-1 flex min-h-full ${inter.className}`}>
      <section className="flex-1 grid place-items-center">
        <BoxShadowDisplay
          x={x}
          y={y}
          blur={blur}
          spread={spread}
          color={color}
          opacity={opacity}
        />
        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative w-3/4 bg-white shadow-md flex flex-col rounded-lg py-8 border-[1px] border-[#D8D8D8y]">
            <span className="px-4 mx-8">{`box-shadow: ${x}px ${y}px ${blur}px ${spread}px  rgba(${hexToRgb(
              color
            )}, ${opacity / 100 || 1});`}</span>
            <span className="px-4 mx-8">{`-moz-box-shadow: ${x}px ${y}px ${blur}px ${spread}px  rgba(${hexToRgb(
              color
            )}, ${opacity / 100 || 1});`}</span>
            <span className="px-4 mx-8">{`-webkit-box-shadow: ${x}px ${y}px ${blur}px ${spread}px  rgba(${hexToRgb(
              color
            )}, ${opacity / 100 || 1});`}</span>
            <button
              onClick={copyToClipboard}
              className="absolute grid place-items-center right-4 top-4 w-8 h-8 hover:bg-gray-100 rounded-md hover:scale-105 duration-300 active:scale-100"
            >
              <Copy />
            </button>
          </div>
          <p className="pt-6 text-slate-400">
            Developed by{' '}
            <a
              className="text-blue-600 font-medium pt-3"
              href="https://rakesh-portfolio.vercel.app"
            >
              Rakesh
            </a>
          </p>
        </div>
      </section>

      <aside className="w-[420px] m-4 rounded-lg bg-white overflow-y-scroll flex-shrink-0 p-8 border-l border-gray-200">
        <ControlPanel
          x={x}
          y={y}
          blur={blur}
          spread={spread}
          opacity={opacity}
          color={color}
          onXChange={setX}
          onYChange={setY}
          onBlurChange={setBlur}
          onSpreadChange={setSpread}
          onOpacityChange={setOpacity}
          onColorChange={setColor}
        />
      </aside>
    </div>
  );
}
