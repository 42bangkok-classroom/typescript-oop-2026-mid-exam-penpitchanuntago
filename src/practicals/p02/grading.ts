// Write your code below
const args = process.argv;
console.log (args[2]);
let score :number|string;
score = Number(args[2]);
if (typeof score === "number"){
    if (score >= 80||score <=100) console.log ("A");
else if (score >= 70||score <= 79) console.log ("A");
else if (score >= 60||score <= 69) console.log ("A");
else if (score >= 50||score <= 59) console.log ("A");
else console.log("F")  ;
}else 
    console.log("Invalid input");

