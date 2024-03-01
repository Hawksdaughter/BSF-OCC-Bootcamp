const productsVariable = require("./product");

let cartItems = [];

const addToCartMethod = (productsVariable) => {
    cartItems.push(productsVariable);
};

const getCartItemsMethod = () => {
    return cartItems;
};

module.exports = {
    addToCartMethod,
    getCartItemsMethod,
};

