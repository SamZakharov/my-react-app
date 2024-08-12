import findItem from './FindCartProduct';

function manageQuantity(cartArray, id, action) {
    const item = findItem(cartArray, id);
    if (item) {
        if (action === 'INCREASE') {
            item.quantity += 1;
        } else if (action === 'DECREASE' && item.quantity > 1) {
            item.quantity -= 1;
        }
    }
}

const orderSum = (ordersArray) => {
    return ordersArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue.quantity,
        0
    );
};

const PriceSum = (ordersArray) => {
    return ordersArray.reduce(
        (previousValue, currentValue) => previousValue + (currentValue.price * currentValue.quantity),
        0
    );
};

export {manageQuantity, orderSum, PriceSum};
