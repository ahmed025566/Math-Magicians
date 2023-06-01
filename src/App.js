import { Suspense } from 'react';
import './App.css';
import Calculator from './components/calculator.jsx';
import Fetch from 'components/API.js';

function App() {
  return (
    <div className="App">
    <Calculator />
    <Fetch />    
    </div>
  );
}
export default App;