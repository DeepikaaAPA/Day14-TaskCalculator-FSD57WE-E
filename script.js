let clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  result.value = "";
  answer = undefined;
  stack = [];
  query.value = "";
});

let backspace = document.getElementById("backspace");

backspace.addEventListener("click", () => {
  let v = result.value;
  result.value = v.substring(0, v.length - 1);
});

let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

let dot = document.getElementById("dot");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let equal = document.getElementById("equal");

let query = document.getElementById("query");
let result = document.getElementById("result");

/*********Initialize variables ***************/
let operand1 = 0,
  operand2 = 0,
  answer,
  stack = [],
  operator = "";

/***** ******** Event listener functions*************** ******/

/***********for Numbers and dot . ****** ****/
function onClickNumber(number) {
  result.value += number;
  console.log("number", result.value);
}

/**********for operators********************/
function onClickOperator(symbol) {
  console.log("operator", result.value);

  stack.push(result.value, symbol);

  query.value = stack.join("");
  console.log(...stack, "query = ", query.value);
  result.value = "";
}

/************for Equals button ************/

function onClickEquals() {
  operand2 = result.value;
  operator = stack.pop();
  operand1 = stack.pop();
  console.log(
    "equals - >",
    operand1,
    operator,
    operand2,
    "    stack=>",
    ...stack
  );
  answer = evaluate(operand1, operator, operand2);
  stack.push(answer);
  query.value = operand1 + operator + operand2;
  result.value = answer;
}

function evaluate(operand1, operator, operand2) {
  switch (operator) {
    case "+":
      return +operand1 + +operand2;
    case "-":
      return +operand1 - operand2;
    case "*":
      return +operand1 * +operand2;
    case "/":
      return +operand1 / +operand2;
  }
}

/********************************************************** */

/*****Adding event listeners to number buttons ************ */
one.addEventListener("click", () => onClickNumber("1"));

three.addEventListener("click", () => onClickNumber("3"));

two.addEventListener("click", () => onClickNumber("2"));

four.addEventListener("click", () => onClickNumber("4"));

five.addEventListener("click", () => onClickNumber("5"));

six.addEventListener("click", () => onClickNumber("6"));

seven.addEventListener("click", () => onClickNumber("7"));

eight.addEventListener("click", () => onClickNumber("8"));

nine.addEventListener("click", () => onClickNumber("9"));

zero.addEventListener("click", () => onClickNumber("0"));

double0.addEventListener("click", () => onClickNumber("00"));

dot.addEventListener("click", () => onClickNumber("."));

/************************************************************ */

/*******Adding event lisenners to operator buttons ********* */

add.addEventListener("click", () => onClickOperator("+"));
subtract.addEventListener("click", () => onClickOperator("-"));
multiply.addEventListener("click", () => onClickOperator("*"));
divide.addEventListener("click", () => onClickOperator("/"));
equal.addEventListener("click", onClickEquals);
