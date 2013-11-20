// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

top_choices = ["Dune", "Valis", "Diamond Age", "Atlantean Secrets", "Divine Invasion"]

for (var i = 0; i < top_choices.length; i++) {
  if (i+1 == 1) {
    var choice = "1st";
  } else if (i+1 == 2) {
    var choice = "2nd";
  }else if (i+1 == 3) {
    var choice = "3rd";
  } else if (i+1 == 4) {
    var choice = "4th";
  } else {
    var choice = (i+1).toString() + "th";
  }
  console.log("My " + choice + " favorite book is " + top_choices[i] + ".");
};

My 1st favorite book is Dune.
My 2nd favorite book is Valis.
My 3rd favorite book is Diamond Age.
My 4th favorite book is Atlantean Secrets.
My 5th favorite book is Divine Invasion.

