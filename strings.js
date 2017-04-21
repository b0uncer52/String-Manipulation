function reversal(test) {
	var newString = "";
	for (var i = test.length - 1; i >= 0; i--) {
		newString += test.slice(i, i + 1);
	}
	return newString;
}

function alphabits(test) {
	var newString = [];
	for (var i = 0; i < test.length; i++) {
		newString.push(test.charAt(i));
	}
	test = newString.sort().toString();
	return test.replace(/,/g, "");
}

function palindrome(test) {
	if(reversal(test).toLowerCase() == test.toLowerCase()){ return " is a palindrome"}
	else {return " is not a palindrome";}
}

function stringTest(event){
	var testString = document.getElementById("input").value;
	var re = /[^A-Z]/gi;
	if(re.test(testString)) {
		alert("Enter letters only.");
	}
	else {
		outString += "<br>Reversed: " + reversal(testString);
		outString += "<br>Alphabetized: " + alphabits(testString);
		outString += "<br>" + testString + palindrome(testString);
		output.innerHTML = outString;
	}
}
var outString = "";
var output = document.getElementById("output");
var button = document.getElementById("btn");
button.addEventListener("click", stringTest);

