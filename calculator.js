
//display screen...
var display = document.querySelector(".display");

//catch all numbers and operators
var clicked = document.querySelectorAll(".clickable");

for (let click of clicked) {
  click.addEventListener("click", function() {
    display.innerText === "0"
      ? (display.innerText = "")
      : (display.innerText = display.innerText);

    display.innerText += click.value;
  });
}

//reset calculator
document.querySelector("#reset").addEventListener("click", function() {
  display.innerText = "0";
});

//triger the cucaltor when equal button preesed.
document.querySelector("#equal").addEventListener("click", calculate);

function calculate() {
  display.innerText = eval(display.innerText);
}
