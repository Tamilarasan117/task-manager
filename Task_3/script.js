let resultElement = document.getElementById('display');

let string = '';

// function for add the operators and evaluate the result
function addOperator(operator) {
  try {
    if(operator === '=') {
      string = eval(resultElement.value).toFixed(2);
      resultElement.value = Number(string);
    } else {
      string = operator;
      resultElement.value += string;
    };
  } catch (error) {
    resultElement.value = 'Invalid Input...';
  };
};

// function for add a numbers
function addNumber(number) {
  if(resultElement.value === '0.00' || resultElement.value === 'Invalid Input...') {
    resultElement.value = null;
  };
  string = number;
  resultElement.value += string;
};

// function for add a decimal points
function addDecimal(decimal = '.') {
  string = decimal;
  resultElement.value += string;
};

// function for delete single digit from display
function deleteDisplay() {
  string = resultElement.value;
  let len = string.length;
  resultElement.value = string.slice(0, (len-1));
};

// function for clear the display
function clearDisplay() {
  resultElement.value = '0.00';
};
