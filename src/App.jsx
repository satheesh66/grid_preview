import React, { useState } from 'react';
import initialData from './data.json';
import Widget from './components/Widget';
import './App.css';

const App = () => {
  const [jsonData, setJsonData] = useState(initialData);
  const [jsonInput, setJsonInput] = useState(JSON.stringify(initialData, null, 2));
  const [error, setError] = useState(null);
  const [showJsonInput, setShowJsonInput] = useState(false);

  // New state variables for configurable keys
  const [widgetListKey, setWidgetListKey] = useState("Children");
  const [colStartKey, setColStartKey] = useState("colStart");
  const [rowStartKey, setRowStartKey] = useState("rowStart");
  const [colSpanKey, setColSpanKey] = useState("colSpan");
  const [rowSpanKey, setRowSpanKey] = useState("rowSpan");

  const handleJsonChange = (event) => {
    setJsonInput(event.target.value);
  };

  const loadJson = () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      // Use the dynamic widgetListKey
      if (!parsedData[widgetListKey] || !Array.isArray(parsedData[widgetListKey])) {
        throw new Error(`Invalid JSON structure: '${widgetListKey}' array is missing or not an array.`);
      }
      setJsonData(parsedData);
      setError(null);
      setShowJsonInput(false);
    } catch (e) {
      setError("Invalid JSON: " + e.message);
      console.error("JSON parsing error:", e);
    }
  };

  const toggleJsonInput = () => {
    setShowJsonInput(!showJsonInput);
  };

  // Use the dynamic widgetListKey to get the children array
  const children = jsonData[widgetListKey] || [];

  return (
    <div className="dashboard">
      <div className="json-toggle-section">
        <button onClick={toggleJsonInput}>
          {showJsonInput ? 'Hide JSON Input' : 'Show JSON Input'}
        </button>
      </div>

      {showJsonInput && (
        <div className="json-input-section">
          <h2>Load Custom JSON</h2>
          <div className="key-config-section">
            <label>Widget List Key:
              <input type="text" value={widgetListKey} onChange={(e) => setWidgetListKey(e.target.value)} />
            </label>
            <label>Col Start Key:
              <input type="text" value={colStartKey} onChange={(e) => setColStartKey(e.target.value)} />
            </label>
            <label>Row Start Key:
              <input type="text" value={rowStartKey} onChange={(e) => setRowStartKey(e.target.value)} />
            </label>
            <label>Col Span Key:
              <input type="text" value={colSpanKey} onChange={(e) => setColSpanKey(e.target.value)} />
            </label>
            <label>Row Span Key:
              <input type="text" value={rowSpanKey} onChange={(e) => setRowSpanKey(e.target.value)} />
            </label>
          </div>
          <textarea
            value={jsonInput}
            onChange={handleJsonChange}
            rows="20"
            cols="80"
            placeholder="Paste your JSON here..."
          ></textarea>
          <button onClick={loadJson}>Load JSON</button>
          {error && <p className="error-message">{error}</p>}
        </div>
      )}
      
      <div className="grid-container">
        {children.map((widget, index) => (
          <Widget 
            key={widget.WidgetMetadata ? widget.WidgetMetadata.FlowId : index} 
            widget={widget} 
            colStartKey={colStartKey}
            rowStartKey={rowStartKey}
            colSpanKey={colSpanKey}
            rowSpanKey={rowSpanKey}
          />
        ))}
      </div>
    </div>
  );
};

export default App;