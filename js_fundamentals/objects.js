// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var favoriteRecipe = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"],
  list: function() {
    console.log(this.title);
    console.log("Serves: " + this.servings);
    console.log("ingredients:");
    for (i = 0; i <= this.ingredients.length; i++){
      console.log(this.ingredients[i]);
    }
  }
};

favoriteRecipe.list();
Mole
Serves: 2
ingredients
cinnamon
cumin
cocoa 

// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

function Book(title, author, alreadyRead) {
  this.title = title;
  this.author = author;
  this.alreadyRead = alreadyRead;
}

var valis = new Book("Valis", "Philip K Dick", true);
var the_magus = new Book("The Magus", "John Fowles", true);
var snow_crash = new Book("Snow Crash", "Neil Stephenson", false);

var library = {
  books: [],
  addBook: function(book) {
    this.books.push(book);
  },
  list: function(){
    for (i = 0; i < this.books.length; i++) {
      book = this.books[i];
      phrase = new String(book.title + " by " + book.author);
      console.log(phrase.toString());
      if (book.alreadyRead == true ) {
        console.log("You already read " + phrase);
      } else {
        console.log("You haven't yet read " + phrase);
      }
    }
  }
}

library.addBook(valis);
library.addBook(the_magus);
library.addBook(snow_crash);

library.list();

Valis by Philip K Dick
You already read Valis by Philip K Dick
The Magus by John Fowles
You already read The Magus by John Fowles
Snow Crash by Neil Stephenson
You havent yet read Snow Crash by Neil Stephenson 

// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var movie = {
  title: "The Matrix",
  duration: 120,
  stars: ["Keanu Reeves", "Laurence Fishbourne"],
  list: function(){
    console.log(this.title + " lasts for " + this.duration + " minutes. Stars: " + this.stars.join(", ") + ".");
  }
}

movie.list();

The Matrix lasts for 120 minutes. Stars: Keanu Reeves, Laurence Fishbourne.


