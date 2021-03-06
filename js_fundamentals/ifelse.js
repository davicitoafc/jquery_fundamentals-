// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:

  function greaterNum(num1, num2) {
    if (num1 > num2) {
      return console.log("The greater of " + num1 + " and " + num2 + " is " + num1);
    } else {
      return console.log("The greater of " + num2 + " and " + num1 + " is " + num2);
    }
  }

  greaterNum(10,11);
  greaterNum(6,5000)


// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

// EXERCISE: The World Translator

// Write a function named helloWorld that:

function helloWorld(code) {
  if (code == "en") {
     console.log("Hello World");
  } else if (code == "es"){
     console.log("Hola Mundo");
  } else if (code == "de"){
     console.log("Hallo Welt");
  }
}

helloWorld("en")
helloWorld("de")
helloWorld("es")

// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:


function assignGrade(score) {
  if (score >= 90) {
    console.log("A")
} else if (score >= 80) {
    console.log("B")
} else if (score >= 70) {
    console.log("C")
} else if (score >= 60) {
    console.log("D")
} else {
    console.log("F")
 }
};

var b = prompt("What is your grade: ")
assignGrade(b);

// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// EXERCISE: The Pluralizer

// Write a function named pluralize that:

function pluralize(noun, number) {
  
}

// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
