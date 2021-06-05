// Iteration 1: Names and Input


let hacker1 = "Jonaas";
console.log("The driver's name is " +  hacker1);

let hacker2 = "Sophie";
console.log("The navigator's name is " +  hacker2);

// Iteration 2: conditionals

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters");
}
else if (hacker2.length > hacker1.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length +" characters.");
}

else {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {

  console.log(hacker1[i]);
}

// I don't know how to do it and will check it again later