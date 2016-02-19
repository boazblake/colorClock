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











  // console.log([clockFace])


// var flashText = function () {
//       var sandBox = document.querySelector('.sandBox')
//       var currentTimeObject = new Date()
//       var hrs = currentTimeObject.getHours()
//       var mins = currentTimeObject.getMinutes()
//       var sec = currentTimeObject.getSeconds()

//       sandBox.innerHTML = hrs + ":" + mins + ":" + sec
//       // console.log([sandBox.innerHTML])
//       // oElem.style.colutesor = oElem.style.color == "red" ? "blue" : "red";
//  }



// var dateObj = new Date()
//  new Date() returns an OBJECT

// jsDateObj = {
// 	dateData: {
// 		fullYear: 2016,
// 		month: 2,

// 	}

// 	getFullYear: function(yr){
// 		return this.dateData.fullYear
// 	}

// }

