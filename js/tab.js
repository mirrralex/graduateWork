function tab(){

	let glassSlide = document.getElementsByClassName('glazing_block'),
		glassContentWarm = document.getElementsByClassName('glazing_warm'),
		glassContentCold = document.getElementsByClassName('glazing_cold'),
		glassContentPrice = document.getElementsByClassName('glazing_price'),
		glassWindow = document.getElementsByClassName('glazing_slider')[0],
		glassImage = document.getElementsByClassName('imgOfwork'),
		glassType = document.getElementsByClassName('typeOfwork');

//slick-current

	function tabHide(elementNumber) {

		for(let i = elementNumber; i < glassContentWarm.length; i++) {

			glassSlide[i].classList.add('active');

			console.log('yeap');

		}
	}

	tabHide(1);

	function tabOpen(number) {

		if (glassContentWarm[number].classList.contains('hide')) {

			tabHide(0);

			glassSlide[number].classList.add('active');

			console.log('ugu');
		}
	}

	glassWindow.addEventListener('click', function(event) {
		
		let target = event.target;

		console.log('aga');

		if(target.classList.contains('glazing_block') || target.classList.contains('imgOfwork')|| target.classList.contains('typeOfwork')) {

			for(let i = 0; i < glassSlide.length; i++) {

				if (target == glassType[i] || target == glassImage[i]) {

					tabOpen(i);

					console.log('grea');

					break;

				} else if (target == glassSlide[i]) {

					tabOpen(i);

				}
			}
		}
	});
}

tab();