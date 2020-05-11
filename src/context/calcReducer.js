import {doKey} from '../logic/calc';
import {CALCULATE} from './actionTypes';

export default (state, action) =>
{
	switch(action.type)
	{
		case CALCULATE:
			return doKey(action.payload, state);
		default:
			return state;
	};
};

