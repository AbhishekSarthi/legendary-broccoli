let amount = document.querySelector('#amount');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let quantity = document.querySelector('#quantity');
let payable = document.querySelector('#payable');

let value = 1;
let finalAmt = 299;
console.log(amount.innerHTML);
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

plus.addEventListener('click', () => increment());
minus.addEventListener('click', () => decrement());
payable.addEventListener('click', () => finalAmount());
