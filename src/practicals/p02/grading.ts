// Write your code below

let score :number|string;
console.log ("what your score :")
const args = process.argv;
score = Number(args[2]);

if (typeof score === "number"){
    if (score >= 80||score <=100) console.log ("A");
else if (score >= 70||score <= 79) console.log ("A");
else if (score >= 60||score <= 69) console.log ("A");
else if (score >= 50||score <= 59) console.log ("A");
else console.log("F")  ;
}else if (score<0||typeof score === "string")
    console.log("Invalid input");


