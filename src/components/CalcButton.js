import React, {useContext} from 'react';
import CalcContext from '../context/calcContext';
import '../style.css';

const CalcButton = (props) =>
{
	const calcContext = useContext(CalcContext);
console.log('button',calcContext);
	var {calculate, sr} = calcContext;

	const {bwidth,bval,btype = 'digit'} = props;

	const onClick= () => {calculate(bval);sr();};
	const buttonStyles = 
	{
		'narrow': 'col-6 col-sm',
		'medium': 'col-12 col-sm-6',
		'wide': 'col-6 col-sm-9',
		'other': 'col-6 col-sm-3'
	};

	const cn = `button text-center ${buttonStyles[bwidth]}${btype==="op"?" op":""}`;
	return (<div className={cn}  onClick={onClick}>{bval}</div>);
//	const cn = `btn btn-default ${btype==="op"?"":""}`;
//	return (<button className={cn}  onClick={onClick}>{bval}</button>);

};

export default CalcButton;

