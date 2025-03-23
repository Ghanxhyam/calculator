let display = document.getElementById('display');


function appendToDisplay(value) {
  display.value += value;
}


function clearDisplay() {
  display.value = '';
}


function deleteLast() {
  display.value = display.value.slice(0, -1);
}


function calculateResult() {
  try {
    const result = eval(display.value);
    if (isNaN(result)) {
      throw new Error('Invalid input');
    }
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}


function calculateSquareRoot() {
  try {
    const value = parseFloat(display.value);
    if (value >= 0) {
      display.value = Math.sqrt(value);
    } else {
      throw new Error('Invalid input');
    }
  } catch (error) {
    display.value = 'Error';
  }
}


function calculatePercentage() {
  try {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
      display.value = value / 100;
    } else {
      throw new Error('Invalid input');
    }
  } catch (error) {
    display.value = 'Error';
  }
}


document.addEventListener('keydown', (event) => {
  const key = event.key;


  if (/[0-9+\-*/.%]/.test(key)) {
    appendToDisplay(key);
  }


  if (key === 'Enter') {
    calculateResult();
  }

 
  if (key === 'Backspace') {
    deleteLast();
  }


  if (key === 'Escape') {
    clearDisplay();
  }

  
  if (key === 's') {
    calculateSquareRoot();
  }
});


function handleInvalidInput() {
  if (display.value === 'Error') {
    clearDisplay();
  }
}


document.querySelectorAll('.buttons button').forEach((button) => {
  button.addEventListener('click', handleInvalidInput);
});