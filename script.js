// get references to all HTML elements that will be used
const form = document.getElementById("form");
const elAmount = document.getElementById("amount");
const elDescription = document.getElementById("description");
const elTransactions = document.getElementById("transactions");
let elBalance = document.getElementById("balance");
let elTotalIncome = document.getElementById("income");
let elTotalExpenses = document.getElementById("expenses");

const darkLightMode = document.getElementById("darkLightMode");
darkLightMode.addEventListener("click", function () {
  const body = document.getElementById("body");
  body.classList.toggle("darkMode");
});

// define state
let totalIncome = 0;
let totalExpenses = 0;
let balance = 0;

// write state to html
function writeToHtml() {
  elTotalIncome.innerHTML = totalIncome;
  elTotalExpenses.innerHTML = 0 - totalExpenses;
  elBalance.innerHTML = balance;
}
writeToHtml();

function round(value) {
    return Math.floor(value * 100) / 100;
}

// create a function and give the argument event
function submitAddTransaction(event) {
  // prevent form from creating HTTP request
  event.preventDefault();

  // extract user input from user elements
  const amount = Number(elAmount.value);
  const amountRounded = round(amount);
  const description = elDescription.value;

  // create html that represents transaction and add it to the transaction list
  const amountClass = amountRounded < 0 ? "negative" : "positive";
  const amountHtml = `<span class="${amountClass}">${amountRounded}</span>`;
  const descriptionHtml = `<span>${description}</span>`;
  const transactionHtml = `<div class="transaction">${descriptionHtml}${amountHtml}</div>`;
  elTransactions.innerHTML += transactionHtml;

  // clear inputs
  elAmount.value = "";
  elDescription.value = "";

  // refocus description
  elDescription.focus();

  // update state
  if (amountRounded >= 0) {
    totalIncome = round(totalIncome + amountRounded);
  } else {
    totalExpenses = round(totalExpenses + amountRounded);
  }
  balance = round(totalIncome + totalExpenses);
  console.log({balance, totalIncome, totalExpenses}); 
  
  // write state to html
  writeToHtml();
}

// user clicks submit button, function gets executed
form.addEventListener("submit", submitAddTransaction);
