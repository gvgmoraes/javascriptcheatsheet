
//Types of object: 
//string --> "hello"
//number --> 5
//array --> ["one",2,"three"]
//undefined --> undefined
//boolean --> true 

// and= &&
// or= ||
// === exactely the same so that 2 ===2
// ==of the same value so that 2=='two'
// != not equal to 
// !== not of the same value so that 2!=='two'
// < less than 
// <= less than or equal to
// > more than
// >= more than or equal to 


// 1a adding two variables

var x = 2;
var y = 3;

x+y;

// 1b adding two string variables 

var x = "Hello!";
var y = " How are you?"

x+y;

//2 multidimentional array 
var sports = [["swimming", "surfing"],["running", "cycling"]]

//console.log prints something to console
console.log (sports[0][1]) 

//alert pops up an alert 
alert("This is an alert")

//3 checking if variable is less than 10 
var lessThan= function(x,y){
	if (x<y){
		return alert([ x +" is less than "+ y]);
	} else{
		console.log ([x + " is greater than "+ y]);
	};
};

lessThan(5,10); // will give you an alert saying that 5 is less than 10
lessThan(11,10); // will print to console that 11 is greater than 10

// 5 check if string equals another string 

var stringCheck= function(x,y){ // specific to stirng variables
	if (typeof x === "string" && typeof y === "string"){

		if (x===y){
			console.log("These strings match");
		} else{
			console.log("These strings do not match");
		};
	} else { 
		console.log ("One or more of your inputs is not a stirng")
	};
};

//6 return message or name string 
function returnString (myMessage){
// without an alert -- function takes a string and returns string
	return (myMessage);
}

//7 function with no arguments but prints something to console 
function noArguments (){
	console.log ("Type something");
}

//Additional Problem with if loop 

function pickDoor (selectedDoor){
	if (selectedDoor === 1){
		return "You get nothing"
	} else if (selectedDoor === 2){
		return "You get $1"
	} else if (selectedDoor === 3){
		return "You get a house!!!"
	} else {
		return "Door " + selectedDoor + " is not an option"
	};
};

// using a for loop 
var friendList = ["Kim", "Kassim", "Chris", "Mandisa", "Rick", "Sam"]; 

for(var i =0; i<friendList.length; i++){
   console.log (friendList[i]+ " is my friend");
}

//using a while loop 
while (x<10){
	console.log('on number ' + x);
	x++;
}

 //using a while and if loop to perfect the beer bottle song 
var beerNum=99;
while (beerNum>0){
	if (beerNum>1){
		console.log (beerNum + " bottles of Beer on the wall, " + beerNum + " bottles of beer! Take one down, pass it around. " + (beerNum -=1)+ " bottles of beer on the wall!");
	} else {
		console.log (beerNum + " bottle of Beer on the wall, " + beerNum + " bottle of beer! Take it down, don't pass it around, " + (beerNum -=1)+ " bottles of beer on the wall!");
	};
};

