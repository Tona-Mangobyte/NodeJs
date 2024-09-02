import { describe, it } from 'node:test';
import assert from 'node:assert';
import { addProduct, getProductById } from '../sale/product.mjs';
import { createOrder, updateOrderStatus } from '../sale/order.mjs';

describe('From product addition to order completion', () => {
    it('works', () => {
        addProduct({ id: 4, name: 'Tablet', price: 500 });
        const product = getProductById(4);
        const order = createOrder(product.id, 1);
        const finalOrder = updateOrderStatus(order.id, 'completed');
        assert.equal(product.name, 'Tablet');
        assert.equal(finalOrder.status, 'completed');
    });
});

