const {doKey, readDisplay, getDefaultState} = require('./calc');

test('digits and display', () => 
{
	let state = getDefaultState();
	state = doKey('1', state);
	state = doKey('2', state);
	state = doKey('3', state);
	expect(readDisplay(state)).toBe('123');
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
console.log(state);
//        state = doKey('+', state);
//        state = doKey('3', state);
        state = doKey('/', state);
console.log(state);
        state = doKey('0', state);
console.log(state);
        state = doKey('=', state);
console.log(state);
        expect(readDisplay(state)).toBe('INF');
});

