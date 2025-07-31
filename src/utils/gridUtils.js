
export const getWidgetGridStyles = (gridLayoutConfig) => {
  const { colStart, rowStart, colSpan, rowSpan } = gridLayoutConfig;
  return {
    gridColumnStart: colStart,
    gridColumnEnd: colStart + colSpan,
    gridRowStart: rowStart,
    gridRowEnd: rowStart + rowSpan,
  };
};
