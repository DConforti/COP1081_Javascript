for (let i=0; i<=10; i++) {
	if ((i%2) == 1) {
		alert("Count " + i + " is odd.");
	} else {
		alert("Count " + i + " is even.");
	}
}


let i = 0;
let myNum = prompt("Please enter a number between 5 and 20.");
do {
	i++
	alert("This is loop " + i + ".");
} while (i != myNum);


const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"]
let text = "";
subjects.forEach(displayArray);

function displayArray(value, index, array) {
	if (index == (array.length - 1)) {
		text += value;
	} else {
		text += value + ", ";
	}
}

document.getElementById("subjects").innerHTML = text;