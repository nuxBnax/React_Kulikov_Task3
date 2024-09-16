import './App.css';
import './components/styles/style.scss';
import TemperatureConverter from './components/TemperatureConverter/TemperatureConverter';
import TodoList from './components/TodoList/TodoList.js';

function App() {
  return (
    <div className="app">
     <TemperatureConverter/>
     <TodoList/>
    </div>
  );
}

export default App;
