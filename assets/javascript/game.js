// parameter to indicate page just loaded and needs to be initialized.
var pictClickCount = 0;
var srcRoot = 'assets/images/';
var arrayValue = 0;
var selectedPicture = "";
var selectedWord	= "";
// var audioElement 	= "";
// var myPlayAudio		= "";



/* for the audio */
//var myaud = document.getElementById("march");
// var k = setInterval("pauseAud()", 10000);

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
swHangManWords[0] = new Array ("exhaut port");
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

      // Determines which key was pressed.
      var userLetter = event.key;
      console.log(userLetter);

 }     

$(document).ready(function(){

   // jQuery methods go here...

	$("#leftPict").click(
		function(){
			
			arrayValue = Math.floor(Math.random() * swHangManImages.length)

	    	selectedPicture = swHangManImages[arrayValue][0];
	    	$("#leftPict").attr('src', srcRoot + selectedPicture);
	    	selectedWord 	= swHangManWords[arrayValue][0];
 
        var myAud = document.getElementById("myAudio");
        
        //plays the audio  
              myAud.play();

        // ends the  audio
        var p = setInterval(function(){

             myAud.pause();
           console.log("audio stopping");
            clearInterval(p);
        }, 3100);

        // // end the audio...
        // function endAud(){
         
        // } // end

        

        //fcn endAud

        renderSelectedWord(selectedWord);
		} //end fcn # 1
	);

}); //end ready (do not delete)

    

function renderSelectedWord(passedWord){
/* takes the passed word(s) and turns it into list of underscores (_)*/
 passedWord = "kessel run";
console.log(passedWord + " " + passedWord.length);
for (i = 1; i < passedWord.length;i++){

  console.log("a leteter " + i);

}

  var test = passedWord;
  var underScoreString = "";
  $(test.split('')).each(function (index,character) {
          if (character == " "){
              underScoreString = underScoreString +  "&nbsp;&nbsp;&nbsp;";
          } else{

              underScoreString = underScoreString +  " _ ";

          }

  });
    console.log("underscores is " + underScoreString);     
    document.getElementById("currWordUnderscored").innerHTML = underScoreString;

}