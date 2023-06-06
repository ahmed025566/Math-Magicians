import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from 'components/Home';
import Quotes from 'components/Quotes';
import Calculator from './components/calculator';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="logo">Math Magicians</h1>
        <nav className="navMenu">
          <NavLink className="link" to="/">Home</NavLink>
          <NavLink to="/Calculator">Calculator</NavLink>
          <NavLink to="/Quotes">Quotes</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}
export default App;
