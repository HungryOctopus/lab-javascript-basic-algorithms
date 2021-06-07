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

let hacker1UpperCase = hacker1.toUpperCase();

console.log(hacker1UpperCase);

for (let i = 0; i < hacker1.length; i++) {

  console.log(hacker1UpperCase[i]);
}

// I don't know how to do it and will check it again later

//Print all the characters of the navigator's name, in reverse order.

function reverseString(hacker1) {
  // Step 1. Use the split() method to return a new array
  let splitString = hacker1.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. Return the reversed string
  return joinArray; // "olleh"
}

reverseString(hacker1);

/* 3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

// Lexicographic order is contrary to alphabetical order!!

if (hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first.");
} else if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}