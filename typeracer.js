function onKeyPress() {
    // Create array containing passage
    var str = "The quick brown fox jumps over the lazy dog!";
    var arr = str.split("");

    // Create array of user input text
    var userInput = document.getElementById("user-input");
    var userText = userInput.value.split("");

    // Check if user input matches passage
    for (var i = 0; i < userText.length; i++) {
      if (userText[i] !== str[i]){
        incorrectInput(userInput);
        return;
      }
      else correctInput(userInput);
    }

}

function incorrectInput(userInput) {
  userInput.style.backgroundColor = "red";
  userInput.style.color = "black";
}

function correctInput(userInput) {
  userInput.style.color = "green";
  userInput.style.backgroundColor = "white";
}
