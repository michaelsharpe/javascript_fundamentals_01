// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

var greaterNum = function(num1, num2){
  if (num1 > num2){
     return num1;
  }else{
    return num2;
  }
};

greaterNum(5, 10);
10
greaterNum(10, 5);
10

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

var helloWorld = function(language) {
  if (language == "es"){
    console.log("Hola mundo");
  } else if (language == "lv") {
    console.log("sveiki pasaulē");
  } else {
    console.log("Hello world");
  }
};

helloWorld("lv");
sveiki pasaulē

helloWorld("es");
Hola mundo

helloWorld("en");
Hello world

helloWorld(7);
Hello world


// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

var assignGrade = function(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score >= 50) {
    return "E";
  } else {
    return "F";
  }
};

assignGrade(60);
"D"

assignGrade(95);
"A"

assignGrade(40);
"F"

assignGrade("cat");
"F"

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

var pluralize = function(number, noun){
  if (number == 1) {
    return (number + " " + noun)
  } else if (noun == "octopus") {
    return (number + " octopi");
  } else if (noun == "moose") {
    return (number + " meeses");
  } else if (noun == "platypus") {
    return (number + " platypi");
  } else {
    return (number + " " + noun + "s");
  }
};

pluralize(1, "moose")
"1 moose"

pluralize(3, "moose")
"3 meeses"

pluralize(3, "platypus")
"3 platypi"

pluralize(3, "octypus")
"3 octypuss"

pluralize(3, "octopus")
"3 octopi"
