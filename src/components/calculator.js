import './calculator.css';

const Input = () => <div className='input-wrapper'>0</div>;

const Button = ({ symbol, color, double }) => (
      <div
         className="button-wrapper"
        style={{ backgroundColor: color, width: double }}
        >
        {symbol}
      </div>
);

const Calculator = () => (
    <div className='calc-wrapper'>
        <Input></Input>
        <div className='raw'>
        <Button symbol="A/c"/>
        <Button symbol="+/-"/>
        <Button symbol="%"/>
        <Button symbol="/" color="#f2a33c"/>
        </div>
        <div className='raw'>
        <Button symbol="7"/>
        <Button symbol="8"/>
        <Button symbol="9"/>
        <Button symbol="x" color="#f2a33c"/>
        </div>
        <div className='raw'>
        <Button symbol="4"/>
        <Button symbol="5"/>
        <Button symbol="6"/>
        <Button symbol="-" color="#f2a33c"/>
        </div>
        <div className='raw'>
        <Button symbol="1"/>
        <Button symbol="2"/>
        <Button symbol="3"/>
        <Button symbol="+" color="#f2a33c"/>
        </div>
        <div className='raw'>
        <Button symbol="0" double="260px"/>
        <Button symbol="."/>
        <Button symbol="=" color="#f2a33c"/>
        </div>
        </div>
);
export default Calculator;