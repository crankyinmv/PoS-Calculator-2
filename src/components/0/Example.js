import React, {useContext} from 'react';
import E2 from './E2';
//import useCH from './useCH';
import CalcContext from '../context/calcContext';

const Example = () =>
{
	const calcContext = useContext(CalcContext);
	var {addLetter,clicks} = calcContext;
//	const [clicks, setClicks] = useState('');
//	const clickA = () =>{setClicks(clicks+'A');};
//	const clickB = () =>{setClicks(clicks+'B');};
//	var clicks = '';

//	const clickA = () =>{clicks = useCH('A');};
//	const clickB = () =>{clicks = useCH('B');};
	const clickA = () =>{addLetter('A');};
	const clickB = () =>{addLetter('B');};
//        const alertContext = useContext(AlertContext);
//        const {alert} = alertContext;

        return (
<div>
		<div>I am a conkulator</div>
		{clicks}<br />
		<button id='btn1' onClick={clickA}>A</button> <button id='btn2' onClick={clickB}>B</button>
		<E2 />
</div>
        );
};

export default Example;

