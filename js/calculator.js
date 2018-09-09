let popupCalcBtn = document.getElementsByClassName('popup_calc_btn'),
	popupCalc = document.getElementsByClassName('popup_calc')[0],
	popupBalconIcons = document.getElementsByClassName('icons_image'),
	popupBalconBigIcons = popupCalc.getElementsByClassName('big_image'),
	messageText = '',
	imageValue = '',
	windowWidth = document.getElementById('width'),
	windowHeight = document.getElementById('height'),
	popupCalcNextBtn = document.getElementsByClassName('popup_calc_button')[0],
	popupCalcProfile = document.getElementsByClassName('popup_calc_profile')[0],
	popupTypeOfWork = document.getElementById('view_type'),
	selectValue = "tree",
	checkbox = document.getElementsByClassName("checkbox"),
	checkboxCustom = document.getElementsByClassName("checkbox-custom"),
	checkboxLabel = document.getElementsByClassName("label"),
	styleOfMaterial = '',
	popupCalcProfileNextBtn = document.getElementsByClassName('popup_calc_profile_button')[0],
	popupCalcEnd = document.getElementsByClassName('popup_calc_end')[0];

popupCalc.style.top = 'auto';
popupCalc.style.left = 'auto';

for (let i = 0; i < popupBalconIcons.length; i++){
	popupBalconIcons[i].style.top = 'inherit';
	popupBalconIcons[i].style.left = 'inherit';
}

function windowCaclulator(){

	for (let i = 0; i < popupCalcBtn.length; i++){

		popupCalcBtn[i].addEventListener('click', function() {

			popupCalc.style.display = 'block';
		});
	}

	tabHideBalcon(1);

	function tabHideBalcon(elementNumber) {

		for(let i = elementNumber; i < popupBalconBigIcons.length; i++) {

			popupBalconBigIcons[i].classList.add('hide');
			popupBalconBigIcons[i].classList.remove('show');
		}

	}

	function tabShowBalcon(number) {

		if (popupBalconBigIcons[number].classList.contains('hide')){

			tabHideBalcon(0);

			popupBalconBigIcons[number].classList.remove('hide');
			popupBalconBigIcons[number].classList.add('show');
		}
	}

	for (let j = 0; j < popupBalconIcons.length; j++){

		popupBalconIcons[j].addEventListener('click', function() {

			let target = event.target;

			if(target.classList.contains('icons_image') ||target.classList.contains('balcon_icons')) {

				for(let i = 0; i < popupBalconIcons.length; i++) {

					if (target == popupBalconIcons[i]) {

						tabShowBalcon(i);

						imageValue = popupBalconIcons[i].alt;

						messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;

						break;

					}
				}
			}
		});
	}

	windowWidth.addEventListener('change', function(){

		messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;

		return messageText;
	});

	windowHeight.addEventListener('change', function(){

		messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;

		return messageText;
	});


	popupCalcNextBtn.addEventListener('click', function() {

	popupCalc.style.display = 'none';

	popupCalcProfile.style.display = 'block';
	});
	
	popupCalcProfileNextBtn.addEventListener('click', function() {

		popupCalcProfile.style.display = 'none';

		popupCalcEnd.style.display = 'block';
	});

	popupTypeOfWork.addEventListener('change', function() {

		selectValue = this.options[this.selectedIndex].value;

		messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;

		return messageText;
	});

	for (let i = 0; i < checkbox.length; i++) {

		checkbox[i].addEventListener('click', function(){
			for (let j = 0; j < checkbox.length; j++){
				if(checkbox[0].checked == true) {

					styleOfMaterial = checkboxCustom[0].id;

					if(checkbox[1].checked == true) {

					styleOfMaterial = 'Два вида окон' + styleOfMaterial + ' ' + checkboxCustom[1].id; 
					}
				}

			}

			messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;
			
			return messageText;
		});
	}

}

windowCaclulator();

let popupCalcCloseBotton = document.getElementsByClassName('popup_calc_close')[0];

popupCalcCloseBotton.addEventListener('click', function() {

	popupCalc.style.display = 'none';
});
let popupCalcProfileCloseBotton = document.getElementsByClassName('popup_calc_profile_close')[0];

popupCalcProfileCloseBotton.addEventListener('click', function() {

	popupCalc.style.display = 'none';
});
let popupCalcEndCloseBotton = document.getElementsByClassName('popup_calc_end_close')[0];

popupCalcEndCloseBotton.addEventListener('click', function() {

	popupCalc.style.display = 'none';
});