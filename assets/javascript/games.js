/* This is the script file for the Psychic Game */


// VARIABLES
// ==========================================================================
var chosenLetter = "";
var maxGuess = 10;
var guessCount = 10;
var lossCount = 0;
var winsCount = 0;


// FUNCTIONS
// ==========================================================================
// Randomly choose the letter to use
function chooseLetter() {
    var charSet = "abcdefghijklmnopqrstuvwxyz";

    for (var i=0; i < charSet.length; i++ ) {
        chosenLetter = charSet.charAt(Math.floor(Math.random() * charSet.length));
console.log(chosenLetter);
        return chosenLetter;
    }
}

function resetForNewGame() {
    guessCount = 10;
    usedLettersCount = 0;
    usedLetters = "";

    document.getElementById("winCount").innerHTML = `${winsCount} !`;
    document.getElementById("lossCount").innerHTML = `${lossCount} !`;
    document.getElementById("guessLeftCount").innerHTML = guessCount;
    document.getElementById("lettersAlreadyUsed").innerHTML = "";
}

function updateWins() {
    document.getElementById("winCount").innerHTML = `${winsCount} !`;
}

function updateLoses() {
    document.getElementById("lossCount").innerHTML = `${lossCount} !`;
}

function updateGuesses() {
    document.getElementById("guessLeftCount").innerHTML = guessCount;
}

function newGame() {
        chooseLetter();
        resetForNewGame();
        updateWins();
        updateLoses();
        return;
}

// MAIN CODE
// ==========================================================================
// Print the random letter to the console
console.log(chooseLetter());

document.onkeyup = function(event) {
    var inputLetter = String.fromCharCode(event.keyCode).toLowerCase();

    // Get the letters the users entered and write them to the
    // id=lettersAlreadyUsed
    var usedLetters = document.getElementById("lettersAlreadyUsed").innerHTML += `${inputLetter}, `;
    var usedLettersCount= usedLetters.replace(/[^A-Z]/gi, "").length;
console.log(`This is usedLettersCount: ${usedLettersCount}`);

//    Guesses left should be decremented each time thru
    if (usedLettersCount < maxGuess) {
        guessCount--;
        console.log(`This is guessCount: ${guessCount}`);
        updateGuesses();
    }

// If usedLettersCount is > maxGuess then alert loss and increment lossCount
    if (usedLettersCount >= maxGuess) {
        alert("You lost!");

        lossCount++;
        newGame();
    }

// If the user chooses the right letter, alert them and increment the winsCount
    if (chosenLetter === inputLetter) {
        alert("Letter matches!");

        winsCount++;
        newGame();
    }
}
