// INITIALIZE GAME
function start() {
  var userInput = document.getElementById("user-input");
  var start = document.getElementById("start");
  var countdown = document.getElementById("countdown");
  countdown.style.display = "block";
  start.disabled = true;
  count_down();
}

// EDIT SCREEN
function edit() {
  var editScreen = document.getElementById("edit");
  var username = document.getElementById("username");
  var picURL = document.getElementById("dp");
  username.value = "";
  picURL.value = "";
  editScreen.style.display = "block";
}

function exit_edit() {
  var editScreen = document.getElementById("edit");
  var username = document.getElementById("username").value;
  var picURL = document.getElementById("dp").value;

  if (username !== ""){
    document.getElementById("profile-name").innerHTML = username;
  }

  if (picURL !== ""){
    document.getElementById("sidebar-pic").src = picURL;
  }

  editScreen.style.display = "none";
}

// GAME COUNTDOWN
// counts down 5 seconds - then game begins
function count_down() {
  var id = setInterval(frame, 1000);
  var countdown = document.getElementById("countdown-clock");
  var clock = 5;
  var userInput = document.getElementById("user-input")

  function frame(){
    if (clock === -1){
      // stop showing countdown
      document.getElementById("countdown").style.display = "none";
      clearInterval(id);
      userInput.disabled = false;
      userInput.focus();
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
function setPassage(passage_num){
  var passage = document.getElementById("game");
  var str1 = "The quick brown fox jumps over the lazy dog!";
  var str2 = "Happiness can be found, even in the darkest of times, if one remembers to turn on the light.";
  var str3 = "Everybody is a Genius. But if you Judge a Fish by its Ability to Climb a Tree, It will live Its whole Life Believing that It Is Stupid.";
  var str4 = "I don't know half of you half as well as I should like; And I like less than half of you, half as well as you deserve!";
  var str5 = "A long time ago, in a galaxy far far away ... It is a period of civil war. Rebel spaceships, striking from a hidden base have won their first victory against the evil Galactic Empire.";
  var str6 = "\"Where are the people?\", resumed the Little Prince at last. \"It's a little lonely in the desert...\" \"It is lonely when you are among people, too,\" said the snake."
  var columns = document.getElementsByClassName("p-column");

  for (var i = 0; i < columns.length;i++){
    columns[i].className = columns[i].className.replace(" active", "");
  }

  if (passage_num === 1){
    passage.innerHTML = str1;
    document.getElementById("p-one").className += " active";
    document.getElementById("playone").classList.add("show");
    document.getElementById("playtwo").classList.remove("show");
    document.getElementById("playthree").classList.remove("show");
    document.getElementById("playfour").classList.remove("show");
    document.getElementById("playfive").classList.remove("show");
    document.getElementById("playsix").classList.remove("show");
  }
  else if (passage_num === 2){
    passage.innerHTML = str2;
    document.getElementById("p-two").className += " active";
    document.getElementById("playone").classList.remove("show");
    document.getElementById("playtwo").classList.add("show");
    document.getElementById("playthree").classList.remove("show");
    document.getElementById("playfour").classList.remove("show");
    document.getElementById("playfive").classList.remove("show");
    document.getElementById("playsix").classList.remove("show");
  }
  else if (passage_num === 3){
    passage.innerHTML = str3;
    document.getElementById("p-three").className += " active";
    document.getElementById("playone").classList.remove("show");
    document.getElementById("playtwo").classList.remove("show");
    document.getElementById("playthree").classList.add("show");
    document.getElementById("playfour").classList.remove("show");
    document.getElementById("playfive").classList.remove("show");
    document.getElementById("playsix").classList.remove("show");
  }
  else if (passage_num === 4) {
    passage.innerHTML = str4;
    document.getElementById("p-four").className += " active";
    document.getElementById("playone").classList.remove("show");
    document.getElementById("playtwo").classList.remove("show");
    document.getElementById("playthree").classList.remove("show");
    document.getElementById("playfour").classList.add("show");
    document.getElementById("playfive").classList.remove("show");
    document.getElementById("playsix").classList.remove("show");
  }

  else if (passage_num === 5) {
    passage.innerHTML = str5;
    document.getElementById("p-five").className += " active";
    document.getElementById("playone").classList.remove("show");
    document.getElementById("playtwo").classList.remove("show");
    document.getElementById("playthree").classList.remove("show");
    document.getElementById("playfour").classList.remove("show");
    document.getElementById("playfive").classList.add("show");
    document.getElementById("playsix").classList.remove("show");
  }

  else if (passage_num === 6) {
    passage.innerHTML = str6;
    document.getElementById("p-six").className += " active";
    document.getElementById("playone").classList.remove("show");
    document.getElementById("playtwo").classList.remove("show");
    document.getElementById("playthree").classList.remove("show");
    document.getElementById("playfour").classList.remove("show");
    document.getElementById("playfive").classList.remove("show");
    document.getElementById("playsix").classList.add("show");
  }
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
  var arr = str.split("");
  var time = 0;

  function frame() {
    if (str === userInput.value){
      displayStats(time, 1.0*arr.length/5);
      start.style.display = "none";
      clearInterval(id);
    }
    else{
      time += 0.01;
    }
  }
}

function refresh() {
  var num = Math.floor((Math.random() * 6) + 1);
  setPassage(num);
  enable();
}

function enable() {
  var userInput = document.getElementById("user-input")
  var countdown = document.getElementById("countdown");
  userInput.value = "";
  userInput.focus();
  countdown.style.display = "block";
  document.getElementById("countdown-clock").innerHTML = "loading..."
  document.getElementById("stats").classList.remove("show");
  document.getElementById("progress-bar").style.width = "0.5%";
  count_down();
}

// WHILE GAME IS RUNNING //
function onKeyPress(word_id) {
    // Create array containing passage
    var str = document.getElementById("game").innerHTML;

    // create array with the words in the passage
    var arr = str.split("");

    // Create array of user input text
    var userInput = document.getElementById("user-input");
    var userText = userInput.value.split("");

    // Check if user input matches passage
    for (var i = 0; i < userText.length; i++) {
      if (userText[i] !== arr[i]){
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

  popup.classList.add("show");
  updateScores(wpm);
  updateStats(wpm);
  updateTopScores(wpm);
}

function updateTopScores(wpm) {
  var one, two, three, four, five;
  var topScores = [];
  var elems;

  one = document.getElementById("t-one");
  two = document.getElementById("t-two");
  three = document.getElementById("t-three");
  four = document.getElementById("t-four");
  five = document.getElementById("t-five");

  elems = [one, two, three, four, five];

  if (one.innerHTML !== "") {
    topScores.push(getScore(one));
  }

  if (two.innerHTML !== "") {
    topScores.push(getScore(two));
  }

  if (three.innerHTML !== "") {
    topScores.push(getScore(three));
  }

  if (four.innerHTML !== ""){
    topScores.push(getScore(four));
  }

  if (five.innerHTML !== ""){
    topScores.push(getScore(five));
  }

  topScores.push(wpm);
  topScores.sort(function(a, b) {return b - a});

  for (var i = 0; i < topScores.length; i++){
    if (i !== 5) {
      var num = i + 1;
      elems[i].innerHTML = num + ". " + topScores[i].toPrecision(3) + " wpm";
    }
  }
}

function getScore(doc) {
  var temp = doc.innerHTML.split(" ");
  temp = temp[1];
  return (parseFloat(temp));
}

function updateStats(new_score){
  var avgWpm = document.getElementById("avg-wpm");
  var races = document.getElementById("num-race");
  var oldwpm, numRace, newAvg;

  numRace = parseInt(races.innerHTML);
  numRace += 1;
  races.innerHTML = numRace;

  if (avgWpm.innerHTML === ""){
    avgWpm.innerHTML = new_score.toPrecision(3);
  }
  else {
    oldwpm = parseFloat(avgWpm.innerHTML);
    newAvg = (oldwpm + new_score)/2;
    avgWpm.innerHTML = newAvg.toPrecision(3);
  }
}

function updateScores(new_score) {
  var one, two, three, four, five;
  var scores = [];

  one = document.getElementById("l-one");
  two = document.getElementById("l-two");
  three = document.getElementById("l-three");
  four = document.getElementById("l-four");
  five = document.getElementById("l-five");

  var elems = [one, two, three, four, five];
  // make an array of the previous scores
  if (one.innerHTML !== ""){
    scores.push(one.innerHTML);
  }

  if (two.innerHTML !== ""){
    scores.push(two.innerHTML);
  }

  if (three.innerHTML !== ""){
    scores.push(three.innerHTML);
  }

  if (four.innerHTML !== ""){
    scores.push(four.innerHTML);
  }

  scores.splice(0, 0, new_score);


  for (var i = 0; i < scores.length; i++){
    var scoreNum = i + 1;
    if (i === 0)
      elems[i].innerHTML =  scoreNum + ". " + scores[i].toPrecision(3) + " wpm";
    else {
      var str = scores[i];
      str = str.replace(i + ".", scoreNum + ".");
      elems[i].innerHTML = str;
    }
  }

  if (five.innerHTML !== "") getAvg(one, two, three, four, five);



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
