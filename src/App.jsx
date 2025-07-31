
import data from './data.json';
import Widget from './components/Widget';
import './App.css';

const App = () => {
  const { Children } = data;

  return (
    <div className="dashboard">
      <div className="grid-container">
        {Children.map((widget) => (
          <Widget key={widget.WidgetMetadata.FlowId} widget={widget} />
        ))}
      </div>
    </div>
  );
};

export default App;
