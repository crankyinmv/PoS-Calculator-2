import React,{useState} from 'react';
//import logo from './logo.svg';
import './style.css';
import Calculator from './components/Calculator';
//import Example from './components/Example';
import CalcState from './context/CalcState';

/*
<CalcState>
	<Calculator />
</CalcState>
*/
function App() {
        let [refresh, setRefresh] = useState(false);
        let sr = ()=>{setRefresh(true);};
        let usr = ()=>{setRefresh(false);};

  return (
<CalcState sr={sr} refresh={refresh} usr={usr}>
	<Calculator />
</CalcState>
);
}

export default App;
