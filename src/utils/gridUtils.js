export const getWidgetGridStyles = (gridLayoutConfig, colStartKey, rowStartKey, colSpanKey, rowSpanKey) => {
  if (!gridLayoutConfig) {
    console.error("gridLayoutConfig is undefined or null.", gridLayoutConfig);
    return {}; // Return empty object to prevent further errors
  }

  const colStart = gridLayoutConfig[colStartKey];
  const rowStart = gridLayoutConfig[rowStartKey];
  const colSpan = gridLayoutConfig[colSpanKey];
  const rowSpan = gridLayoutConfig[rowSpanKey];

  return {
    gridColumnStart: colStart,
    gridColumnEnd: `span ${colSpan}`,
    gridRowStart: rowStart,
    gridRowEnd: `span ${rowSpan}`,
  };
};