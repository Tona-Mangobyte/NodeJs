let products = [
    { id: 1, name: 'Phone', price: 600 },
    { id: 2, name: 'Laptop', price: 2000 },
    { id: 3, name: 'Headphone', price: 100 },
];

const addProduct = (product) => {
    products.push(product);
    return product;
};

const getProductById = (id) => {
    return products.find((product) => product.id === id);
};

export { addProduct, getProductById };
