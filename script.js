const form = document.getElementById("form");
const elAmount = document.getElementById("amount");
const elDescription = document.getElementById("description");
const elTransactions = document.getElementById("transactions");
let elBalance = document.getElementById("balance");
let elTotalIncome = document.getElementById("income");
let elTotalExpenses = document.getElementById("expenses");

let totalIncome = 0;
let totalExpenses = 0;
let balance = 0;

function submitAddTransaction(event) {
  event.preventDefault();
  const amount = Number(elAmount.value);
  const description = elDescription.value;
  console.log({ amount, description });

  elTransactions.innerHTML += `<div class="transaction"><span>${description}</span><span class="${
    amount < 0 ? "negative" : "positive"
  }">${amount}</span></div>`;
  elAmount.value = "";
  elDescription.value = "";
  elDescription.focus();

  if (amount >= 0) {
    totalIncome += amount;
  } else {
    totalExpenses += amount;
  }

  balance = totalIncome + totalExpenses;

  elTotalIncome.innerHTML = totalIncome;
  elTotalExpenses.innerHTML = 0 - totalExpenses;
  elBalance.innerHTML = balance;
}
form.addEventListener("submit", submitAddTransaction);

console.log({ form });
