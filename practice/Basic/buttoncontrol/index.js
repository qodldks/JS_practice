const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const numOutPut = document.querySelector(".valueNum");
const stringInput = document.querySelector(".stringInput");
const stringOutput = document.querySelector(".valueString");
const colorInput = document.querySelector(".colorInput");
const colorOutput = document.querySelector(".valueColor");

var color;
var num = 0;
var string = "null";
numOutPut.innerHTML = num;
stringOutput.innerHTML = string;

plusButton.addEventListener("click", () => {
	numOutPut.innerHTML = ++num;
});

minusButton.addEventListener("click", () => {
	numOutPut.innerHTML = --num;
});

stringInput.addEventListener("change", () => {
	string = stringInput.value;
	if (!string) string = "Null";
	stringOutput.innerHTML = string;
});

colorInput.addEventListener("change", () => {
	color = colorInput.value;
	colorOutput.innerHTML = color;
	colorOutput.style.backgroundColor = color;
});
