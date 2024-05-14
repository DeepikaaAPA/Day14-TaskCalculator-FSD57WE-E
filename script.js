let e = `<div class="flex">
<div class="container" id="container" tabindex="0">
  <h1 id="title" class="pt-2 px-4 text-success">Calculator</h1>
  <p id="description" class="ps-4 m-0 text-primary text-muted">
    This is a basic calculator.
  </p>
  <div class="row m-0 p-0">
  <label id="MemoryLabel" class="border col-4 ">Memory :<label id="memory"> </label></label>
    <label class="col-7" tabindex="-1" id="query"> &nbsp;</label>
  </div>
  <div class="row px-2">
    <input
      tabindex="-1"
      readonly
      class="form-control"
      type="text"
      id="result"
      value="0"
    />
  </div>
  <div class="row">
  <div class="col">
  <button class="memory" id="MS">MS</button>
  </div>
  <div class="col">
  <button class="memory" id="MR">MR</button>
  </div>
  <div class="col">
  <button class="memory" id="MC">MC</button>
  </div>
</div>
  <div class="row">
    <div class="col"><button tabindex="-1" id="clear">C</button></div>
    <div class="col">
      <button tabindex="-1" id="backspace">
        <i class="fas fa-backspace"></i>
      </button>
    </div>
    <div class="col"><button tabindex="-1" id="dot">.</button></div>
    <div class="col">
      <button tabindex="-1" id="multiply" class="operator">*</button>
    </div>
  </div>
  <div class="row">
    <div class="col"><button tabindex="-1" id="seven">7</button></div>
    <div class="col">
      <button tabindex="-1" id="eight">8</button>
    </div>
    <div class="col"><button tabindex="-1" id="nine">9</button></div>
    <div class="col">
      <button tabindex="-1" id="divide" class="operator">÷</button>
    </div>
  </div>
  <div class="row">
    <div class="col"><button tabindex="-1" id="four">4</button></div>
    <div class="col">
      <button tabindex="-1" id="five">5</button>
    </div>
    <div class="col"><button tabindex="-1" id="six">6</button></div>
    <div class="col">
      <button tabindex="-1" id="subtract" class="operator">-</button>
    </div>
  </div>
  <div class="row">
    <div class="col"><button tabindex="-1" id="1">1</button></div>
    <div class="col">
      <button tabindex="-1" id="2">2</button>
    </div>
    <div class="col"><button tabindex="-1" id="3">3</button></div>
    <div class="col">
      <button tabindex="-1" id="add" class="operator">+</button>
    </div>
  </div>
  <div class="row pb-3">
    <div class="col"><button tabindex="-1" id="zero">0</button></div>
    <div class="col">
      <button tabindex="-1" id="double0">00</button>
    </div>

    <div class="col"><button tabindex="-1" id="equal">=</button></div>
    <div class="col">
      <button tabindex="-1" id="modulo" class="operator" >%</button>
    </div>
  </div>
</div>
</div>`;

document.body.innerHTML = e;

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

let ms = document.getElementById("MS");
let mr = document.getElementById("MR");
let mc = document.getElementById("MC");

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
  //console.log("event",event);
  result.value += number;
  console.log("number", number);
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
    query.innerText = stack.join("");
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

/*Memory save & retrieve */
function onClickMS() {
  sessionStorage.setItem("m", result.value);
  document.getElementById("memory").innerText = sessionStorage.getItem("m");
}

function onClickMR() {
  result.value = sessionStorage.getItem("m");
}
function onClickMC() {
  sessionStorage.clear();
  document.getElementById("memory").innerText = sessionStorage.getItem("m");
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

ms.addEventListener("click", onClickMS);
mr.addEventListener("click", onClickMR);
mc.addEventListener("click", onClickMC);

/************************************************************ */

/*******Adding event lisenners to operator buttons ********* */

add.addEventListener("click", () => onClickOperator("+"));
subtract.addEventListener("click", () => onClickOperator("-"));
multiply.addEventListener("click", () => onClickOperator("*"));
divide.addEventListener("click", () => onClickOperator("/"));
equal.addEventListener("click", () => onClickEquals(true));
modulo.addEventListener("click", () => onClickOperator("%"));
