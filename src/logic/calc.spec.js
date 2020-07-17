const {NUMBER1START, doKey, readDisplay, getDefaultState} = require('./calc');

describe('Very basic shallow tests on the calculator key response',
()=>
{
	test('digits and display', () => 
	{
		let state = getDefaultState();
		state = doKey('1', state);
		state = doKey('2', state);
		state = doKey('3', state);
		expect(readDisplay(state)).toBe('123');
	});


	it('should match given default state', ()=>
	{
		let state = 
		{
	                calcState:NUMBER1START,
        	        displayed:0,
                	num1:0,
	                num2:0,
        	        operator:'',
                	overflow: false
	        };
		let ds = getDefaultState();
		expect(state).toEqual(ds);
	});
});
test('testing clear', () => 
{
        let state = getDefaultState();
        state = doKey('1', state);
        state = doKey('2', state);
        state = doKey('C', state);
        state = doKey('3', state);
        expect(readDisplay(state)).toBe('3');
});
test('testing backspace', () => 
{
        let state = getDefaultState();
        state = doKey('1', state);
        state = doKey('2', state);
        state = doKey('←', state);
        state = doKey('3', state);
        expect(readDisplay(state)).toBe('13');
});
test('testing calculation', () => 
{
        let state = getDefaultState();
        state = doKey('1', state);
        state = doKey('2', state);
        state = doKey('+', state);
        state = doKey('3', state);
        state = doKey('=', state);
        expect(readDisplay(state)).toBe('15');
});

test('testing division by 0', () => 
{
        let state = getDefaultState();
        state = doKey('1', state);
        state = doKey('2', state);
        state = doKey('/', state);
        state = doKey('0', state);
        state = doKey('=', state);
        expect(readDisplay(state)).toBe('INF');
});


test('testing multiplication', () => 
{
        let state = getDefaultState();
        state = doKey('1', state);
        state = doKey('2', state);
        state = doKey('X', state);
        state = doKey('3', state);
        state = doKey('=', state);
        expect(readDisplay(state)).toBe('36');
});

test('testing division', () => 
{
        let state = getDefaultState();
        state = doKey('1', state);
        state = doKey('2', state);
        state = doKey('÷', state);
        state = doKey('3', state);
        state = doKey('=', state);
        expect(readDisplay(state)).toBe('4');
});

test('testing subtraction', () => 
{
        let state = getDefaultState();
        state = doKey('1', state);
        state = doKey('2', state);
        state = doKey('-', state);
        state = doKey('3', state);
        state = doKey('=', state);
        expect(readDisplay(state)).toBe('9');
});

describe('testing ops after 2nd number', () => 
{
	var state;
test('add',()=>{
        state = doKey('1');
        state = doKey('+', state);
        state = doKey('2', state);
        state = doKey('+', state);
        state = doKey('3', state);
        state = doKey('=', state);
        expect(readDisplay(state)).toBe('6');
});
test('subtract',()=>{
        state = getDefaultState();
        state = doKey('1', state);
        state = doKey('+', state);
        state = doKey('2', state);
        state = doKey('-', state);
        state = doKey('3', state);
        state = doKey('=', state);
        expect(readDisplay(state)).toBe('0');
});
test('multiply',()=>{
        state = getDefaultState();
        state = doKey('1', state);
        state = doKey('+', state);
        state = doKey('2', state);
        state = doKey('X', state);
        state = doKey('3', state);
        state = doKey('=', state);
        expect(readDisplay(state)).toBe('9');
});
test('divide',()=>{
        state = getDefaultState();
        state = doKey('1', state);
        state = doKey('+', state);
        state = doKey('2', state);
        state = doKey('/', state);
        state = doKey('3', state);
        state = doKey('=', state);
        expect(readDisplay(state)).toBe('1');
});
});
describe('testing keys after first digit of 2nd number', ()=>
{
	test('digit', ()=>
	{
		var state = getDefaultState();
		state = doKey('1');
		state = doKey('+', state);
		state = doKey('2', state);
		state = doKey('2', state);
		state = doKey('=', state);
		expect(readDisplay(state)).toBe('23');
	});
	test('backspace', ()=>
	{
		var state = getDefaultState();
		state = doKey('1', state);
		state = doKey('+', state);
		state = doKey('2', state);
		state = doKey('5', state);
		state = doKey('←', state);
		expect(readDisplay(state)).toBe('2');
	});
});
test('bad operator (not really reachable by the user)', ()=>
{
	var state = getDefaultState();
	state = doKey('1');
	state = doKey('+', state);
	state = doKey('2', state);
	state.operator = 'poo';
	expect(()=>
	{
		doKey('=', state);
	}).toThrowError('Invalid operation: poo');
});

test('2nd digit of first number', () =>
{
		var state = getDefaultState();
		state = doKey('1', state);
		state = doKey('5', state);
		state = doKey('+', state);
		state = doKey('2', state);
		state = doKey('=', state);
		expect(readDisplay(state)).toBe('17');
});
describe('testing ops after 2 digit 1st number', () =>
{
	test('add', ()=>
	{
		var state = getDefaultState();
		state = doKey('1');
		state = doKey('2', state);
		state = doKey('+', state);
		state = doKey('1', state);
		state = doKey('=', state);
		expect(readDisplay(state)).toBe('13');
	});
	test('subtract', ()=>
	{
		var state = getDefaultState();
		state = doKey('1');
		state = doKey('2', state);
		state = doKey('-', state);
		state = doKey('1', state);
		state = doKey('=', state);
		expect(readDisplay(state)).toBe('11');
	});
	test('multiply', ()=>
	{
		var state = getDefaultState();
		state = doKey('1');
		state = doKey('2', state);
		state = doKey('X', state);
		state = doKey('1', state);
		state = doKey('=', state);
		expect(readDisplay(state)).toBe('12');
	});
	test('divide', ()=>
	{
		var state = getDefaultState();
		state = doKey('1');
		state = doKey('2', state);
		state = doKey('/', state);
		state = doKey('1', state);
		state = doKey('=', state);
		expect(readDisplay(state)).toBe('12');
	});
});
test('starting with shit', () =>
{
	var state = getDefaultState();
	state = doKey('f', state);
	expect(readDisplay(state)).toBe('0');
});

