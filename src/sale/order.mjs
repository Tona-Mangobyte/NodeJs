const orders = [];

const createOrder = (productId, quantity) => {
    const order = { productId, quantity, status: 'pending' };
    orders.push(order);
    return order;
};

const updateOrderStatus = (orderId, status) => {
    const order = orders.find((order) => order.id === orderId);
    if (order) {
        order.status = status;
    }
    return order;
};

export { createOrder, updateOrderStatus };
