'use strict';

const Queue = require('../..').DataStructures.Queue;
const assert = require('assert');

describe('Queue', () => {
  it('should start empty', () => {
    const q = new Queue();
    assert(q.isEmpty());
    assert.equal(q.length, 0);
  });

  it('should implement a FIFO logic', () => {
    const q = new Queue();
    q.push(1);
    q.push(2);
    q.push(3);
    assert.equal(q.length, 3);
    assert.equal(q.pop(), 1);
    assert.equal(q.pop(), 2);
    assert.equal(q.pop(), 3);
    assert(q.isEmpty());
    assert.throws(() => q.pop(), Error);
  });

  it('should allow me to peek at the first element in' +
    ' line without popping it', () => {
    const q = new Queue();
    assert.throws(() => q.peek(), Error); // Empty list
    q.push(1);
    q.push(2);
    q.push(3);
    assert.equal(q.peek(), 1);
    assert.equal(q.peek(), 1);
    q.pop();
    assert.equal(q.peek(), 2);
  });
});