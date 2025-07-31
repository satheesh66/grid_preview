
export const getWidgetGridStyles = (gridLayoutConfig, colStartKey, rowStartKey, colSpanKey, rowSpanKey) => {
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
