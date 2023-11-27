var displayElement = document.getElementById('displayRow');
var value = 0, value2 = 0;
displayElement.innerHTML = 0;
var operator = '';

function storeOperator(op) {
  if (op != '=') {
    operator = op;
    value2 = value;
    value = 0;
  }
}

function positiveNegative() {
  value = value * -1;
  displayElement.innerHTML = value.toString();
}

function clearCalc() {
  value = 0;
  displayElement.innerHTML = value.toString();
  operator = '';
}

function compute() {
  if (operator == '+') {
    value = value2 + value;
  } else if (operator == '-') {
    value = value2 - value;
  } else if (operator == 'x') {
    value = value2 * value;
  } else if (operator == '/') {
    value = value2 / value;
  } else if (operator == '%') {
    value = value2 % value;
  }
  operator = '';
  displayElement.innerHTML = value.toString();
}

function pressDecimalPoint() {
  if (Number.isInteger(value)) {
    valueString = value.toString(); 
    valueString = `${valueString}.`;
    value = parseFloat(valueString).toFixed(1);
  }
  displayElement.innerHTML = valueString;
}

function pressNumber(buttonValue) {
  valueString = value.toString(); 
  if (valueString == '0') {
    valueString = buttonValue.toString(); 
    value = buttonValue; 
  } else {
    // check if it has a decimal point or none
    
    if (Number.isInteger(value) && valueString.length < 10) {

    if (Number.isInteger(value)) {
      // no decimal point
      valueString = valueString + buttonValue.toString(); 
      value = parseInt(valueString);
    } else {
      // it has decimal point
      var decimalToString = value.toString();
      value = parseFloat(value);
      var decimalPlace = decimalToString.indexOf('.');
      var decimalCount = decimalToString.length - decimalPlace - 1;

      if (decimalCount == 1 && decimalToString[decimalToString.length-1] == '0' ) {


        var newDecimalValue = buttonValue / (10 ** decimalCount); 
      } else {
        var newDecimalValue = buttonValue / (10 ** (decimalCount + 1));
      }
      value = value + newDecimalValue; 
      valueString = value.toString(); 
    }
    
  }
  displayElement.innerHTML = valueString;
}