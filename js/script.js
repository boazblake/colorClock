var clock = document.querySelector('.clock')

var clockFace = document.createElement('div')

clockFace.className += ' clockFace'

////////////
// Clock //
///////////

clock.appendChild(clockFace)

///////////////////////
// helper function //
///////////////////////

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
function setHexColorTime(rgbObject) {
    var hexColor = rgbObject.red.toString(16) + ":" + rgbObject.green.toString(16) + ":" + rgbObject.blue.toString(16)
    var hexContain = document.querySelector('.hexContainer')
    hexContain.textContent = hexColor
}

function backgroundChange(rgbO){
    var body = document.querySelector('body')
    body.style.background = 'rgb(' + rgbO.red + ',' + rgbO.green + ',' + rgbO.blue +')'
}

function setClockTime(hrs,mins,sec) {
	    hrs = ("0" + hrs).slice(-2);
	    mins = ("0" + mins).slice(-2);
	    sec = ("0" + sec).slice(-2);
	    clockFace.innerHTML = hrs + ":" + mins + ":" + sec
}

function setProgressBarWidth(sec) {
 	var pBar = document.querySelector(".progressBar");
    var percentSec = sec / 60 * 100
    pBar.style.width = percentSec + "%";
}

//////////////////////////////////////////
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
}


////////////////////
// Timer function //
////////////////////


var intervalID = window.setInterval(getTime, 1000);