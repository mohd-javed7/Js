// The Mirror Mirror:
// Imagine you have a string, and you need to create a new string that 
// is a mirror image of the original. Write a function that appends 
// the reversed version of the original string to itself.

mirror();

function mirror(){
    const OrgString = "I am the original";
   const reversedString = reverseStr(OrgString);
    const answer = OrgString + '  ' + reversedString;
    console.log(answer);
}

function reverseStr(str){
    return str.split('').reverse().join('');
}