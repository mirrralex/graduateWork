(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function bigImages(){
	let imagesGallery = document.getElementsByClassName('col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow fadeIn'),
		imagesBig = document.getElementsByClassName("big_images"),
		imagesMain = document.getElementsByClassName('main_images'),
		imagesRow = document.getElementsByClassName('big_image_cover');


	for (let i = 0; i < imagesGallery.length; i++) {
		imagesRow[i].style.top = 'auto';
		imagesRow[i].style.left = 'auto';
	}

	function tabHide(elementNumber) {

		for(let i = elementNumber; i < imagesGallery.length; i++) {

			imagesBig[i].classList.add('hide');
			imagesBig[i].classList.remove('show');
		}
	}
	tabHide(0);

	function tabOpen(number) {

			if (imagesBig[number].classList.contains('hide')) {

				tabHide(0);

				imagesBig[number].classList.remove('hide');
				imagesBig[number].classList.add('show');
				imagesBig[number].style.top = '7%';
				imagesBig[number].style.left = '22%';
				imagesBig[number].style.bottom = '7%';
				imagesRow[number].style.display = "block";
			}
	}

	for(let j = 0; j < imagesGallery.length; j++) {

		imagesMain[j].addEventListener('click', function() {

			let target = event.target;

			if(target.classList.contains('lupa') || target.classList.contains('main_images')) {

				for(let i = 0; i < imagesGallery.length; i++) {

					if (target == imagesGallery[i] || target == imagesMain[i]) {

						tabOpen(i);

						break;
					}
				}
			}
		});
	}

	for (let j = 0; j < imagesGallery.length; j++) {
		imagesRow[j].addEventListener('click', function(elem) {
			for (let i = 0; i < imagesGallery.length; i++) {
				if (!isDescendant(imagesRow[i], elem.target)){
				imagesRow[i].style.display = 'none';
				}
			}
		});
	}

	//проверка на родителя
	function isDescendant(parent, child) {
	     var node = child.parentNode;
	     while (node != null) {
	         if (node == parent) {
	             return true;
	         }
	         node = node.parentNode;
	     }
	     return false;
	}
}

module.exports = bigImages();
},{}],2:[function(require,module,exports){
function calculator() {
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
		popupCalcEnd = document.getElementsByClassName('popup_calc_end')[0],
		messagePost = new Object(),
		target = null;

	messagePost.loading = 'Идет отправка';
	messagePost.success = 'Спасибо, письмо отправлено';
	messagePost.failure = 'К сожелению что-то пошло не так';

	popupCalc.style.top = 'auto';
	popupCalc.style.left = 'auto';

	popupCalcNextBtn.disabled = true;

	for (let i = 0; i < popupBalconIcons.length; i++){
		popupBalconIcons[i].style.top = 'inherit';
		popupBalconIcons[i].style.left = 'inherit';
	}

	function tabHideBalcon(elementNumber) {

		for(let i = elementNumber; i < popupBalconBigIcons.length; i++) {

			popupBalconBigIcons[i].classList.add('hide');
			popupBalconBigIcons[i].classList.remove('show');
			popupBalconIcons[i].style.width = '20%';
		}
	}

	function windowCaclulator() {

		for (let i = 0; i < popupCalcBtn.length; i++){

			popupCalcBtn[i].addEventListener('click', function() {

				popupCalc.style.display = 'block';
			});
		}

		tabHideBalcon(1);

		function tabShowBalcon(number) {

			if (popupBalconBigIcons[number].classList.contains('hide')){

				tabHideBalcon(0);

				popupBalconBigIcons[number].classList.remove('hide');
				popupBalconBigIcons[number].classList.add('show');
				popupBalconIcons[number].style.width = '25%';
			}
		}

		for (let j = 0; j < popupBalconIcons.length; j++){

			popupBalconIcons[j].addEventListener('click', function() {

				target = event.target;

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

			if (windowWidth.value == '' || isNaN(windowWidth.value)) {

				popupCalcNextBtn.disabled = true;

				popupCalcBtn.textContent = "Введите пожалуйста ширину в милиметрах";

			} else {

			messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;
				
				if (windowHeight.value == '' || isNaN(windowHeight.value)) {

					popupCalcNextBtn.disabled = true;

				} else {

					popupCalcNextBtn.disabled = false;

				}
			}

			return messageText;
		});

		windowHeight.addEventListener('change', function(){

			if (windowHeight.value == '' || isNaN(windowHeight.value)) {

				popupCalcNextBtn.disabled = true;

				popupCalcBtn.textContent = "Введите пожалуйста ширину в милиметрах";

			} else {

			messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;
				
				if (windowWidth.value == '' || isNaN(windowWidth.value)) {

					popupCalcNextBtn.disabled = true;

				} else {

					popupCalcNextBtn.disabled = false;
				}
			}
			return messageText;
		});


		popupCalcNextBtn.addEventListener('click', function() {

			popupCalc.style.display = 'none';

			popupCalcProfile.style.display = 'block';

		});
		
		popupCalcProfileNextBtn.addEventListener('click', function() {

			popupCalcProfile.style.display = 'none';

			popupCalcEnd.style.display = 'block';

			sendForm(popupCalcEnd);
		});

		popupTypeOfWork.addEventListener('change', function() {

			selectValue = this.options[this.selectedIndex].value;

			messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;

			return messageText;
		});

		for (let i = 0; i < checkbox.length; i++) {

			checkbox[i].addEventListener('change', function(){

				if(checkbox[0].checked == true) {

					styleOfMaterial = checkboxCustom[0].id;

					checkbox[1].disabled = true;
					checkboxCustom[1].disabled = true;
					checkboxLabel[1].disabled = true;

				} else {

					if(checkbox[1].checked == true) {

					styleOfMaterial = checkboxCustom[1].id;

					checkbox[0].disabled = true;
					checkboxCustom[0].disabled = true;
					checkboxLabel[0].disabled = true;

					} else {

						checkbox[0].disabled = false;
						checkboxCustom[0].disabled = false;
						checkboxLabel[0].disabled = false;
						checkbox[1].disabled = false;
						checkboxCustom[1].disabled = false;
						checkboxLabel[1].disabled = false;				}
				}

				messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + 'мм тип материала:' + selectValue + 'клиент так же желает вид окон: ' + styleOfMaterial;
				
				return messageText;
			});
		}

		function sendForm(element) {
			let input = element.getElementsByTagName('input'),
				inputName = input[0],
				inputPhone = input[1],
				popupForm = element.getElementsByClassName('form')[0],
				statusMessage = document.createElement('div'),
				elementBtn = element.getElementsByClassName('btn-block')[0];

			function clearInput(){
				for (let i = 0; i < input.length; i++) {
				input[i].value = '';
				}
			}

			clearInput();

			elementBtn.disabled = true;

			statusMessage.classList.add('status');

			popupForm.appendChild(statusMessage);

			element.style.display = 'block';

			inputPhone.addEventListener('change', function(){

				if(isNaN(inputPhone.value) || inputPhone.value == '') {

					statusMessage.innerHTML = "Введите пожалуйста ваш номер телефона, а не набор букв";

					elementBtn.disabled = true;

					} else {

						statusMessage.innerHTML = "Спасибо, теперь все правильно, проверьте ваши данные и если все правильно то смело нажимайте кнопку заказать звонок";

						elementBtn.disabled = false;

						messagePost.txt = "Вам пришло сообщение от " + inputName.value + " что бы ему позвонить наберите " + inputPhone.value  + messageText;

					}
			});
			
			element.addEventListener('submit', function(elem) {

				elem.preventDefault();

				
				function postData(data) {

					return new Promise(function(resolve, reject) {
						let request = new XMLHttpRequest();

						request.open('POST', 'server.php');

						request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

						request.onreadystatechange = function() {

							if (request.readyState < 4) {
								resolve();
							} else if (request.readyState === 4) {
								if (request.status === 200 && request.status < 300) {
									resolve();
								} else {
									reject();
								}
							}
						};

						request.send(data);

					});
				} //End postData

				postData(messagePost.txt)
					.then( () => statusMessage.innerHTML = messagePost.loading)
					.then( () => {
						statusMessage.innerHTML = messagePost.success;
						setTimeout( () => {
							statusMessage.innerHTML = '';
						}, 3000);
						})
					.catch( () => statusMessage.innerHTML = messagePost.failure)
					.then(clearInput);
			
			});
		}
	}

	windowCaclulator();

	//Закрывашки
	let popupCalcCloseBotton = document.getElementsByClassName('popup_calc_close')[0];

	popupCalcCloseBotton.addEventListener('click', function() {

		popupCalc.style.display = 'none';

		tabHideBalcon(0);

		popupBalconBigIcons[0].classList.remove('hide');
		popupBalconBigIcons[0].classList.add('show');

		windowWidth.value = null;

		windowHeight.value = null;

	});
	let popupCalcProfileCloseBotton = document.getElementsByClassName('popup_calc_profile_close')[0];

	popupCalcProfileCloseBotton.addEventListener('click', function() {

		popupCalcProfile.style.display = 'none';

		tabHideBalcon(0);

		popupBalconBigIcons[0].classList.remove('hide');
		popupBalconBigIcons[0].classList.add('show');

		windowWidth.value = null;

		windowHeight.value = null;

		popupTypeOfWork.options[popupTypeOfWork.selectedIndex] = popupTypeOfWork.options[0];

		checkbox[0].checked = false;

		checkbox[1].checked = false;

		checkbox.value = null;
	});

	let popupCalcEndCloseBotton = document.getElementsByClassName('popup_calc_end_close')[0];

	popupCalcEndCloseBotton.addEventListener('click', function() {

		popupCalcEnd.style.display = 'none';

		tabHideBalcon(0);

		popupBalconBigIcons[0].classList.remove('hide');
		popupBalconBigIcons[0].classList.add('show');

		windowWidth.value = null;

		windowHeight.value = null;

		popupTypeOfWork.options[popupTypeOfWork.selectedIndex] = popupTypeOfWork.options[0];

		checkbox[0].checked = false;

		checkbox[1].checked = false;

		checkbox.value = null;
	});
}

module.exports = calculator();
},{}],3:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	let popup = require('../js/popup.js'),
		tab = require('../js/tab.js'),
		tabForWindows = require('../js/tabForWindow.js'),
		bigImages = require('../js/bigImages.js'),
		calculator = require('../js/calculator.js'),
		timer = require('../js/timer.js');
});
},{"../js/bigImages.js":1,"../js/calculator.js":2,"../js/popup.js":4,"../js/tab.js":5,"../js/tabForWindow.js":6,"../js/timer.js":7}],4:[function(require,module,exports){
//Открытие popup а также отвравка формы
function popup(){
	let popupCallWindow = document.getElementsByClassName('popup')[0],
		popupDialog = popupCallWindow.getElementsByClassName('popup_dialog')[0],
		contactUs = document.getElementsByClassName('contact_us')[0],
		feedback = document.getElementsByClassName('feedback_block')[0],
		callMaster = document.getElementsByClassName('header_btn')[0],
		mainForm = document.getElementsByClassName('col-lg-4 col-sm-8 col-sm-offset-2'),
		message = new Object();

	popupCallWindow.style.top = 'auto';
	popupCallWindow.style.left = 'auto';
	message.loading = 'Идет отправка';
	message.success = 'Спасибо, письмо отправлено';
	message.failure = 'К сожелению что-то пошло не так';

	function sendForm(element) {
		let input = element.getElementsByTagName('input'),
			inputName = input[0],
			inputPhone = input[1],
			popupForm = element.getElementsByClassName('form')[0],
			statusMessage = document.createElement('div'),
			elementBtn = element.getElementsByClassName('btn-block')[0];

		function clearInput(){
			for (let i = 0; i < input.length; i++) {
			input[i].value = '';
			}
		}

		clearInput();

		elementBtn.disabled = true;

		statusMessage.classList.add('status');

		popupForm.appendChild(statusMessage);

		element.style.display = 'block';

		inputPhone.addEventListener('change', function(){

			if(isNaN(inputPhone.value) || inputPhone.value == '') {

				statusMessage.innerHTML = "Введите пожалуйста ваш номер телефона, а не набор букв";

				elementBtn.disabled = true;

				} else {

					statusMessage.innerHTML = "Спасибо, теперь все правильно, проверьте ваши данные и если все правильно то смело нажимайте кнопку заказать звонок";

					elementBtn.disabled = false;

					message.txt = encodeURIComponent("Вам пришло сообщение от " + inputName.value + " что бы ему позвонить наберите " + inputPhone.value);

				}
		});
			
		element.addEventListener('submit', function(elem) {

			elem.preventDefault();

			
			function postData(data) {

				return new Promise(function(resolve, reject) {
					let request = new XMLHttpRequest();

					request.open('POST', 'server.php');

					request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

					request.onreadystatechange = function() {

						if (request.readyState < 4) {
							resolve();
						} else if (request.readyState === 4) {
							if (request.status === 200 && request.status < 300) {
								resolve();
							} else {
								reject();
							}
						}
					};

					request.send(data);

				});
			} //End postData

			postData(message.txt)
				.then( () => statusMessage.innerHTML = message.loading)
				.then( () => {
					statusMessage.innerHTML = message.success;
					setTimeout( () => {
						statusMessage.innerHTML = '';
					}, 3000);
					})
				.catch( () => statusMessage.innerHTML = message.failure)
				.then(clearInput);
		
		});

	}

	contactUs.addEventListener('click', function(){

		sendForm(popupCallWindow);
	});

	feedback.addEventListener('click', function(){

		sendForm(popupCallWindow);
	});

	//Крестик
	let popupCloseBotton = popupCallWindow.getElementsByClassName('popup_close')[0];

	popupCloseBotton.addEventListener('click', function() {

		popupCallWindow.style.display = 'none';
	});

	//Подложка
	popupCallWindow.addEventListener('click', function(elem) {
		if (!isDescendant(popupDialog, elem.target)){
		popupCallWindow.style.display = 'none';
		popupCallWindow.style.top = 'auto';
		popupCallWindow.style.left = 'auto';
		}
	});
	//Кнопка вызвать мастера такая зеленая сверху
	callMaster.addEventListener('click', function(){

		sendForm(popupCallWindow);
	});

	//60 секундный popup
	setTimeout(function() {

		sendForm(popupCallWindow);
	}, 60000);

	//Задание отправки формы для всех бланков
	for (let i = 0; i < mainForm.length; i++) {

		sendForm(mainForm[i]);

	}

	//проверка на родителя
	function isDescendant(parent, child) {
	     var node = child.parentNode;
	     while (node != null) {
	         if (node == parent) {
	             return true;
	         }
	         node = node.parentNode;
	     }
	     return false;
	}
}

module.exports = popup();
},{}],5:[function(require,module,exports){
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

module.exports = tab();
},{}],6:[function(require,module,exports){
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

module.exports = tabForWindows();
},{}],7:[function(require,module,exports){
/*jshint esversion: 6 */
//timer 
function timer(){

	let deadline = '2018-09-12',
		eTimer = document.getElementById('eTimer');

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

module.exports = timer();
},{}]},{},[3]);
