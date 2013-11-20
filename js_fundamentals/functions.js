// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

var fortuneTeller = function(num_kids, partner, place, job) {
    console.log("You will be a " + job + " in " + place + ", and married to " + partner + " with " + num_kids + " kids.");
};
fortuneTeller(23, "Leto II", "Arakis", "God Emperor");
You will be a God Emperor in Arakis, and married to Leto II with 23 kids.

fortuneTeller(20000, "The Deathstar", "Space", "Darth Vader");
You will be a Darth Vader in Space, and married to The Deathstar with 20000 kids.

fortuneTeller(1, "Golf", "The Void", "Aleister Crowley");
You will be a Aleister Crowley in The Void, and married to Golf with 1 kids.

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var calculateAge = function(birth_year) {
    now = new Date();
    current_year = now.getFullYear();
    age1 = current_year - birth_year;
    age2 = age1 - 1;
    console.log("You are either " + age1 + " or " + age2);
};

calculateAge(1984);
You are either 29 or 28

calculateAge(1967);
You are either 46 or 45

calculateAge(1875);
You are either 138 or 137


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

var calculateSupply = function(age, amount_per_day) {
  max_age = 80;
  total_consumption = ((max_age - age) * amount_per_day).toFixed();
  console.log("You will need " + total_consumption + " to last you to the ripe old age of " + max_age);
}
calculateSupply(2, 20);
You will need 1560 to last you to the ripe old age of 80

calculateSupply(2, 2);
You will need 156 to last you to the ripe old age of 80

calculateSupply(29, 2);
You will need 102 to last you to the ripe old age of 80

calculateSupply(29.9, 2.43);
You will need 122 to last you to the ripe old age of 80

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

pi
3.14159265359

var calcCircumferance = function(radius) {
  circumference = (radius * 2) * pi;
  console.log("The circumference is " + circumference);
}

calcCircumferance(5);
The circumference is 31.4159265359

calcCircumferance(20);
The circumference is 125.6637061436

calcCircumferance(4);
The circumference is 25.13274122872

var calcArea = function(radius) {
  area = pi * (radius * radius);
  console.log("The area is " + area);
};

calcArea(20);
The area is 1256.637061436

calcArea(4);
The area is 50.26548245744

calcArea(1);
The area is 3.14159265359

calcArea(.1);
The area is 0.03141592653590001

calcArea(133/244);
The area is 0.9334122623178163

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celciusToFahrenheit = function(c_temp) {
  f_temp = ((c_temp * 9) / 5) + 32;
  console.log(c_temp + "°C is " + f_temp + "°F");
};

celciusToFahrenheit(25);
25°C is 77°F VM8364:4

celciusToFahrenheit(-10);
-10°C is 14°F VM8364:4

var fahrenheitToCelcius = function(f_temp) {
  c_temp = ((f_temp - 32) * 5) / 9
  console.log(f_temp + "°F is " + c_temp + "°C");
}

fahrenheitToCelcius(98);
98°F is 36.666666666666664°C

fahrenheitToCelcius(74);
74°F is 23.333333333333332°C

fahrenheitToCelcius(70);
70°F is 21.11111111111111°C


