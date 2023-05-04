const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('popping an element from a non-empty stack returns the top element', () => {
    stack.push('hello');
    stack.push('world');
    const topElement = stack.pop();
    expect(topElement).toBe('hello'); // fail
});
