
// Add value to the display
function append(value) {
  document.getElementById("display").value += value;
}

// Clear all input
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Evaluate the expression
function calculate() {
  let expression = document.getElementById("display").value;
  expression = expression.replace(/×/g, '*').replace(/÷/g, '/');

  try {
    let result = eval(expression);
    document.getElementById("display").value = result;
  } catch (e) {
    document.getElementById("display").value = "Error";
  }
}

// Square the current value
function square() {
  let value = document.getElementById("display").value;
  try {
    let number = eval(value.replace(/×/g, '*').replace(/÷/g, '/'));
    if (!isNaN(number)) {
      document.getElementById("display").value = Math.pow(number, 2);
    } else {
      document.getElementById("display").value = "Error";
    }
  } catch (e) {
    document.getElementById("display").value = "Error";
  }
}

// Square root of current value
function squareRoot() {
  let display = document.getElementById("display");
  let value = display.value;

  try {
    let number = eval(value.replace(/×/g, '*').replace(/÷/g, '/'));
    if (!isNaN(number) && number >= 0) {
      display.value = Math.sqrt(number);
    } else {
      display.value = "Error";
    }
  } catch (e) {
    display.value = "Error";
  }
}

// Delete last character from display
function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Toggle the sign of the current number
function toggleSign() {
  let display = document.getElementById("display");
  let value = display.value;

  try {
    let number = eval(value.replace(/×/g, '*').replace(/÷/g, '/'));
    if (!isNaN(number)) {
      display.value = (-number).toString();
    } else {
      display.value = "Error";
    }
  } catch (e) {
    display.value = "Error";
  }
}

// Dynamically generate number buttons using loop
window.onload = function () {
  const numberContainer = document.getElementById("number-buttons");
  const layout = [
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '='],
    ['0', '.']
  ];

  for (let row of layout) {
    row.forEach(value => {
      const col = document.createElement('div');
      col.className = 'col-3';

      const button = document.createElement('button');
      if (value === '=') {
        button.className = 'btn btn-equal w-100';
        button.onclick = () => calculate();
      } else if (['+', '-', '*', '/', '%', '÷', '×'].includes(value)) {
        button.className = 'btn btn-operator w-100';
        button.onclick = () => append(value);
      } else {
        button.className = 'btn btn-number w-100';
        button.onclick = () => append(value);
      }

      button.textContent = value;
      col.appendChild(button);
      numberContainer.appendChild(col);
    });
  }
};

// Demonstrating onChange event
function handleChange(event) {
  alert("You typed: " + event.target.value);
}

// Demonstrating onSubmit event
function handleFormSubmit(event) {
  event.preventDefault();
  const value = document.getElementById("demoInput").value;
  alert("Form submitted with: " + value);
}
