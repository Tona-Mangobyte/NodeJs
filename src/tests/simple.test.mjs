import test from 'node:test';
import assert from 'node:assert';

test('doubles items for a 2*e transformer', () => {
    // Arrange
    const inputArray = [1, 2, 3, 10];

    // Act
    const actual = inputArray.map((e) => 2 * e);

    // Assert
    assert.deepEqual(actual, [2, 4, 6, 20]);
});
