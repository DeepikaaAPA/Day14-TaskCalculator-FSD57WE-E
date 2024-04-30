let clear = document.getElementById("clear");

let backspace = document.getElementById("backspace");

/*************getting the elements from the doc*****/

let container = document.getElementById("container");

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
const modulo = document.getElementById("modulo");
let equal = document.getElementById("equal");

let query = document.getElementById("query");
let result = document.getElementById("result");

/*********Initialize variables ***************/
let operand1 = 0,
  operand2 = 0,
  answer,
  stack = [],
  operator = "";

/************* Event listener functions*********/

/***********for key press evwnts *************/

function onClickClear() {
  result.value = "";
  answer = undefined;
  stack = [];
  query.innerText = " ";
}

function onClickBackspace() {
  let v = result.value;
  result.value = v.substring(0, v.length - 1);
}

function isOperator(key) {
  return key == "+" || key == "-" || key == "*" || key == "/" || key == "%";
}
function onKeyPressed(event) {
  event.preventDefault();
  if ((event.key >= "0" && event.key <= "9") || event.key == ".") {
    //console.log("code=",event.code, "key",event.key);

    onClickNumber(event.key);
  } else if (isOperator(event.key)) {
    onClickOperator(event.key);
  } else if (event.key === "Enter") {
    onClickEquals(true);
  } else if (event.key === "Backspace") {
    onClickBackspace();
  } else if (event.key === "Escape") {
    onClickClear();
  } else if (event.key >= "a" && event.key <= "z") {
    alert("no alphabets !!!");
  } else {
    console.log(event.key);
  }

  console.log("***********finish key event ********");
}

/***********for Numbers and dot . ****** ****/
function onClickNumber(number) {
  result.value += number;
  //  console.log("number", result.value);
}

/**********for operators********************/
function onClickOperator(symbol) {
  console.log("stack = >", stack);
  // if (isOperator(stack[stack.length - 1])) {
  //   stack.pop();
  // } else stack.push(result.value);
  // stack.push(symbol);
  // query.innerText = stack[stack.length - 2] + symbol;
  // result.value = "";
  // // console.log("operator end ->", ...stack);
  // if (isOperator(stack[stack.length - 1])) {
  //   stack.pop();
  //   console.log("stack = >", stack);
  // } else {
  stack.push(result.value);
  console.log("stack = >", stack);
  //}
  onClickEquals(false);
  console.log("stack = >", stack);
  stack.push(symbol);
  console.log("stack = >", stack);
  query.innerText = stack.join("");
  console.log("stack = >", stack);
  result.value = "";
}

/************for Equals button ************/

function onClickEquals(flag) {
  console.log("flag=", flag);
  if (flag) {
    stack.push(result.value);
  }
  console.log("in equals stack =>", ...stack);
  operand2 = stack.pop();
  operator = stack.pop();
  operand1 = stack.pop();
  answer = evaluate(operand1, operator, operand2);
  stack.push(answer);
  if (flag) {
    query.innerText = operand1 + operator + operand2;
    result.value = answer;
  }
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
    case "%":
      return +operand1 % +operand2;
    default:
      return +operand2;
  }
}

/********************************************************** */

/*****Adding event listeners to number buttons ************ */
clear.addEventListener("click", onClickClear);

backspace.addEventListener("click", onClickBackspace);

container.addEventListener("keydown", onKeyPressed);

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
equal.addEventListener("click", () => onClickEquals(true));
modulo.addEventListener("click", () => onClickOperator("%"));
