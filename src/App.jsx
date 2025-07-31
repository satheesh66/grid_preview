
import React, { useState } from 'react';
import initialData from './data.json';
import Widget from './components/Widget';
import './App.css';

const App = () => {
  const [jsonData, setJsonData] = useState(initialData);
  const [jsonInput, setJsonInput] = useState(JSON.stringify(initialData, null, 2));
  const [error, setError] = useState(null);
  const [showJsonInput, setShowJsonInput] = useState(false); // New state for visibility

  const handleJsonChange = (event) => {
    setJsonInput(event.target.value);
  };

  const loadJson = () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      if (!parsedData.Children || !Array.isArray(parsedData.Children)) {
        throw new Error("Invalid JSON structure: 'Children' array is missing or not an array.");
      }
      setJsonData(parsedData);
      setError(null);
      setShowJsonInput(false); // Hide input after loading
    } catch (e) {
      setError("Invalid JSON: " + e.message);
      console.error("JSON parsing error:", e);
    }
  };

  const toggleJsonInput = () => {
    setShowJsonInput(!showJsonInput);
  };

  const { Children } = jsonData;

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
          <textarea
            value={jsonInput}
            onChange={handleJsonChange}
            rows="8"
            cols="80"
            placeholder="Paste your JSON here..."
          ></textarea>
          <button onClick={loadJson}>Load JSON</button>
          {error && <p className="error-message">{error}</p>}
        </div>
      )}
      
      <div className="section-divider"></div> {/* Added section divider */}

      <div className="grid-container">
        {Children.map((widget) => (
          <Widget key={widget.WidgetMetadata.FlowId} widget={widget} />
        ))}
      </div>
    </div>
  );
};

export default App;
