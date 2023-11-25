export function hexToRgb(hexString: string): string {
  const hex = String(hexString).replace(/[^0-9a-f]/gi, '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}