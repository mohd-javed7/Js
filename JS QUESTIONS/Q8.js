// Async Array Mapping:
// Write an asynchronous function that takes an array of numbers and returns a new 
// array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function ArrayMapping(nums) {
    
    const promises = nums.map(num=>{
        return new Promise(resolve =>{
            setTimeout(()=>{
                resolve(num*2);

            },500);
        })
    })
    return await Promise.all(promises);
}

const nums = [1,2,4,5,6];

ArrayMapping(nums).then(resolvedValues =>{
    console.log("Values : ",resolvedValues);
})