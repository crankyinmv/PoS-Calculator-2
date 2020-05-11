import React, {useContext} from 'react';
import CalcContext from '../context/calcContext';
import {readDisplay} from '../logic/calc';

const CalcDisplay = () =>
{
	const calcContext = useContext(CalcContext);
	var realDisplayed = readDisplay(calcContext.state);

	return (
	<div className='calc-row'>
		<div className='calc-display' id='display'>{realDisplayed}</div>
	</div>
	);
};

export default CalcDisplay;

