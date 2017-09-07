// parameter to indicate page just loaded and needs to be initialized.
var pictClickCount = 0;
var srcRoot = 'assets/images/';
var arrayValue = 0;
var selectedPicture = "";
var selectedWord	= "";
var audioElement 	= "";
var myPlayAudio		= "";

/* for the audio */
var myaud = document.getElementById("march");
 var k = setInterval("pauseAud()", 10000);

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








//var pictNum = 


/* captures the key stroke */
document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      alert(userGuess);


 }     

$(document).ready(function(){

   // jQuery methods go here...

	$("#leftPict").click(
		function(){
			
			arrayValue = Math.floor(Math.random() * swHangManImages.length)

	    	selectedPicture = swHangManImages[arrayValue][0];
	    	console.log(selectedPicture);
	    	$("#leftPict").attr('src', srcRoot + selectedPicture);
	    	selectedWord 	= swHangManWords[arrayValue][0];
	    	console.log(selectedWord);
	    	playAud();
	    	document.getElementById("currentWord").innerHTML = selectedWord;
	    	myPlayAudio = setInterval(endAudio,2000);
	    	clearInterval(myPlayAudio);
		} //end fcn # 1
		//function(){
	//	} // end fcn # 2
	);


/* for audio */

	

});


// function playAudio(){
// var audio = document.getElementById(audio);
// audio.addEventListener("canplaythrough", function () {
//         setTimeout(function(){
//             audio.pause();
//             alert("Audio Stop Successfully");
//         },
//         10000);
// }, false); 
// }

function playAud(){

	audioElement = document.getElementById('myAudio');
    audioElement.setAttribute('src', "assets/audio/Imperial-March.ogx");
    
    audioElement.play();


    // audioElement.addEventListener('ended', function() {
    //     this.play();
    // }, false);
    
    // audioElement.addEventListener("canplay",function(){
    //     $("#length").text("Duration:" + audioElement.duration + " seconds");
    //     $("#source").text("Source:" + audioElement.src);
    //     $("#status").text("Status: Ready to play").css("color","green");
    // });
    
    // audioElement.addEventListener("timeupdate",function(){
    //     $("#currentTime").text("Current second:" + audioElement.currentTime);
    // });
    
    // $('#play').click(function() {
    //     audioElement.play();
    //     $("#status").text("Status: Playing");
    // });
    
    // $('#pause').click(function() {
    //     audioElement.pause();
    //     $("#status").text("Status: Paused");
    // });
    
    // $('#restart').click(function() {
    //     audioElement.currentTime = 0;
    // });


}

function endAudio(){
	audioElement.pause();
	audioElement.currentTime = 0;
}
/*
 function playAud() {
     myaud.play();
 }

 function pauseAud() {
     myaud.pause();
     alert('Audio Stop Successfully');
     clearInterval(k); 
 } 
 */