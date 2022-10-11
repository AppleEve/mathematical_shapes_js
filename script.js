//2a. Diagonal of a square

function giveDiagonal(sL){
    return (Math.sqrt(2)*sL);
}

//2b. Area of a triangle

function giveArea(sideA, sideB, sideC){
    let s = (sideA + sideB + sideC) /2;
    return (Math.sqrt(s*((s-sideA)*(s-sideB)*(s-sideC))));
}

//2c.  Circumference and surface area of a circle 

function giveCircumference(radius){
    let diameter = radius * 2;
    return (diameter * Math.PI);
}

function giveSurface(radius){
    return ((radius**2)*Math.PI);
}

console.log(giveDiagonal(9));
console.log(giveArea(5,6,7));
console.log(giveCircumference(4));
console.log(giveSurface(4));

//3a. 

let integerA = prompt("Pick a number, any number");
let integerB = prompt("And another one, please");

if (integerA > integerB){
    alert("The bigger number is: " + integerA);
} 
else {
    alert("The bigger number is:" + integerB);
}

//3b.

let integerC = prompt("Pick yet another number");

if (integerC% 2 == 0){
    alert("The number is even!")
}
else{
    alert("The number is not even!")
}