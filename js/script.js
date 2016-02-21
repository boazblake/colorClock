var clockStamp = document.querySelector('.clockContainer')
// console.log(clockStamp)

var clock = clockStamp.querySelector('.clock')
// console.log(clock)

var clockFace = document.createElement('div')

clockFace.className += ' clockFace'




    //////////////////////////////////////////////
// clock
// ///////////////////////////////////////////////

var flashTextTop = function () {
	var clockFace = document.querySelector('.clock')
	var timeNow = new Date()
	var hrs = timeNow.getHours()
		hrs = ("0" + hrs).slice(-2);

	var mins = timeNow.getMinutes()
		mins = ("0" + mins).slice(-2);

	var sec = timeNow.getSeconds()
		sec = ("0" + sec).slice(-2);
    
    clockFace.innerHTML = hrs + ":" + mins + ":" + sec
    // console.log([time])

}

     clock.appendChild(clockFace)
    //////////////////////////////////////////////
// blink function
// ///////////////////////////////////////////////
 var intervalID = window.setInterval(flashTextTop, 1000);

    //////////////////////////////////////////////
// hover function
// ///////////////////////////////////////////////

function initElement()  
    {      	
    	var clockContainer = document.querySelector('.clockContainer')
        clockContainer.onmouseover = showMouseOver
        // clockclockContainer.onmouseout = showMouseOut;
		// var backGrndCont = window.getComputedStyle(clockContainer, null).getPropertyValue("background-image");
		// console.log([backGrndCont])
    }

    function showMouseOver()  
    { 
    	var clockContainer = document.querySelector('.clockContainer')
    	// console.log([clockContainer])
		// var backGrndCont = window.getComputedStyle(clockContainer, null).getPropertyValue("background-image");
		var backGrndCont = window.getComputedStyle(clockContainer, null).getPropertyValue('background');
    	console.log(backGrndCont)
        return backGrndCont
    }
    
    // function showMouseOut()
    // {
    //     var notice = document.querySelector("notice");
    //     notice.innerHTML = 'mouse out detected';
    // }









    //////////////////////////////////////////////
    				// progress Bar
    //////////////////////////////////////////////

    function move() {
    var pBar = document.querySelector(".progressBar"); 
    // console.log(pBar)
    var width = 0;
    var id = setInterval(frame, 600);
    function frame() {
        if (width === 100) {
            clearInterval(id);
        } else {
            width++; 
            pBar.style.width = width + '%'; 
        }
    }
}