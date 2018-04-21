
const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
   expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to not equal 5', () => {
   expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.isNull()).toBeFalsy();
});

// toEqual is better used for Objects & Arrays
test('User should be Me', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Chris',
    lastName: 'McAnally',
    username: 'cmcanally',
  })
});

test('Should be under 1500', () => {
  const load1 = 800;
  const load2 = 400;
  expect(load1 + load2).toBeLessThan(1500);
})
