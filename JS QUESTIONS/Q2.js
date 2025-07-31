// The Double Trouble:
// You are tasked with writing a function that doubles each element in an array. 
// However, there's a catch: if the array contains consecutive duplicate elements, 
// only double one of them.

DoubleTrouble();
function DoubleTrouble(){
    const numarray = [4,2,2,3,5,6,7,8,8,4,9];
    const dtarray = [];
    for(let i = 0; i < numarray.length;i++){
        if(numarray[i] == numarray[i+1]){
            if(Math.random()<0.5){
                dtarray.push(numarray[i]*2);
                dtarray.push(numarray[i+1]);
            }
            else{
                dtarray.push(numarray[i]);
                dtarray.push(numarray[i+1]*2);
            }
            i++; // i wanted to skip the same number or else this would result in same
        }
        else{
            dtarray.push(numarray[i]*2);
        }
    }
    console.log(dtarray);
}