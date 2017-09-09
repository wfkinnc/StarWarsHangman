//-------------------------------------------------------------------
// parameter to indicate page just loaded and needs to be initialized.
//-------------------------------------------------------------------
var pictClickCount      = 0;
var letterClickCount    = 0;
var numGuesses          = 0;
var numWins             = 0;
var numGuessesRemaining = 0;
var arrayValue          = 0;
var letterExistsInWord  = -1;
var srcRoot             = "assets/images/";
var selectedPicture     = "";
var selectedWord        = "";
var arraySelectedWord   = Array();
var arrayUnusedLetter   = Array();
var userLetter          = "";
var dspGuessedLetter    = "";
var alreadySelLetters   = "";
var underScoreString    = "";
// var audioElement 	= "";
// var myPlayAudio		= "";

var swHangManImages = new Array();
swHangManImages[0] = new Array ("at-death-star.jpg");
swHangManImages[1] = new Array ("c3p0.jpg");
swHangManImages[2] = new Array ("darth-vader.png");
swHangManImages[3] = new Array ("ewoks.jpg");
swHangManImages[4] = new Array ("imperial-walkers.jpg");
swHangManImages[5] = new Array ("leia-in-bikini.jpg");
swHangManImages[6] = new Array ("luke.jpg");
swHangManImages[7] = new Array ("master-yoda.jpg");
swHangManImages[8] = new Array ("master-yoda-2.jpg");
swHangManImages[9] = new Array ("millennium-falcon.jpg");
swHangManImages[10] = new Array ("millennium-falcon-2.jpg");
swHangManImages[11] = new Array ("obi-wan-kinobi.jpg");
swHangManImages[12] = new Array ("on-tataween.jpg");
swHangManImages[13] = new Array ("r2-d2.jpg");

var swHangManWords = new Array();
swHangManWords[0] = new Array ("exhaust port");
swHangManWords[1] = new Array ("cyborg");
swHangManWords[2] = new Array ("luke's father");
swHangManWords[3] = new Array ("cuddly");
swHangManWords[4] = new Array ("stilts");
swHangManWords[5] = new Array ("sexy");
swHangManWords[6] = new Array ("hero");
swHangManWords[7] = new Array ("the force");
swHangManWords[8] = new Array ("light saber");
swHangManWords[9] = new Array ("kelsel run");
swHangManWords[10] = new Array ("parsecs");
swHangManWords[11] = new Array ("jedi knight");
swHangManWords[12] = new Array ("farm");
swHangManWords[13] = new Array ("silent");


/* captures the key stroke */
document.onkeyup = function(event) {
      //-------------------------------------------------------------------
      // Determines which key was pressed.
      //-------------------------------------------------------------------

      userLetter = event.key;

      //-------------------------------------------------------------------
      // starts the search of the word w/ the letter
      // if the word has not  been created, alerts a mssg to click the word
      //-------------------------------------------------------------------

      if (selectedWord == ""){ 
        document.getElementById("errorMessage").innerHTML = "Darth Vader says you must respect the Force and click the picture!!";
      } else {

        document.getElementById("errorMessage").innerHTML = "";
        processUserLetter(selectedWord, userLetter);
      }// end if selectedWord


     

 }// end .okkeyup = function     

$(document).ready(function(){
   //-------------------------------------------------------------------
   // this is the primary .ready() function which wraps all the  functions with
   // the elements being available.
   //-------------------------------------------------------------------


	$("#leftPict").click(
		function(){
			document.getElementById("errorMessage").innerHTML = "Game is Beginning!!";
      arrayUnusedLetter.length = 0;
      document.getElementById("guessedLetters").innerHTML = "";
			arrayValue = Math.floor(Math.random() * swHangManImages.length)

	    	selectedPicture = swHangManImages[arrayValue][0];
	    	$("#leftPict").attr('src', srcRoot + selectedPicture);
	    	selectedWord 	= swHangManWords[arrayValue][0];
        numGuesses  = selectedWord.length * 3;


        document.getElementById("numGuesses").innerHTML = numGuesses;
        console.log("sel word is " + selectedWord);
        var myAud = document.getElementById("myAudio");
        
        //plays the audio  
         //     myAud.play();

        // ends the  audio
       

        // // end the audio...
        // function endAud(){
         
        // } // end

        

        //fcn endAud

        renderUnderscoreList(selectedWord,0,"");
		} //end fcn # 1 // var p = setInterval(function(){

        //      myAud.pause();
        //    console.log("audio stopping");
        //     clearInterval(p);
        // }, 3100);
	);

}); //end ready (do not delete)

    

function renderUnderscoreList(passedWord,passedIteration,passedLetter){

  test = passedWord;
  var matchInd = "N";
  if (passedIteration == 0){
    console.log(" first iteration "  + passedIteration);
    // on first pass, takes word and replaces letters with _
      arraySelectedWord.length = 0;
      $(test.split('')).each(function (index,character) {
//          console.log(index + " " + character);
           if (character == " " ){
              arraySelectedWord.push(" ");
           } else {
              arraySelectedWord.push("_");
          } //end if (character..)
//          console.log(index + " from array " + arraySelectedWord[index]);
      });


  } else {
    // checks the word and if it matches tthe passed letter, replaces the _ in teh array w/ the selected letter
      $(test.split('')).each(function (index,character) {

        if (character === passedLetter){
            arraySelectedWord[index] = passedLetter;
            matchInd = "Y";
        } 
      });

      // if the matchIn == N, then push  to the unesedLetter arra

      if (matchInd === "N") {
            arrayUnusedLetter.push(passedLetter);
            document.getElementById("guessedLetters").innerHTML = arrayUnusedLetter.toString();
        }

  }//end if (passedIteration)
      document.getElementById("currWordUnderscored").innerHTML = arraySelectedWord.toString();

  if (arraySelectedWord.toString().indexOf("_") == -1){
  // if the arraySelectedWord does not contain anymore _  then the word is complete
      numWins++;
      document.getElementById("numWins").innerHTML = numWins;
      document.getElementById("errorMessage").innerHTML = "The Force is Strong with this one. GAME OVER";
  }
} // end fcn


function processUserLetter(passedWord,passedLetter){
  letterClickCount++;
  numGuessesRemaining = numGuesses - letterClickCount;
  if (numGuessesRemaining > 0){
    console.log("processing letter " + userLetter + " clickCount " + letterClickCount);
    renderUnderscoreList(passedWord,1,passedLetter);
    document.getElementById("numGuesses").innerHTML = numGuessesRemaining;
  } else {
        document.getElementById("errorMessage").innerHTML = "Feel The Force Next time. This game is OVER!";

  }
} // end function

// function addLetterToSelectedList(passedSelList, passedLetter){
//   var holdSelectedLetter = passedSelList + passedLetter;
//   return holdSelectedLetter;
// } // end addLetterToSelectedLilst

 
// function ckForLetterExistence(passedWord,passedLetter){
//   //-------------------------------------------------------------------
//   // takes the passed letter and passed word to confirm if it exists
//   //-------------------------------------------------------------------

// var letterExists = -1;

//   letterExist = passedWord.indexOf(passedLetter);
// return letterExist;
// }