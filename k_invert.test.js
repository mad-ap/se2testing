const k_invert = require('./k_invert');

//------------------------------- NOT VALID TEST CASES -------------------------------
//------- a not array
test('Testing a not an array', () => {
	let a = 5;
	let k = 5;
	expect(k_invert(a, k)).toBe(null);
});

//------- k negative
test('Testing k not a positive number', () =>{
	let a = [1, 2 , 3];
	let k = -10;
	expect(k_invert(a, k)).toBe(null);
});
