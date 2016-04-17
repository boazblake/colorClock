
// Creating the clock
var clock = document.querySelector('.clock')
// creating the clock face
var clockFace = document.createElement('div')
// giving the clockface the class of 'clockFace' to enable me to style it in the CSS
clockFace.className += 'clockFace'

////////////
// Clock //
///////////

// Adding the clockFace to the clock
clock.appendChild(clockFace)

///////////////////////
// helper function //
///////////////////////

// This function captures the sync between the time and Hex color change in an object.
// Taking advatnge of the 3 part RGB and 3 part H:M:S.
function timeToRGB(hrs,mins,sec) {
	var objectRGB = {}
	objectRGB.red = Math.floor((255 * hrs) / 24)
	objectRGB.green = Math.floor((255 * mins) / 60)
	objectRGB.blue = Math.floor((255 * sec) / 60)
	return objectRGB
}

///////////////////////
// functions to call //
///////////////////////
///
///Placing the Hex Color numerals on the DOM. The function takes the input of the RGB object and splits it into R:G:B
function setHexColorTime(rgbObject) {
    var hexContain = document.querySelector('.hexContainer')
    var hexColor = rgbObject.red.toString(16) + ":" + rgbObject.green.toString(16) + ":" + rgbObject.blue.toString(16)
    hexContain.textContent = hexColor
}

// changing the background : this function also takes in the RBG Object and uses it to change the style of the backgound in RGB.
function backgroundChange(rgbObject){
    var body = document.querySelector('body')
    body.style.background = 'rgb(' + rgbObject.red + ',' + rgbObject.green + ',' + rgbObject.blue +')'
}


// This function defines how the clock is to look and adds it to the DOM. I chose to have a 24 hour clock and so appended an initial 0 and sliced off the 
// 
function setClockTime(hrs,mins,sec) {
	    hrs = ("0" + hrs).slice(-2);
	    mins = ("0" + mins).slice(-2);
	    sec = ("0" + sec).slice(-2);
	    clockFace.innerHTML = hrs + ":" + mins + ":" + sec
}

// The progrgress bar is incremented every sec by 1/60th
function setProgressBarWidth(sec) {
 	var pBar = document.querySelector(".progressBar");
    var percentSec = sec / 60 * 100
    pBar.style.width = percentSec + "%";
}


// I still need to edit the styling and the set-interval to look more like a heart beat!
function heartBeat(sec) {
 	var heart = document.querySelector(".heart");
 	console.log(heart.style.backgroundImage)

}


///// This function defines the current time and invokes the rest of the functions
function getTime() {
    var timeNow = new Date()
    var hours = timeNow.getHours()
    var minutes = timeNow.getMinutes()
    var seconds = timeNow.getSeconds()

    var rgbValues = timeToRGB(hours, minutes, seconds)

	setHexColorTime(rgbValues)
	backgroundChange(rgbValues)
	setClockTime(hours, minutes, seconds)
	setProgressBarWidth(seconds)
	heartBeat(seconds)
}


////////////////////
// Timer function //
////////////////////

// this function invokes a set interval for every 1s to invoke the get time function - which in turn invokes the hex color , time progress bar and 'heartbeat'

var intervalID = window.setInterval(getTime, 1000);