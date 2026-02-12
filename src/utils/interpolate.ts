/**
 * Interpolates variables in translation strings
 * Example: interpolate("Hello {name}", { name: "Miguel" }) => "Hello Miguel"
 */
export const interpolate = (text: string, values: Record<string, string | number>): string => {
  return text.replace(/\{(\w+)\}/g, (match, key) => {
    return values[key] !== undefined ? String(values[key]) : match;
  });
};
