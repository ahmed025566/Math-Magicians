import { Suspense } from 'react';
import './App.css';
import Calculator from './components/calculator.jsx';
import Quotes from 'components/Quotes.js';

function App() {
  return (
    <div className="App">
    <Calculator />
    <Quotes />    
    </div>
  );
}
export default App;