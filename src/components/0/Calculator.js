import React from 'react';
//import CalcContext from '../context/calcContext';
import CalcDisplay from './CalcDisplay';
import CalcButton from './CalcButton';

const Calculator = () =>
{
//	const calcContext = useContext(CalcContext);
//	var {addLetter,clicks} = calcContext;

//	const clickA = () =>{setClicks(clicks+'A');};
//	const clickB = () =>{setClicks(clicks+'B');};

	return (
	<div className='calc' id='calc'>
		<CalcDisplay />
		<div className='calc-row'>
			<CalcButton bwidth='medium' bval='C' />
			<CalcButton bwidth='narrow' bval='←' />
			<CalcButton bwidth='narrow' btype='op' bval='÷' />
		</div>
		<div className='calc-row'>
			<CalcButton bwidth='narrow' bval='7' />
			<CalcButton bwidth='narrow' bval='8' />
			<CalcButton bwidth='narrow' bval='9' />
			<CalcButton bwidth='narrow' btype='op' bval='X' />
		</div>
		<div className='calc-row'>
			<CalcButton bwidth='narrow' bval='4' />
			<CalcButton bwidth='narrow' bval='5' />
			<CalcButton bwidth='narrow' bval='6' />
			<CalcButton bwidth='narrow' btype='op' bval='-' />
		</div>
		<div className='calc-row'>
			<CalcButton bwidth='narrow' bval='1' />
			<CalcButton bwidth='narrow' bval='2' />
			<CalcButton bwidth='narrow' bval='3' />
			<CalcButton bwidth='narrow' btype='op' bval='+' />
		</div>
		<div className='calc-row'>
			<CalcButton bwidth='wide' bval='0' />
			<CalcButton bwidth='narrow' btype='op' bval='=' />
		</div>
	</div>
	);
};

export default Calculator;

