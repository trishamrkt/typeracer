function timer(){
  var id = setInterval(frame, 500);
  var userInput = document.getElementById("user-input");
  var str = "The quick brown fox jumps over the lazy dog!"
  var time = 0;

  function frame() {
    if (str === userInput.value){
      displayStats(time);
      clearInterval(id);
    }
    else
      time += 0.5;
  }
}

function enable() {
  document.getElementById("user-input").disabled = false;
}

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

    if (str === userInput.value){
      userInput.disabled = true;
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

function displayStats(time){
  var popup = document.getElementById("stats");
  var wpmStat = document.getElementById("wpm");
  var timeStat = document.getElementById("time");
  var title = document.getElementById("done");
  var wpm = 8 / time * 60;

  title.innerHTML = "good job!";
  wpmStat.innerHTML = "WPM: " + wpm;
  timeStat.innerHTML = "Time: " + time + "s";

  popup.classList.toggle("show");
}
