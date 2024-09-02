import { describe, it } from 'node:test';
import assert from 'node:assert';
import { getProductById } from '../sale/product.mjs';
import { createOrder } from '../sale/order.mjs';

describe('Order Creation', () => {
    it('integrates with product retrieval', () => {
        const product = getProductById(1);
        const order = createOrder(product.id, 2);
        assert.equal(order.productId, product.id);
        assert.equal(order.quantity, 2);
    });
});
