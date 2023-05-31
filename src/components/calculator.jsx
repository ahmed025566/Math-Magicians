import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate.js';

function Input({ text = '0' }) {
  return (
<div className='input-wrapper'>{text}</div>
  );
}
function Button({
  text, color, double, onClick,
}) {
  return (
      <button
         type="button"
         className="button-wrapper"
         onClick={() => onClick(text)}
        style={{ backgroundColor: color, width: double }}
        >
        {text}
      </button>
  );
}

function Calculator() {
  const [result, setResult] = React.useState({
    total: 0,
    next: null,
    operation: null,
  });
  const { next, total, operation } = result;
  return (
    <div className='calc-wrapper'>
        <Input text={`${total || ''} ${operation || ''} ${next || ''}`}/>
        <div className='raw'>
        <Button text="A/c" onClick={() => setResult(calculate(result, 'AC'))}/>
        <Button text="+/-" onClick={() => setResult(calculate(result, '+/-'))}/>
        <Button text="%" onClick={() => setResult(calculate(result, '%'))}/>
        <Button text="÷" color="#f2a33c" onClick={() => setResult(calculate(result, '÷'))}/>
        </div>
        <div className='raw'>
        <Button text="7" onClick={() => setResult(calculate(result, '7'))}/>
        <Button text="8" onClick={() => setResult(calculate(result, '8'))}/>
        <Button text="9" onClick={() => setResult(calculate(result, '9'))}/>
        <Button text="x" color="#f2a33c" onClick={() => setResult(calculate(result, 'x'))}/>
        </div>
        <div className='raw'>
        <Button text={'4'} onClick={() => setResult(calculate(result, '4'))}/>
        <Button text="5" onClick={() => setResult(calculate(result, '5'))}/>
        <Button text="6" onClick={() => setResult(calculate(result, '6'))}/>
        <Button text="-" color="#f2a33c" onClick={() => setResult(calculate(result, '-'))}/>
        </div>
        <div className='raw'>
        <Button text="1" onClick={() => setResult(calculate(result, '1'))}/>
        <Button text="2" onClick={() => setResult(calculate(result, '2'))}/>
        <Button text="3" onClick={() => setResult(calculate(result, '3'))}/>
        <Button text="+" color="#f2a33c" onClick={() => setResult(calculate(result, '+'))}/>
        </div>
        <div className='raw'>
        <Button text="0" double="260px" onClick={() => setResult(calculate(result, '+'))}/>
        <Button text="." onClick={() => setResult(calculate(result, '.'))}/>
        <Button text="=" color="#f2a33c" onClick={() => setResult(calculate(result, '='))}/>
        </div>
        </div>
  );
}
export default Calculator;