//Is the Number Less than or Equal to Zero?

function lessThanOrEqualToZero(num) {
    if(num <= 0) {
        console.log("true");
    } else{
        console.log("false");
    }
}

 lessThanOrEqualToZero(-2);


// Sum of Polygon Angles


function polygon(n){
    let a = (n - 2) * 180;
    return a;
}

polygon(7);

// Basketball Points

function pointers(twoPointers, threePointers) {
    let basketball = (twoPointers * 2) + (threePointers * 3);
    console.log(basketball);
}
pointers(5, 7);


// Basic Variable Assignment

function nameString(name){
	var b = " Edabit"
	var result = name.concat(b);
  	console.log(result);
}
nameString("Ahmed");

// Less Than 100?

function lessThan100(a, b){
    let num = a + b <= 100 ? "true": "false";
    console.log(num);
}

lessThan100(25, 20);


// Buggy Code 

function printArray(number) {
    var newArray = [1, 2, 3];
  
    for(var i = 1; i <= number; i++) {
        newArray.push(i)
    }
  console.log(newArray)
   
  }
  
  printArray(1);
 

// swapping  

function swap(a, b){
  let temp = a;
  a = b;
  b = temp;

  console.log([a, b]);
}

swap(100, 200);


// The Farm Problem

function animals(chicken, cow, pigs){
   let total = (chicken * 2) + (cow * 4) + (pigs * 4);
   console.log(total)
}

animals(10, 20, 2);

// && operator
function and(a, b){
  let trueOrFalse = (a && b);
  console.log(trueOrFalse);
}
and(true, true)

// are the number equal?

function number(num1, num2) {
  if(num1 === num2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

number(4, 4);

// Football Points

function footballPoints(wins, draws, losses) {
  let game = (wins * 3 ) + (draws * 1) + (losses * 0);
  console.log(game);
}
footballPoints(30, 6, 4);


// Convert Hours and Minutes into Seconds

function convert(hr, min){
  let time = (hr * 3600) + (min * 60);
  console.log("second", time);
}

convert(10, 30);


// Equality Check 

let checkEquality = 1;
let Equality = 1;

if(checkEquality == Equality){
  console.log("true")
} else {
  console.log("false");
}


// Profitable Gamble
function ProfitableGamble(prob, prize, pay) {
  if(prob * prize > pay) {
    console.log(true);
  } else {
    console.log(false)
  }
}

ProfitableGamble(0.2, 50, 9);



// Boolean to String Conversion

function boolean(flag) {
  console.log( flag ? "true" : "false");
}
boolean(true)


//Frames Per Second

const frames = (minute, fps) => {
  let frame = 60 * minute * fps;
  console.log(frame)
}

frames(10, 1);


// Miserable Parody of a Calculator 
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.

function calculator() {
  let x = "10 * 2";
  console.log(eval(x));
}

calculator()