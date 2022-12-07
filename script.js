const form = document.getElementById("form");
const elAmount = document.getElementById("amount");
const elDescription = document.getElementById("description");
const elTransactions = document.getElementById("transactions");

function submitAddTransaction(event) {
    event.preventDefault();  
    const amount = Number(elAmount.value);
    const description = elDescription.value;
    console.log({amount, description});

    elTransactions.innerHTML += `<div>${description} ${amount}</div>`
    elAmount.value = ""
    elDescription.value = ""
}  
form.addEventListener("submit", submitAddTransaction);

console.log({form})

