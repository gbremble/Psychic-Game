// Creates an array that lists out all letters
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// declaring global variables
var gamesWon = 0;
var gamesLost = 0;
//except for max guesses, which is a constant
let maxGuesses = 5;
var guessHistory = [];
// at the start, you'll be allowed the max number of guesses
var currentGuesses = maxGuesses;

// set up the game
gameReset();

// run whenever the user presses a key
document.onkeyup = function (event) {
// determine which key was pressed
var userGuess = event.key.toLowerCase();
// for verifying that the game works
console.log("User guess is: " + userGuess);
// add guesses to the array
guessHistory.push(userGuess);

// logic
if (userGuess === chosenLetter) {
    gamesWon++;
    gameReset();
} else {
    currentGuesses--;
}

if (currentGuesses === 0) {
    gamesLost++;
    gameReset();
}

// this will update the HTML
var html =
    "<p>Wins: " + gamesWon + "</p>" +
    "<p>Losses: " + gamesLost + "</p>" +
    "<p>Guesses Remaining: " + currentGuesses + "</p>" +
    "<p>Letters you&rsquo;ve guessed: " + guessHistory + "</p>";

// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;
};

function gameReset() {
chosenLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("Current winning letter: " + chosenLetter);
currentGuesses = maxGuesses;
guessHistory = [];
};