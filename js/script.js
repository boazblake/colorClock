var clockStamp = document.querySelector('.container')
console.log(clockStamp)

var clock = clockStamp.querySelector('.clock')
console.log(clock)

var clockFace = document.createElement('div')

clockFace.className += ' clockFace'

var flashTextTop = function () {
	var clockFace = document.querySelector('.clock')
	var timeNow = new Date()
	var hrs = timeNow.getHours()
	var mins = timeNow.getMinutes()
	var sec = timeNow.getSeconds()
    
    clockFace.innerHTML = hrs + ":" + mins + ":" + sec
    // console.log([time])

}

     clock.appendChild(clockFace)

 var intervalID = window.setInterval(flashTextTop, 1000);
