var guessInput = document.getElementById("guessInput");
var guessButton = document.getElementById("guessButton");
var playAgainButton = document.getElementById("playAgain");
var counter = 4;

function guessNumber(){
    var randomNumber = Math.ceil(Math.random()*10);
    var userMessage = document.getElementById("userMessage");
    if(guessInput.value == randomNumber){
        userMessage.innerHTML = `${guessInput.value} was the correct number YOY WIN`;
        userMessage.style.color = "green";
    }
    else{
        counter--;
        userMessage.innerHTML = `${guessInput.value} is wrong .You have ${counter} guesses left . try again!`;
        userMessage.style.color = "red";
        
    }
    clearInput();
    if(counter == 0){
        userMessage.innerHTML = `Game over .You lose ! The Correct Number Was ${randomNumber}`;
        userMessage.style.color = "red";
        playAgainButton.style.display = "block";
        guessButton.style.display = "none";
    }
}

function clearInput(){
    guessInput.value = "";
}

function playAgain(){
    counter = 4;
    playAgainButton.style.display = "none";
    guessButton.style.display = "block";
    userMessage.innerHTML = ``;

}