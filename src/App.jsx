import React, { useState } from 'react';
import initialData from './data.json';
import Widget from './components/Widget';
import './App.css';

const App = () => {
  const [jsonData, setJsonData] = useState(initialData);
  const [jsonInput, setJsonInput] = useState(JSON.stringify(initialData, null, 2));
  const [error, setError] = useState(null);

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
    } catch (e) {
      setError("Invalid JSON: " + e.message);
      console.error("JSON parsing error:", e);
    }
  };

  const { Children } = jsonData;

  return (
    <div className="dashboard">
      <div className="json-input-section">
        <h2>Load Custom JSON</h2>
        <textarea
          value={jsonInput}
          onChange={handleJsonChange}
          rows="15"
          cols="80"
          placeholder="Paste your JSON here..."
        ></textarea>
        <button onClick={loadJson}>Load JSON</button>
        {error && <p className="error-message">{error}</p>}
      </div>
      
      <div className="grid-container">
        {Children.map((widget) => (
          <Widget key={widget.WidgetMetadata.FlowId} widget={widget} />
        ))}
      </div>
    </div>
  );
};

export default App;