//Открытие popup а также отвравка формы
let popupCallWindow = document.getElementsByClassName('popup')[0],
	popupForm = popupCallWindow.getElementsByClassName('form')[0],
	popupDialog = popupCallWindow.getElementsByClassName('popup_dialog')[0],
	contactUs = document.getElementsByClassName('contact_us')[0],
	feedback = document.getElementsByClassName('feedback_block')[0],
	statusMessage = document.createElement('div'),
	popupConfWindow = document.getElementsByClassName('popup_engineer')[0],
	callMaster = document.getElementsByClassName('header_btn_wrap_block')[0],
	message = new Object();

statusMessage.classList.add('status');
popupForm.appendChild(statusMessage);
message.loading = 'Загрузка...';
message.success = 'Спасибо мы вам перезвоним';
message.failure = 'К сожелению что-то пошло не так';

function sendForm(element) {
	let input = element.getElementsByTagName('input'),
		inputName = input[0],
		inputPhone = input[1],
		elementBtn = element.getElementsByClassName('btn-block')[0],
		correctForm = element.getElementsByClassName('popup_form')[0];

	elementBtn.disabled = true;

	message.txt = encodeURIComponent("Вам пришло сообщение от " + inputName.value + " что бы ему позвонить наберите " + inputPhone.value);

	element.style.display = 'block';

	inputPhone.addEventListener('change', function() {

	if (isNaN(inputPhone.value) || inputPhone == '') {

		correctForm.style.backgroundColor = 'red';

		elementBtn.disabled = true;

		statusMessage.innerHTML = "Нужно ввести цифры а не буквы в графу введите телефон";
	
	} else {

		correctForm.style.backgroundColor = 'green';

		elementBtn.disabled = false;

		statusMessage.innerHTML = "Все правильно, спасибо. Проверьте ваши данные и если они правильны смело нажимайте 'Заказать звонок'";

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
				function clearInput(){
					for (let i = 0; i < input.length; i++) {
					input[i].value = '';
					}
				}

				postData(message.txt)
					.catch(() => statusMessage.innerHTML = "Нужно ввести цифры а не буквы в графу введите телефон")
					.then( () => statusMessage.innerHTML = message.loading)
					.then( () => {
						statusMessage.innerHTML = message.success;
						setTimeout( () => {
							correctForm.style.backgroundColor = "white";
							statusMessage.innerHTML = '';
						}, 3000);
						})
					.catch( () => statusMessage.innerHTML = message.failure)
					.then(clearInput);
			});
		}
	});

}
//60 секунд и popup
setTimeout(function() {

	sendForm(popupCallWindow);
}, 6000);

//Заказать обратный звонок
contactUs.addEventListener('click', function(){

	sendForm(popupCallWindow);
});
//Спростие нашего специалиста
feedback.addEventListener('click', function(){

	sendForm(popupCallWindow);
});
//Заказать сегодня на замер
callMaster.addEventListener('click', function(){

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
	}
});

function isDescendant(parent, child) {
     let node = child.parentNode;
     while (node != null) {
         if (node == parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}
//test