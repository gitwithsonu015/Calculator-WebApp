let display = document.getElementById("display");
let history = document.getElementById("history");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let exp = display.value;
    let result = eval(exp);
    display.value = result;

    let li = document.createElement("li");
    li.textContent = exp + " = " + result;
    history.appendChild(li);
  } catch {
    display.value = "Error";
  }
}

function toggleDark() {
  document.body.classList.toggle("dark");
}
function toggleLight() {
  document.body.classList.toggle("light");
}
