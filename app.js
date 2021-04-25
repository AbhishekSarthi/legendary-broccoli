let amount = document.querySelector('#amount');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let quantity = document.querySelector('#quantity');
let payable = document.querySelector('#payable');
let mini1 = document.querySelector('#mini1');
let mini2 = document.querySelector('#mini2');

let value = 1;
let finalAmt = 299;

function increment() {
    value = value + 1;
    quantity.innerHTML = value;
}
function decrement() {
    if (value !== 1) {
        value = value - 1;
    }
    quantity.innerHTML = value;
}
function finalAmount() {
    amount.innerHTML = finalAmt * quantity.innerHTML;
}

function setMini1() {
    mini1.classList.add('green');
    mini2.classList.remove('green');
    finalAmt = 299;
    finalAmount();
}

function setMini2() {
    mini2.classList.add('green');
    mini1.classList.remove('green');
    finalAmt = 599;
    finalAmount();
}

plus.addEventListener('click', () => increment());
minus.addEventListener('click', () => decrement());
payable.addEventListener('click', () => finalAmount());
mini1.addEventListener('click', () => setMini1());
mini2.addEventListener('click', () => setMini2());
