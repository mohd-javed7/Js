// The Vowel Counter:
// You need to create a function that counts the number of vowels 
// in a given string. Consider both uppercase and lowercase vowels.

countVowel();

function countVowel(){
    const str = "Javed";
    const vowel = "aeiouAEIOU"
    let counter = 0;
    for (const alpha of str) {
        if(vowel.includes(alpha)){
            counter++;
        }
    }
    console.log(`Total number of vowels in ${str} is ${counter}`);
}