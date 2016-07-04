// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(jobTitle, place, partnerName, kids) {
  var fortune = "You will be a " + jobTitle + " in " + place + ", and married to " + partnerName + " with " + kids;
  return console.log(fortune)
}

tellFortune("Software Engineer", "SF Bay Area", "Esra", 2)
tellFortune("Web Developer", "Toronto", "John", 4)
tellFortune("Web Designer", "Seattle", "Sarah", 10)


// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(currentYear, birthYear) {
 var calc = currentYear - birthYear;
 var calc2 = calc + 1
 var age = "You are either " + calc + " or " + calc2;
 return console.log(age)
}

calculateAge(new Date().getFullYear(), 1989)
calculateAge(new Date().getFullYear(), 1977)
calculateAge(new Date().getFullYear(), 1999)

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amountPerDay) {
  var maxAge = 100;
  var calc = (amountPerDay * 365) * (maxAge - age);
  console.log("You will need " + calc + " to last you until the ripe old age of " + maxAge);
};

calculateSupply(26, 5);

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

function calcCircumfrence(radius) {
  var circumference = 2 * 3.14 * radius;
  console.log("The circumference is " + circumference)
};

calcCircumfrence(5);

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

  function calcArea(radius) {
    var area = 3.14 * (radius * radius);
    console.log("The area is " + area)
  }

  calcArea(5)

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".





// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

function celsiusToFahrenheit(celsius) {
  var convertToF = (celsius - 32) * 5/9
  console.log(celsius + " °C is " + convertToF + " °F");
}

celsiusToFahrenheit(100);
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function fahrenheitToCelsius(fahrenheit) {
  var convertToC = (fahrenheit * 9/5) + 32
  console.log(fahrenheit + " °F is " + convertToC + " °C");
}

celsiusToFahrenheit(40);
