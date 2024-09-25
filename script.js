const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const output = document.getElementById("output");
const clearButton = document.getElementById("clear");
let isError = false;

function cleanInputString(str) {
  const regex = /[+\-\s]/g;
  return str.replace(regex, "");
}

