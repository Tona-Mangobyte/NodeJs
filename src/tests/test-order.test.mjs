import { describe, it } from 'node:test';
import assert from 'node:assert';
import { createOrder, updateOrderStatus } from '../sale/order.mjs';

describe('Order Management', () => {
    it('places an order and update its status', () => {
        const newOrder = createOrder(1, 1);
        const updatedOrder = updateOrderStatus(
            newOrder.id,
            'completed',
        );
        assert.equal(updatedOrder.status, 'completed');
    });
});
