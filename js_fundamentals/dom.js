// Exercises: The DOM

// EXERCISE: The Logo Hijack

// No homepage is safe from the logo bandit!

// Open up www.google.com in Chrome or Firefox, and open up the console.
// Find the Google logo and store it in a variable.
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead.

var logo = document.getElementById("hplogo");
logo.style.background = "url(http://l.yimg.com/rz/d/yahoo_frontpage_en-CA_s_f_p_101x50_frontpage.png) no-repeat;"
var button = document.getElementById("gbqfba");
button.firstElementChild.innerText = "Yahoo!";


// EXERCISE: About Me

// Cuz every webpage needs an "About" section.

// Start with this HTML and save it as "aboutme.html":
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8"/>
//   <title>About Me</title>
// </head>
// <body>
//   <h1>About Me</h1>
  
//   <ul>
//     <li>Nickname: <span id="nickname"></span>
//     <li>Favorites:  <span id="favorites"></span>
//     <li>Hometown: <span id="hometown"></span>
//    </ul>
  
//  </body>
// </html>
  
// Add a script tag to the bottom.
// Change the body style so it has a font-family of "Arial, sans-serif".
// Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

document.body.setAttribute("Style", "font-family: Arial, sans-serif");

var items = document.getElementsByTagName("li");
items[0].innerText = "Heru";
items[1].innerText = "Hobbies!";
items[2].innerText = "Home planet";

var head = document.getElementsByTagName("head")[0];
var style = document.createElement('style');
style.type = "text/css";
style.innerText = '.listitem { color: red }; ';

head.appendChild(style);

for (i = 0; i < items.length; i++) {
  items[i].setAttribute("class", ".listitem");
}

var img = new Image;
img.src = "http://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/California_89.svg/385px-California_89.svg.png";
document.body.appendChild(img);

// EXERCISE: The Book List

// Keep track of which books you read and which books you want to read!

// Create a webpage with an h1 of "My Book List".
// Add a script tag to the bottom of the page, where all your JS will go.
// Copy the array of books from the previous exercise.
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.



