/* States. */
const NUMBER1START = Symbol('number1_start');
const NUMBER2START = Symbol('number2_start');
const NUMBER1 = Symbol('number1');
const NUMBER2 = Symbol('number2');

/*
function Calculator()
{
	state.calcState = NUMBER1START;
	state.displayed = 0;
	state.num1 = 0;
	state.num2 = 0;
	state.operator = '';
}
*/

const getDefaultState = function()
{
	return {
		calcState:NUMBER1START,
		displayed:0,
		num1:0,
		num2:0,
		operator:'',
		overflow: false
	};
}

/*
Object.defineProperty(Calculator, 'number1Start', {value: Symbol('number1_start')});
Object.defineProperty(Calculator, 'number2Start', {value: Symbol('number2_start')});
Object.defineProperty(Calculator, 'number1', {value: Symbol('number1')});
Object.defineProperty(Calculator, 'number2', {value: Symbol('number2')});
*/

const doKey = function(key, oldState)
{
	var state = oldState ? {...oldState} : getDefaultState();

	if(key === 'C')
	{
		state = clear(state);
		return state;
	} 

	if(state.calcState === NUMBER1START)
	{
		if((key >= '0') && (key <= '9'))
		{
			state.displayed = key - '0';
			state.calcState = NUMBER1;
		}
	}
	else if(state.calcState === NUMBER1)
	{
		if((key >= '0') && (key <= '9'))
		{
			state.displayed = state.displayed * 10 + (key - '0');
		}
		else if(key === '←')
		{
			state.displayed = Math.floor(state.displayed/10);
		}
		else if((key === '+') || (key === '-') || (key === 'X') || (key === '÷'))
		{
			state.num1 = state.displayed;
			state.operator = key;
			state.calcState = NUMBER2START;
		}
	}
	else if(state.calcState === NUMBER2START)
	{
		if((key >= '0') && (key <= '9'))
		{
			state.displayed = key - '0';
			state.calcState = NUMBER2;
		}
	}
	else if(state.calcState === NUMBER2)
	{
		if((key >= '0') && (key <= '9'))
		{
			
			state.displayed = state.displayed * 10 + (key - '0');
		}
		else if(key === '←')
		{
			state.displayed = Math.floor(state.displayed/10);
		}
		else if((key === '+') || (key === '-') || (key === 'X') || (key === '÷'))
		{
			state.num2 = state.displayed;
			state = calculate(state);
			state.num1 = state.displayed;
			state.operator = key;
			state.calcState = NUMBER2START;
		}
		else if(key === '=')
		{
			state.num2 = state.displayed;
			state = calculate(state);
			state.calcState = NUMBER1START;
		}
	}

	return state;
}


const calculate = function(state)
{
	if((state.num2 === 0) && (state.operator === '÷'))
	{
		state.overflow = true;
	}
	else if(state.calcState !== NUMBER2)
	{
		throw new Error("calculation from state: "+state.calcState);
	}
	else
	{
		if(state.operator === '+')
		{
			state.displayed = state.num1+state.num2;
		}
		else if(state.operator === '-')
		{
			state.displayed = state.num1-state.num2;
		}
		else if(state.operator === 'X') 
		{
			state.displayed = state.num1*state.num2;
		}
		else if(state.operator === '÷')
		{
			state.displayed = state.num1/state.num2;
		}
		else
			throw new Error('Invalid operation: '+state.operator);
	}

	return state;
};

/*
Calculator.prototype.clear = function()
{
	state.calcState = NUMBER1START;
	state.displayed = 0;
	state.overflow  = false;
}
*/

const clear = function(state)
{
	return {...state, calcState:NUMBER1START, displayed:0, overflow:false};
}

/*
Calculator.prototype.readDisplay = function()
{
	if(state.overflow)
		return 'INF';
	else
		return ''+state.displayed;
}
*/
const readDisplay = function(state)
{
	if(state.overflow)
		return 'INF';
	else
		return ''+state.displayed;
}

export {doKey, readDisplay, getDefaultState};
