console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;
console.log(basket);

// function addItem adds whatever item was placed in the input into the array basket
// it returns true to show that it ran
function addItem(item) {
    basket.push(item);
    return true;
}
console.log( 'addItem returns:', addItem('Spaghetti'));
console.log(basket);

function listItems() {
    for (let i of basket) {
        console.log(i);
    }
}
listItems();
console.log(basket);

function empty() {
    basket.splice(0, basket.length)
    return basket;
}
console.log( 'empty returns:', empty() );



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
