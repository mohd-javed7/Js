let comp_choice = 0;
let user_choice = 0;
let comp_win = 0;
let user_win = 0;
let win_computer = document.getElementById('comp-win-counter');
let win_user = document.getElementById('user-win-counter');
// Function to generate a random choice for the computer
function rand_choice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}


function rockImg() {
    let display = document.getElementById('display');
    display.innerText = '';
    let user = document.getElementById('users');
    user.innerHTML = '<img src="Assets/3.png" alt="Rock Image" style="height: 100%; width: 100%;">';
    computer();
    user_choice = 3;
    evaluateWinner();
}


function paperImg() {
    let display = document.getElementById('display');
    display.innerText = '';
    let user = document.getElementById('users');
    user.innerHTML = '<img src="Assets/2.png" alt="Paper Image" style="height: 100%; width: 100%;">';
    computer();
    user_choice = 2;
    evaluateWinner();
}
function scissorsImg() {
    let display = document.getElementById('display');
    display.innerText = '';
    let user = document.getElementById('users');
    user.innerHTML = '<img src="Assets/1.png" alt="Scissors Image" style="height: 100%; width: 100%;">';
    computer();
    user_choice = 1;
    evaluateWinner();
}
e
function computer() {
    let choice = rand_choice();
    comp_choice = Number(choice);

    let user = document.getElementById('computer');
    user.innerHTML = `<img src="Assets/${comp_choice}.png" alt="Computer's Choice" style="height: 100%; width: 100%;">`;
}
function evaluateWinner() {
    const display = document.getElementById('display');
    if (comp_choice == user_choice) {
        display.innerText = 'Tie';
    }
    else if ((comp_choice == 1 && user_choice == 2) || (comp_choice == 3 && user_choice == 1) || (comp_choice == 2 && user_choice == 3)) {
        display.innerText = 'Computer WINS!';
        comp_win+=1;
        win_computer.innerText = comp_win;

    }
    else {
        display.innerText = "You WIN!";
        user_win++;
        win_user.innerText = user_win;            }
}