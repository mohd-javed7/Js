// The Shopping Cart Totalizer:
// You are working on an e-commerce website, and you need to calculate the total cost of 
// items in the shopping cart. Implement a function named calculateTotal that takes an array 
// of products with prices and quantities and returns the total cost.

 function calculateTotal(product){
    return product.map(items =>({
        name : items.name,
        total : items.price * items.quantity
    }))


}

const products = [
    {
        name : "Javed",
        price : 299,
        quantity: 10
    },
    {
        name : "Suraj",
        price : 500,
        quantity : 30
    },
    {
        name : "Roshan",
        price : 399,
        quantity : 10
    }
]

console.log(calculateTotal(products))
