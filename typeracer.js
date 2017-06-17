// WHEN USER CLICKS ON TAB
function openTab(evt, tab_name) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Hide all tabs
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }

  // Make all tabs inactive
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace(" active", "");

  }

  // Show current tab
  document.getElementById(tab_name).style.display = "block";
  evt.currentTarget.className += " active";
}

// TIMES USER
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
  var userInput = document.getElementById("user-input")
  userInput.disabled = false;
  userInput.value = "";
  document.getElementById("stats").classList.toggle("show");
  document.getElementById("progress-bar").style.width = "0.5%";
  timer();
}

// WHILE GAME IS RUNNING //
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
      else correctInput(userInput, i);
    }

    if (str === userInput.value){
      userInput.disabled = true;
    }

}

// CHECK IF USER INPUT IS CORRECT/INCORRECT
function incorrectInput(userInput) {
  var prog = document.getElementById("progress-bar");
  prog.style.backgroundColor = "red";

  userInput.style.backgroundColor = "red";
  userInput.style.color = "black";
}

function correctInput(userInput, index) {
  var prog = document.getElementById("progress-bar");
  var progPercent = (index + 1) * 2.3;

  prog.style.backgroundColor = "#4eb288";
  prog.style.width = progPercent + "%";

  userInput.style.color = "#469976";
  userInput.style.backgroundColor = "white";
}

// DISPLAY END OF GAME STATS
function displayStats(time){
  var popup = document.getElementById("stats");
  var wpmStat = document.getElementById("wpm");
  var timeStat = document.getElementById("time");
  var title = document.getElementById("done");
  var wpm = 8 / time * 60;

  title.innerHTML = "good job!";
  wpmStat.innerHTML = "WPM: " + wpm.toPrecision(3);
  timeStat.innerHTML = "Time: " + time + "s";

  popup.classList.toggle("show");
}
