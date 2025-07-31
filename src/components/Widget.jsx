
import { getCssVar } from '../utils/styleUtils';
import { getWidgetGridStyles } from '../utils/gridUtils';

const Widget = ({ widget, colStartKey, rowStartKey, colSpanKey, rowSpanKey }) => {
  const gridStyles = getWidgetGridStyles(widget.GridLayoutConfig, colStartKey, rowStartKey, colSpanKey, rowSpanKey);
  const inlineStyles = {
    backgroundColor: getCssVar(widget.WidgetStyles.backgroundColor),
    color: getCssVar(widget.WidgetStyles.color),
    borderRadius: widget.WidgetStyles.borderRadius,
    padding: widget.WidgetStyles.padding,
    border: widget.WidgetStyles.border,
  };

  const colStart = widget.GridLayoutConfig[colStartKey];
  const rowStart = widget.GridLayoutConfig[rowStartKey];
  const colSpan = widget.GridLayoutConfig[colSpanKey];
  const rowSpan = widget.GridLayoutConfig[rowSpanKey];

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
