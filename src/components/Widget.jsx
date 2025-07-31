import { getCssVar } from '../utils/styleUtils';
import { getWidgetGridStyles } from '../utils/gridUtils';

const Widget = ({ widget }) => {
  const gridStyles = getWidgetGridStyles(widget.GridLayoutConfig);
  const inlineStyles = {
    backgroundColor: getCssVar(widget.WidgetStyles.backgroundColor),
    color: getCssVar(widget.WidgetStyles.color),
    borderRadius: widget.WidgetStyles.borderRadius,
    padding: widget.WidgetStyles.padding,
    border: widget.WidgetStyles.border,
  };

  const { colStart, rowStart, colSpan, rowSpan } = widget.GridLayoutConfig;

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