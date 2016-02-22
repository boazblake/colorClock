var clockStamp = document.querySelector('.clockContainer')
    // console.log(clockStamp)

var clock = clockStamp.querySelector('.clock')
    // console.log(clock)

var clockFace = document.createElement('div')

clockFace.className += ' clockFace'

////////////
// Clock //
///////////

function flashTextTop() {
    var clockFace = document.querySelector('.clock')
    var timeNow = new Date()
    var hrs = timeNow.getHours()
    hrs = ("0" + hrs).slice(-2);

    var mins = timeNow.getMinutes()
    mins = ("0" + mins).slice(-2);

    var sec = timeNow.getSeconds()
    sec = ("0" + sec).slice(-2);

    clockFace.innerHTML = hrs + ":" + mins + ":" + sec

    ///////////////////
    // setClockTime()  //
    //////////////////////

    ////////////////////
    // setProgressWidth()  //
    //////////////////////
    var newSec = parseInt(sec) / 60 * 100

    var pBar = document.querySelector(".progressBar");
    // console.log([pBar])
    pBar.style.width = newSec + "%";
    // console.log([pBar.style.width])


    ///////////////////////
    // setHexColorTime()  HEX color stopwatch //
    ///////////////////////

    var red = Math.floor((255 * hrs) / 24)

    var green = Math.floor((255 * mins) / 60)

    var blue = Math.floor((255 * sec) / 60)


    var hexColor = red.toString(16) + ":" + green.toString(16) + ":" + blue.toString(16)
        // console.log([hexColor])


    var hexContain = document.querySelector('.hexContainer')

    hexContain.textContent = hexColor
    console.log([hexColor])

    ///////////////////
    // setBackgroundColor() BACKGROUND CHANGE///
    ///////////////////
    

    var body = document.querySelector('body')
    body.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')'

}

clock.appendChild(clockFace)

///////////////////////
// functions to call //
///////////////////////





function writeToDom() {
    // hr, min, sec

    flashTextTop()
    // backgroundChange()
    // progressBarChange()
}


////////////////////
// Timer function //
////////////////////


var intervalID = window.setInterval(writeToDom, 1000);



// defunct parts


////////////////////
// progressBar 	//
////////////////////

//     function move() {
//     var pBar = document.querySelector(".progressBar"); 
//     // console.log(pBar)
//     var width = 0;
//     var id = setInterval(frame, 800);
//     function frame() {
//         if (width === 100) {
//             width = 0
//         } else {
//             width++; 
//             pBar.style.width = width + '%';
//         }
//     }
// }


////////////////////
//  Hover Function //
////////////////////

// function initElement(){      	
//     	var clockContainer = document.querySelector('.clockContainer')
//         clockContainer.onmouseover = showMouseOver
//         // clockclockContainer.onmouseout = showMouseOut;
// 		// var backGrndCont = window.getComputedStyle(clockContainer, null).getPropertyValue("background-image");
// 		// console.log([backGrndCont])
//     }

//     function showMouseOver()  
//     { 
//     	var clockContainer = document.querySelector('.clockContainer')
//     	// console.log([clockContainer])
// 		// var backGrndCont = window.getComputedStyle(clockContainer, null).getPropertyValue("background-image");
// 		var backGrndCont = window.getComputedStyle(clockContainer, null).getPropertyValue('background');
//     	console.log(backGrndCont)
//     	clock.innerHTML = [backGrndCont]
//         return backGrndCont

//     }

//     function showMouseOut()
//     {
//         var notice = document.querySelector("notice");
//         notice.innerHTML = 'mouse out detected';
//     }
