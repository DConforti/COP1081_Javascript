let myDog = {name: "Atticus", breed: "Welsh Corgi", tvProgram: "Infinity Train", notes: "King of Corginia.", mySound: "I sound threatening but regal"};
alert("Hello, my name is " + myDog.name + ", when I bark " + myDog.mySound + ". I starred in the tv show " + myDog.tvProgram + ". My character was a " + myDog.breed + ". I was " + myDog.notes);

var myDogConst = new Object();
myDogConst.name = "Atticus";
myDogConst.breed = "Welsh Corgi";
myDogConst.tvProgram = "Infinity Train";
myDogConst.notes = "King of Corginia";
myDogConst.mySound = "I sound threatening but regal";
myDogConst.canTalk = true;
myDogConst.myGreeting = function(){
	let message;
	if(this.canTalk) {
		message = "Hello, my name is " + this.name + ", when I bark " + this.mySound + ". I starred in the tv show " + this.tvProgram + ". My character was a " + this.breed + ". I was " + this.notes + "I can talk!";
	} else {
		message = "Hello, my name is " + this.name + ", when I bark " + this.mySound + ". I starred in the tv show " + this.tvProgram + ". My character was a " + this.breed + ". I was " + this.notes + "I cannot talk.";
	}
	return message;
}

alert(myDogConst.myGreeting());


function dog(name, breed, tvProgram, notes, mySound, canTalk) {
	this.name = name;
	this.breed = breed;
	this.tvProgram = tvProgram;
	this.notes = notes;
	this.mySound = mySound;
	this.canTalk = canTalk;
	this.myGreeting = function(){
		let message;
		if(this.canTalk) {
			message = "Hello, my name is " + this.name + ", when I bark " + this.mySound + ". I starred in the tv show " + this.tvProgram + ". My character was a " + this.breed + ". I was " + this.notes + "I can talk!";
		} else {
			message = "Hello, my name is " + this.name + ", when I bark " + this.mySound + ". I starred in the tv show " + this.tvProgram + ". My character was a " + this.breed + ". I was " + this.notes + "I cannot talk.";
		}
		return message;
	}
}

var cosmo = new dog("Cosmo", "Golden Retriever", "Guardians of the Galaxy", "a telepathic Soviet dog who is the security chief of the space station Knowhere and a member of the Guardians.", "I sound excited", true);
var diogee = new dog("Diogee", "Generic Breed", "Milo Murphy's Law", "Milo's dog.", "I sound happy", false);

for(let i in cosmo) {
	alert(i + ": " + cosmo[i]);
}

for(let i in diogee) {
	alert(i + ": " + diogee[i]);
}

let chosenDog = prompt("Please choose a dog: ");

if(chosenDog == "cosmo") {
	document.getElementById("output").innerText = cosmo.myGreeting();
} else if(chosenDog == "diogee") {
	document.getElementById("output").innerText = diogee.myGreeting();
} else {
	alert("This dog does not exist");
}