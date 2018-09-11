/*jshint esversion: 6 */
//timer 
function timer(){

	let deadline = '2018-09-12',
		eTimer = document.getElementById('eTimer');

	console.log(eTimer.textContent);




	eTimer.style.borderRadius = '8px';
	eTimer.style.background = 'block';
	eTimer.style.background = 'white';
	eTimer.style.textAlign = 'center';
	eTimer.style.height = '100px';
	eTimer.style.width = '250px';

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
			days = document.getElementById("days"),
			hours = document.getElementById('hours'),
			minutes = document.getElementById('minutes'),
			seconds = document.getElementById('seconds');

		days.style.background = "gray";
		days.style.textAlign = 'center';
		days.style.color = 'black';
		days.style.width = '30px';
		days.style.height = '45px';
		days.style.fontSize = '28px';
		days.style.display = 'inline-block';
		days.style.borderRadius = '8px';

		hours.style.background = "gray";
		hours.style.textAlign = 'center';
		hours.style.color = 'black';
		hours.style.width = '30px';
		hours.style.fontSize = '28px';
		hours.style.height = '45px';
		hours.style.display = 'inline-block';
		hours.style.borderRadius = '8px';

		minutes.style.background = "gray";
		minutes.style.textAlign = 'center';
		minutes.style.color = 'black';
		minutes.style.width = '30px';
		minutes.style.height = '45px';
		minutes.style.fontSize = '28px';
		minutes.style.display = 'inline-block';
		minutes.style.borderRadius = '8px';

		seconds.style.background = "gray";
		seconds.style.textAlign = 'center';
		seconds.style.color = 'black';
		seconds.style.width = '30px';
		seconds.style.height = '45px';
		seconds.style.fontSize = '28px';
		seconds.style.display = 'inline-block';
		seconds.style.borderRadius = '8px';

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