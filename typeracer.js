// INITIALIZE GAME
function start() {
  var userInput = document.getElementById("user-input");
  var start = document.getElementById("start");
  var countdown = document.getElementById("countdown");
  countdown.style.display = "block";
  userInput.disabled = false;
  userInput.focus();
  start.disabled = true;
  count_down();
}

// GAME COUNTDOWN
// counts down 5 seconds - then game begins
function count_down() {
  var id = setInterval(frame, 1000);
  var countdown = document.getElementById("countdown-clock");
  var clock = 5;

  function frame(){
    if (clock === -1){
      // stop showing countdown
      document.getElementById("countdown").style.display = "none";
      clearInterval(id);
      timer();
    }
    else if (clock === 0){
      countdown.innerHTML = "go!";
      clock--;
    }
    else {
      // decrement counter
      countdown.innerHTML = clock;
      clock--;
    }
  }
}

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

/******** FOR CHOOSING THE PASSAGE *****/
function setPassage(evt, passage_num){
  var passage = document.getElementById("game");
  var str1 = "The quick brown fox jumps over the lazy dog!";
  var str2 = "Happiness can be found, even in the darkest of times, if one remembers to turn on the light.";
  var str3 = "Everybody is a Genius. But if you Judge a Fish by its Ability to Climb a Tree, It will live Its whole Life Believing that It Is Stupid.";
  var columns = document.getElementsByClassName("p-column");

  if (passage_num === 1){
    passage.innerHTML = str1;
    document.getElementById("playone").classList.add("show");
    document.getElementById("playtwo").classList.remove("show");
    document.getElementById("playthree").classList.remove("show");
  }
  else if (passage_num === 2){
    passage.innerHTML = str2;
    document.getElementById("playone").classList.remove("show");
    document.getElementById("playtwo").classList.add("show");
    document.getElementById("playthree").classList.remove("show");
  }
  else if (passage_num === 3){
    passage.innerHTML = str3;
    document.getElementById("playone").classList.remove("show");
    document.getElementById("playtwo").classList.remove("show");
    document.getElementById("playthree").classList.add("show");
  }

  for (var i = 0; i < columns.length;i++){
    columns[i].className = columns[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}

function play() {
  var passtab = document.getElementById("pass-tab");

  // Show home tab screen
  document.getElementById("passages").style.display = "none";
  document.getElementById("home").style.display = "block";

  // Disable passages tab
  passtab.className = passtab.className.replace(" active", "");

  // Highlight home tab
  document.getElementById("home-tab").className += " active";

  // start game
  enable();
  document.getElementById("stats").classList.remove("show");
}

// TIME USER
function timer(){
  var id = setInterval(frame, 10);
  var userInput = document.getElementById("user-input");
  var start = document.getElementById("start");
  var str = document.getElementById("game").innerHTML;
  var arr = str.split(" ");
  var time = 0;

  function frame() {
    if (str === userInput.value){
      displayStats(time, arr.length);
      start.style.display = "none";
      clearInterval(id);
    }
    else{
      time += 0.01;
    }
  }
}

function enable() {
  var userInput = document.getElementById("user-input")
  var countdown = document.getElementById("countdown");
  userInput.disabled = false;
  userInput.value = "";
  userInput.focus();
  countdown.style.display = "block";
  document.getElementById("countdown-clock").innerHTML = "loading..."
  document.getElementById("stats").classList.remove("show");
  document.getElementById("progress-bar").style.width = "0.5%";
  count_down();
}

// WHILE GAME IS RUNNING //
function onKeyPress() {
    // Create array containing passage
    var str = document.getElementById("game").innerHTML;
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
      else correctInput(userInput, i, arr.length);
    }

    if (str === userInput.value){
      userInput.disabled = true;
    }

}

// CHECK IF USER INPUT IS CORRECT/INCORRECT
function incorrectInput(userInput) {
  var prog = document.getElementById("progress-bar");
  prog.style.backgroundColor = "#e56060";

  userInput.style.backgroundColor = "#e56060";
  userInput.style.color = "black";
}

function correctInput(userInput, index, arrLength) {
  var prog = document.getElementById("progress-bar");
  var progPercent = (index + 1) * 100/arrLength;

  prog.style.backgroundColor = "#4eb288";
  prog.style.width = progPercent + "%";

  userInput.style.color = "#469976";
  userInput.style.backgroundColor = "white";
}

// DISPLAY END OF GAME STATS
function displayStats(time, word_count){
  var popup = document.getElementById("stats");
  var wpmStat = document.getElementById("wpm");
  var timeStat = document.getElementById("time");
  var title = document.getElementById("done");
  var userInput = document.getElementById("user-input");
  var wpm = word_count / time * 60;
  var one, two, three, four, five;

  one = document.getElementById("l-one");
  two = document.getElementById("l-two");
  three = document.getElementById("l-three");
  four = document.getElementById("l-four");
  five = document.getElementById("l-five");

  title.innerHTML = "good job!";
  wpmStat.innerHTML = "WPM: " + wpm.toPrecision(3);
  timeStat.innerHTML = "Time: " + time.toPrecision(3) + "s";

  // Update last scores column in profile
  if (one.innerHTML === ""){
    one.innerHTML = "1. " + wpm.toPrecision(3)+ " wpm";
  }

  else if (two.innerHTML === ""){
    two.innerHTML = "2. " + wpm.toPrecision(3)+ " wpm";
  }

  else if (three.innerHTML === ""){
    three.innerHTML = "3. " + wpm.toPrecision(3)+ " wpm";
  }

  else if (four.innerHTML === ""){
    four.innerHTML = "4. " + wpm.toPrecision(3)+ " wpm";
  }

  else if (five.innerHTML === ""){

    five.innerHTML = "5. " + wpm.toPrecision(3)+ " wpm";
    getAvg(one, two, three, four, five);
  }

  else {
    one.innerHTML = "1. \t" + wpm.toPrecision(3)+ " wpm";
    resetScores();
  }

  popup.classList.add("show");
}

function resetScores() {
  var two = document.getElementById("l-two");
  var three = document.getElementById("l-three");
  var four = document.getElementById("l-four");
  var five = document.getElementById("l-five");
  document.getElementById("avg").innerHTML = "";

  two.innerHTML = "";
  three.innerHTML = "";
  four.innerHTML = "";
  five.innerHTML = "";
}

function getAvg(one, two, three, four, five){
  one = one.innerHTML.split(" ");
  two = two.innerHTML.split(" ");
  three = three.innerHTML.split(" ");
  four = four.innerHTML.split(" ");
  five = five.innerHTML.split(" ");

  one = parseFloat(one[1]);
  two = parseFloat(two[1]);
  three = parseFloat(three[1]);
  four = parseFloat(four[1]);
  five = parseFloat(five[1]);

  var avg = one + two + three + four + five;
  avg = avg / 5;
  document.getElementById("avg").innerHTML = "Avg: " + avg.toPrecision(3);


}
