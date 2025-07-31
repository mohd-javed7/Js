// The Asynchronous Shopper:
// Imagine you are building an online shopping application. Write an asynchronous function called placeOrder 
// that simulates placing an order and returns a promise. The promise should resolve with an order confirmation 
// message after a random delay.


async function placeOrder(order) {
    const promises = order.map(no=>{
        return new Promise(resolve=>{
            let delay = Math.floor(Math.round()*2500)
            setTimeout(()=>{
                resolve(`Order no.${no} has been confirmed.`);
            },delay);
        })
    })
    return await Promise.all(promises);

}

const orderno = [1,2,3,4,5];

placeOrder(orderno).then(message =>{
    console.log("Confirmation: ",message);
}).then(()=>{
    console.log("All orders have been confirmed.")
})