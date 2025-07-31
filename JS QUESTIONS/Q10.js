// The Coffee Machine:
// In your coffee shop application, you need to simulate the process of brewing 
// coffee asynchronously. Write an async function named brewCoffee that takes the 
// type of coffee and returns a promise. The promise should resolve with a message 
// indicating that the coffee is ready after a random delay.

async function brewCoffee(coffee) {
    const promises = coffee.map(type =>{
        return new Promise(resolve=>{
            const delay = Math.floor(Math.random()*(2001)+500)
            setTimeout(()=>{
                resolve(`${type} is ready.`);
            },delay);
        })
    })
    return await Promise.all(promises);
}

const Coffee = ["Americano","Cappuccino","Latte","Ristretto"];

brewCoffee(Coffee).then(message=>{
    console.log("Barista : ",message);
}).then(()=>{
    console.log("All orders are ready.");
}).catch(error =>{
    console.log(error);
})