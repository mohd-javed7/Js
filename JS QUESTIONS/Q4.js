// The Password Validator:
// You are building a password validation feature. Create a function that 
// checks if a given password meets the following criteria: at least 8 characters long, 
// contains both uppercase and lowercase letters, and includes at least one digit.

CheckPass();

function CheckPass(){
    const password = "Idkwhats"
    const min = password.length>=8? true:false;
    let uppercase = false;
    let lowercase = false;
    let digit = false;
    for (const alph of password) {
        if(password.toUpperCase().includes(alph)){
            uppercase = true;
        }
        if(password.toLowerCase().includes(alph)){
            lowercase = true;
        }
        if("123456789".includes(alph)){
            digit = true;
        }
    }
    if(min && uppercase && lowercase && digit){
        console.log("Password is valid.");
    }
    else{
        console.log("Password is not valid.");
    }
}