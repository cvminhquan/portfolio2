export type ClassValue = string | number | null | false | undefined;

export const cn = (...classes: ClassValue[]): string => {
  return classes
    .flatMap((cls) => (typeof cls === 'string' || typeof cls === 'number' ? String(cls) : cls ? String(cls) : ''))
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ') // collapse extra spaces
    .trim();
};
