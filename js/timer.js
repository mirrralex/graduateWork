//timer 
function timer(){

	let deadline = '2018-09-12',
		eTimer = document.getElementById('eTimer');
		time = document.getElementsByClassName('time');

console.log(time[0]);

	eTimer.style.borderRadius = '8px';
	eTimer.style.background = 'block';
	eTimer.style.background = 'white';
	eTimer.style.textAlign = 'center';
	eTimer.style.height = '100px';
	eTimer.style.width = '250px';
	eTimer.textContent = 'ДО ЗАВЕРШЕНИЯ АКЦИИ:';


	function getTimeRemaining(endTime) {

		let t = Date.parse(endTime) - Date.parse(new Date()),

			seconds = Math.floor(( t / 1000) % 60),

			minutes = Math.floor(( t / 1000 / 60) % 60),

			hours = Math.floor((t / (1000 * 60 * 60)) % 24),

			days = Math.floor((t / (1000 * 60 * 60 * 24)) % 30);

		if(days < 0) {

			days = 0;

			if(hours < 0) {

				hours = 0;

				if(minutes < 0) {

					minutes = 0;

					if(seconds < 0) {

						seconds = 0;

					}
				}
			}
		}

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endTime) {

		let timer = document.getElementById(id),
			days = document.getElementsByClassName("days"),
			hours = document.getElementsByClassName('hours'),
			minutes = document.getElementsByClassName('minutes'),
			seconds = document.getElementsByClassName('seconds');

		console.log(timer);
		console.log(days);
		console.log(minutes);
		console.log(seconds);

		for (let i = 0; i < time.length; i++) {

			time[i].style.background = "black";
			time[i].style.textAlign = 'center';

		}

		function updateClock() {

			let t = getTimeRemaining(endTime);

			days.textContent = t.days;
			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if(days.textContent < 10 && days.textContent >= 0) {

				days.textContent = "0" + days.textContent;
			}

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
			if(days.textContent < 0){

				days.textContent = "00";

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
		}

		let timeInterval = setInterval(updateClock, 1000);
	}

	setClock('eTimer', deadline);
}

timer();