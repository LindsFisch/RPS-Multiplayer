$(document).ready(function(){

var config = {
    apiKey: "AIzaSyBuVdkgynB2UxzpD8F-w_yGnHIMsA2MMNo",
    authDomain: "rock-paper-scissor-multi.firebaseapp.com",
    databaseURL: "https://rock-paper-scissor-multi.firebaseio.com",
    projectId: "rock-paper-scissor-multi",
    storageBucket: "rock-paper-scissor-multi.appspot.com",
    messagingSenderId: "812507757852"
  };

firebase.initializeApp(config);

var database = firebase.database();

//store player connection in directory
var playerRef = database.ref("/connections");

//firebase track of client connection
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

  // If they are connected..
  if (snap.val()) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);

    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});

//variables
var pOneGuess = "";
var pTwoGuess = "";
var pOneWin = 0;
var pOneLoss = 0;
var pTwoWin = 0;
var pTwoLoss = 0;
var turnCount = 0;
var pOneName = "";
var pTwoName = "";

	function checkWin(pOneGuess, pTwoGuess) {
		if ((pOneGuess === "rock" && pTwoGuess === "scissors") || (pOneGuess === "scissors" && pTwoGuess === "paper") || (pOneGuess === "paper" && pTwoGuess === "rock")) {
            pOneWin++;
            pTwoLoss++;
            turnCount++;
            $("win-zone").append("<h2>" + pOneName + " wins! </h2>");
          } else if (pOneGuess === pTwoGuess) {
            turnCount++;
            $("win-zone").append("<h2> It's a tie! </h2>");
          } else {
            pOneLoss++;
            pTwoWin++;
            turnCount++;
            $("win-zone").append("<h2>" + pTwoName + " wins! </h2>");
          }
	}
//player one choice
$(".game-choice-one").on("click", function () {
	pOneGuess= $(this).attr("data-type");
})

//player two choice
$(".game-choice-two").on("click", function() {
	pTwoGuess= $(this).attr("data-type");

})




})