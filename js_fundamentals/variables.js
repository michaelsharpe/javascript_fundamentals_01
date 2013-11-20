// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var num_kids = 23;
var partner = "Leto II";
var place = "Arakis";
var job = "God emperor";
console.log("You will be " + job + " in" + place + ", and married to " + partner + " with" + num_kids + " kids.");
You will be God emperor inArakis, and married to Leto II with23 kids.
console.log("You will be " + job + " in " + place + ", and married to " + partner + " with " + num_kids + " kids.");
You will be God emperor in Arakis, and married to Leto II with 23 kids.

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var current_year = 2013;
var birth_year = 1984;
var age1 = 2013-1984;
age1
29
age2 = age1 - 1;
28
console.log("They are either " + age1 + " or " + age2);
They are either 29 or 28

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var age = 29;
max_age = 111;
111
cost_per_day = 1.56;
1.56
cost_per_day = 2.50;
2.5
amount_per_day = 2;
2
amoun
ReferenceError: amoun is not defined
var amount_per_day = 2;
total_coffee = (max_age - age) * amount_per_day;
164
total_cost = total_coffee * cost_per_day
410
console.log("You will need " + total_coffee + " coffees to last you to the ripe old age of " + max_age + ", and it will cost you $" + total_cost);
You will need 164 coffees to last you to the ripe old age of 111, and it will cost you $410

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 22;
var pi = 3.14159265359
var circumferance = pi * (radius + radius)
console.log("The circumferance is " + circumferance);
The circumferance is 138.23007675796
var area = pi * (radius * radius)
console.log("The area is " + area);
The area is 1520.53084433756 

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

c_temp = 45;
45
var c_temp = 45;
var fahrenheit = ((c_temp * 9) / 5) + 32
console.log(c_temp + "° is " + fahrenheit + "°");
45° is 113°
console.log(c_temp + "°C is " + fahrenheit + "°F");
45°C is 113°F
f_temp = 98;
98
var f_temp = 98;
celcius = ((f_temp - 32) * 5) / 9; 
36.666666666666664
console.log(f_temp + "°F is " + celcius + "°C");
98°F is 36.666666666666664°C


