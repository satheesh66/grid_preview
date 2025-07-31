
import { getCssVar } from '../utils/styleUtils';
import { getWidgetGridStyles } from '../utils/gridUtils';

const Widget = ({ widget, gridLayoutConfigKey, colStartKey, rowStartKey, colSpanKey, rowSpanKey }) => {
  const gridLayoutConfig = widget[gridLayoutConfigKey];

  // Defensive check: if gridLayoutConfig is missing, render an error or fallback
  if (!gridLayoutConfig) {
    console.error(`Widget missing grid layout configuration for key: ${gridLayoutConfigKey}`, widget);
    return (
      <div className="widget" style={{ backgroundColor: '#ffe0e0', color: '#cc0000', padding: '10px', border: '1px solid #cc0000' }}>
        <h3>Error: Missing Grid Config</h3>
        <p>Check console for details.</p>
      </div>
    );
  }

  const gridStyles = getWidgetGridStyles(gridLayoutConfig, colStartKey, rowStartKey, colSpanKey, rowSpanKey);
  const inlineStyles = {
    backgroundColor: getCssVar(widget.WidgetStyles.backgroundColor),
    color: getCssVar(widget.WidgetStyles.color),
    borderRadius: widget.WidgetStyles.borderRadius,
    padding: widget.WidgetStyles.padding,
    border: widget.WidgetStyles.border,
  };

  const colStart = gridLayoutConfig[colStartKey];
  const rowStart = gridLayoutConfig[rowStartKey];
  const colSpan = gridLayoutConfig[colSpanKey];
  const rowSpan = gridLayoutConfig[rowSpanKey];

  return (
    <div className="widget" style={{ ...gridStyles, ...inlineStyles }}>
      <h3>{widget.ReferenceFromWidgetList.WidgetName}</h3>
      <p>{widget.ReferenceFromWidgetList.Appearance}</p>
      <div className="grid-debug-info">
        <span>Col: {colStart} / {colSpan}</span>
        <span>Row: {rowStart} / {rowSpan}</span>
      </div>
    </div>
  );
};

export default Widget;
