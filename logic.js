// Global Variabls
// =======================================
var wordOptions = ["radical", "awesome", "gnarly", "bogus", "chevynova", "sweet", "adorbs", "ttyl", "gadzooks", "fosheezy", "righton", "bodacious", "yomomma", "lamesauce", "weaksauce", "likeaboss", "righteous", "wanker", "bruv", "groovy"];
var selectWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccess = [];
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 0;

// Function (call upon when needed)
// =======================================

function startGame () {
    selectWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]; 
    lettersInWord = selectWord.split("");
    numBlanks = lettersInWord.length;

    // Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Populate blanks and successes
    for (var i=0; i<numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    // Change HTML to reflect conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winCount").innerHTML = winCount;
    document.getElementById("lossCount").innerHTML = lossCount;

    $("#wordToGuess").html(blanksAndSuccesses.join(" "));

    console.log(selectWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
// Where is letter in word
    var isLetterInWord = false;

    for (var i=0; i < numBlanks; i++) {
        if(selectWord[i] == letter) {
            isLetterInWord = true;
        }
    }
// where in letter is the word
    if(isLetterInWord) {
        for (var i=0; i<numBlanks; i++) {
            if(selectWord[i] == letter) {
            blanksAndSuccesses[i] = letter;

            }
        }
        console.log("yooooo", blanksAndSuccesses)
    }
// Letter wasn't found
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }

    console.log(blanksAndSuccesses);

}

function roundComplete() {
    console.log("win Count: " + winCount + " | loss count: " +lossCount + " | Guesses Left" + guessesLeft);
// Update HTML to reflect recent count stats
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

// Check it user won
    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
    winCount++;
    alert("You Won!");

    document.getElementById("winCount").innerHTML = winCount;

    startGame();

    }
// Check if user lost
    else if (guessesLeft == 0) {
        lossCount++;
        alert("You Loser!");

        document.getElementById("lossCount").innerHTML = lossCount;

        startGame();
    }

}

// Main Process
// =======================================

// Starts the code
startGame ();

// Register Key Clicks
document.onkeyup = function(event) {
    console.log(event.keyCode)
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(letterGuessed);
    roundComplete();


// Testing Debugging
    console.log(letterGuessed);
}
