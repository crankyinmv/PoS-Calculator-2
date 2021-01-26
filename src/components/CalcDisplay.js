import React, {useContext, useEffect} from 'react';
import CalcContext from '../context/calcContext';
import {readDisplay} from '../logic/calc';

const CalcDisplay = () =>
{
	const calcContext = useContext(CalcContext);
	var realDisplayed = readDisplay(calcContext.state);

console.log('display',calcContext);
	useEffect
	(
		function()
		{
			console.log('something');
			calcContext.usr()
		},
		[calcContext]
	);

	return (
	<div className='row'>
		<div className="col display text-right">{realDisplayed}</div>
	</div>
	);
};

export default CalcDisplay;

