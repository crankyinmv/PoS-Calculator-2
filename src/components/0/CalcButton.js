import React, {useContext} from 'react';
import CalcContext from '../context/calcContext';
import '../style.css';

const CalcButton = (props) =>
{
	const calcContext = useContext(CalcContext);
	var {calculate} = calcContext;

	const {bwidth,bval,btype = 'digit'} = props;

	const onClick= () => {calculate(bval);};

	const cn = `calc-button ${bwidth} ${btype==="op"?"op":""}`;
	return (<div className={cn}  onClick={onClick}>{bval}</div>);
//	const cn = `btn btn-default ${btype==="op"?"":""}`;
//	return (<button className={cn}  onClick={onClick}>{bval}</button>);

};

export default CalcButton;

