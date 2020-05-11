import React, {useReducer} from 'react';
import CalcContext from './calcContext';
import {getDefaultState} from '../logic/calc';
import {CALCULATE} from './actionTypes';
import CalcReducer from './calcReducer';

/*
function CalcReducer(state, action)
{
var x;
	switch(action.type)
	{
		case CALCULATE:
x = doKey(action.payload, state);
console.log(x);
return x;
		default:
			return state;
	};
}
*/

const CalcState = props =>
{
	const initialState = getDefaultState();
	const [state, dispatch] = useReducer(CalcReducer, initialState);

	const calculate = (bval) => { dispatch({type:CALCULATE, payload:bval});};

	return (
		<CalcContext.Provider value={{state,calculate}}>
			{props.children}
		</CalcContext.Provider>

	);
};

export default CalcState;
