const display = document.getElementById('displaylabel');
let count = 0;
function incNum(){
    count++;
    display.innerHTML=count;
}
function clrNum(){
    count = 0
    display.innerHTML = count;
}
function decNum(){
    count--;
    display.innerHTML=count;
}