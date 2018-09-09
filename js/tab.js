function tab(){

	let glassSlide = document.getElementsByClassName('glazing_block'),
		glassContentWarm = document.getElementsByClassName('glazing_warm'),
		glassContentCold = document.getElementsByClassName('glazing_cold'),
		glassContentPriceWarm = document.getElementsByClassName('glazing_price warm'),
		glassContentPriceCold = document.getElementsByClassName('glazing_price cold'),
		glassWindow = document.getElementsByClassName('glazing_slider')[0],
		glassImage = document.getElementsByClassName('imgOfwork'),
		glassType = document.getElementsByClassName('typeOfwork');

	function tabHide(elementNumber) {

		for(let i = elementNumber; i < glassContentWarm.length; i++) {

			glassSlide[i].classList.remove('active');

			glassType[i].classList.remove('active');

			glassContentWarm[i].classList.add('hide');
			glassContentWarm[i].classList.remove('show');

			glassContentPriceWarm[i].classList.add('hide');
			glassContentPriceWarm[i].classList.remove('show');

			if( i < 3) {

				glassContentCold[i].classList.add('hide');
				glassContentCold[i].classList.remove('show');

				glassContentPriceCold[i].classList.add('hide');
				glassContentPriceCold[i].classList.remove('show');

			} else if (i > 3) {

				glassContentCold[i-1].classList.add('hide');
				glassContentCold[i-1].classList.remove('show');

				glassContentPriceCold[i-1].classList.add('hide');
				glassContentPriceCold[i-1].classList.remove('show');
			}
		}
	}

	tabHide(1);

	function tabOpen(number) {

		if (glassContentWarm[number].classList.contains('hide')) {

			tabHide(0);

			glassSlide[number].classList.add('active');

			glassType[number].classList.add('active');

			glassContentWarm[number].classList.remove('hide');
			glassContentWarm[number].classList.add('show');

			glassContentPriceWarm[number].classList.remove('hide');
			glassContentPriceWarm[number].classList.add('show');

			if( number < 2) {

				glassContentCold[number].classList.remove('hide');
				glassContentCold[number].classList.add('show');

				glassContentPriceCold[number].classList.remove('hide');
				glassContentPriceCold[number].classList.add('show');

			} else if (number > 2) {

				glassContentCold[number-1].classList.remove('hide');
				glassContentCold[number-1].classList.add('show');

				glassContentPriceCold[number-1].classList.remove('hide');
				glassContentPriceCold[number-1].classList.add('show');
			}
		}
	}

	glassWindow.addEventListener('click', function(event) {
		
		let target = event.target;

		if(target.classList.contains('glazing_block') || target.classList.contains('imgOfwork')|| target.classList.contains('typeOfwork')) {

			for(let i = 0; i < glassSlide.length; i++) {

				if (target == glassType[i] || target == glassImage[i]) {

					tabOpen(i);

					break;

				} else if (target == glassSlide[i]) {

					tabOpen(i);

				}
			}
		}
	});
}

tab();