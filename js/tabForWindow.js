function tabForWindows(){
	let decorItem = document.getElementsByClassName('decoration_item  wow fadeInUp'),
		decorName = document.getElementsByClassName('decoration_name'),
		decorClick = document.getElementsByClassName('no_click'),
		decorSlider = document.getElementsByClassName('decoration_slider')[0],
		decorContent = document.getElementsByClassName('slider_elem');

	function tabHide(elementNumber) {

		for(let i = elementNumber; i < decorItem.length; i++) {

			decorClick[i].classList.remove('after_click');

			decorContent[i].classList.remove('show');

			decorContent[i].classList.add('hide');
		}
	}
	tabHide(1);

	function tabShow(number) {

		if (decorContent[number].classList.contains('hide')) {

			tabHide(0);

			decorClick[number].classList.add('after_click');

			decorContent[number].classList.remove('hide');

			decorContent[number].classList.add('show');
		}
	}

	for (let j = 0; j < decorItem.length; j++) {

	decorItem[j].addEventListener('click', function(event) {

		let target = event.target;

		if(target.classList.contains('decoration_item') || target.classList.contains('no_click') || target.classList.contains('decoration_name')) {

			for(let i = 0; i < decorItem.length; i++) {

				if (target == decorItem[i] || target == decorClick[i] || target == decorName[i]) {

					tabShow(i);

					break;

				}
			}
		}
	});
}


}
tabForWindows();

