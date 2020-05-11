import React from 'react';
//import logo from './logo.svg';
import './style.css';
import Calculator from './components/Calculator';
//import Example from './components/Example';
import CalcState from './context/CalcState';

function App() {
  return (
<CalcState>
	<Calculator />
</CalcState>
);
}

export default App;
