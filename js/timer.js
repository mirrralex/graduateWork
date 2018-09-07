//timer 
function timer(){

	let deadline = '2018-07-04';

	function getTimeRemaining(endTime) {

		let t = Date.parse(endTime) - Date.parse(new Date()),

			seconds = Math.floor(( t / 1000) % 60),

			minutes = Math.floor(( t / 1000 / 60) % 60),

			hours = Math.floor(t / (1000 * 60 * 60));

		if(hours < 0) {

			hours = 0;

			if(minutes < 0) {

				minutes = 0;

				if(seconds < 0) {

					seconds = 0;

				}
			}
		}

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endTime) {

		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

		function updateClock() {

			let t = getTimeRemaining(endTime);

			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if(hours.textContent < 10 && hours.textContent >= 0) {

				hours.textContent = "0" + hours.textContent;
			}

			if(minutes.textContent < 10 && minutes.textContent >= 0) {

				minutes.textContent = "0" + minutes.textContent;
			}

			if(seconds.textContent < 10 && seconds.textContent >= 0) {

				seconds.textContent = "0" + seconds.textContent;
			}

			if(t.total <= 0) {
				clearInterval(timeInterval);			
			}

			if(hours.textContent < 0) {

				hours.textContent = "00";

				if(minutes.textContent < 0) {

					minutes.textContent = "00";

					if(seconds.textContent < 0) {

						seconds.textContent = "00";
					}
				}
			}
		}

		let timeInterval = setInterval(updateClock, 1000);
	}

	setClock('etimer', deadline);
}

timer();