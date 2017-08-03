/* This is the script file for the Animal Hangman Game */
// Declare the variable for the array of animals
var animals = ["llama","elephant","rhinoceros","kangaroo","porpoise"];

function selectAnimal (animals) {

    // We need to randomize which value in the array is used
    var getAnimalWord = animals[Math.floor(Math.random() * animals.length)];
    // var hangmanWord = array[getAnimalWord];
    return getAnimalWord;
}

document.getElementById("currentWord").innerHTML = selectAnimal(getAnimalWord);

// Declare the variable for the letters already used
var lettersAlreadyUsed = [];

document.onkeyup = function(event) {
    //Declare a var for each letter entered
    var userGuess = event.key;
    document.getElementById("lettersAlreadyUsed").insertAdjacentHTML('beforeend', `${userGuess}, `);

}

// Creates blanks for each letter in the word
function blanksWord (getAnimalWord) {
    var result = "" ;





}
