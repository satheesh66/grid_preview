
export const getCssVar = (colorString) => {
  if (!colorString) return '';
  // Converts 'Color.Primary.100' to '--color-primary-100'
  return `var(--${colorString.replace(/\./g, '-').toLowerCase()})`;
};
