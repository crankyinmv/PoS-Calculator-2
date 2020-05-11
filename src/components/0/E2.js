import React, {useContext} from 'react';
import CalcContext from '../context/calcContext';

const E2 = () =>
{
	const calcContext = useContext(CalcContext);
	var {addLetter,clicks} = calcContext;

	const clickA = () =>{addLetter('A');};
	const clickB = () =>{addLetter('B');};

	return (
<div>
		<div>I am also a conkulator</div>
	<button id='btn1b' onClick={clickA}>A</button> <button id='btn2b' onClick={clickB}>B</button>
</div>
	);
};

export default E2;

