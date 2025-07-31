export const getWidgetGridStyles = (gridLayoutConfig) => {
  const { colStart, rowStart, colSpan, rowSpan } = gridLayoutConfig;
  return {
    gridColumnStart: colStart,
    gridColumnEnd: `span ${colSpan}`,
    gridRowStart: rowStart,
    gridRowEnd: `span ${rowSpan}`,
  };
};