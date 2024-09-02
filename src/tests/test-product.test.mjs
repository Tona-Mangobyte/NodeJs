import { describe, it } from 'node:test';
import assert from 'node:assert';
import { getProductById } from '../sale/product.mjs';

describe('getProductById', () => {
    it('finds a product that exists', () => {
        const product = getProductById(2);
        assert.deepStrictEqual(product, {
            id: 2,
            name: 'Laptop',
            price: 2000,
        });
    });

    it('returns undefined for a product that does not exist', () => {
        const product = getProductById(-1);
        assert.equal(product, undefined);
    });
});
