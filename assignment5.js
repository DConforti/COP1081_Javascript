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
	alert("Hello, my name is " + myDogConst.name + ", when I bark " + myDogConst.mySound + ". I starred in the tv show " + myDogConst.tvProgram + ". My character was a " + myDogConst.breed + ". I was " + myDogConst.notes);
}

myDogConst.myGreeting();