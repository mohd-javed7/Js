// The Sum Selector:
// You are working on a function that should sum all numbers in an array 
// until it encounters a negative number. Write a function that performs this summation.

sumArray();

function sumArray(){
    const num = [1,2,6,7,8,-5,5,6];
    let sum = 0;
    for (const n of num) {
        if(n<0){
            break;
        }
        sum+=n;
    }
    console.log(`The sum of the elements of array is ${sum}`);
}