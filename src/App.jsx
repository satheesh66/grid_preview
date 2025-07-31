import React from 'react';
import data from './data.json';
import './App.css';

const App = () => {
  const { Name, Description, Children } = data;

  const widgetStyles = (widget) => {
    const { colStart, rowStart, colSpan, rowSpan } = widget.GridLayoutConfig;
    const styles = {
      gridColumnStart: colStart,
      gridColumnEnd: colStart + colSpan,
      gridRowStart: rowStart,
      gridRowEnd: rowStart + rowSpan,
      backgroundColor: widget.WidgetStyles.backgroundColor.replace('Color.Primary.100', '#e0f2fe').replace('Color.White', '#ffffff'),
      color: widget.WidgetStyles.color.replace('Color.Primary.700', '#0369a1').replace('Color.Gray.900', '#111827'),
      borderRadius: widget.WidgetStyles.borderRadius,
      padding: widget.WidgetStyles.padding,
      border: widget.WidgetStyles.border,
    };
    return styles;
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>{Name}</h1>
        <p>{Description}</p>
      </header>
      <div className="grid-container">
        {Children.map((widget, index) => (
          <div key={index} className="widget" style={widgetStyles(widget)}>
            <h3>{widget.ReferenceFromWidgetList.WidgetName}</h3>
            <p>{widget.ReferenceFromWidgetList.Appearance}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;