let number = document.getElementById("counterNumber");
let value = parseInt(number.textContent);
function incrementCounter() {
    value += 1;
    number.innerText = value;
}

function decrementCounter() {
    value -= 1;
    number.innerHTML = value;
}

function resetCounter() {
    value = 0;
    number.innerHTML = value;
}