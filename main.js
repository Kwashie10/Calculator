function appendToScreen(value) {
	document.getElementById("result").value += value;
}

function clearScreen() {
	document.getElementById("result").value = "";
}

function calculate() {
	var result = eval(document.getElementById("result").value);
	document.getElementById("result").value = result;
}
