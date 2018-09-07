//Открытие popup а также отвравка формы
let popupCallWindow = document.getElementsByClassName('popup')[0],
	popupForm = popupCallWindow.getElementsByClassName('form')[0],
	popupDialog = popupCallWindow.getElementsByClassName('popup_dialog')[0],
	contactUs = document.getElementsByClassName('contact_us')[0],
	feedback = document.getElementsByClassName('feedback_block')[0],
	callMaster = document.getElementsByClassName('header_btn')[0],
	statusMessage = document.createElement('div'),

	message = new Object();

statusMessage.classList.add('status');
popupForm.appendChild(statusMessage);
message.loading = 'Идет отправка';
message.success = 'Спасибо, письмо отправлено';
message.failure = 'К сожелению что-то пошло не так';

function sendForm(element) {
	let input = element.getElementsByTagName('input'),
		inputName = input[0],
		inputPhone = input[1],
		elementBtn = element.getElementsByTagName('button')[0];

	elementBtn.style.disabled = true;

	element.style.display = 'block';

	inputPhone.addEventListener('change', function(){

		if(isNaN(inputPhone.value) || inputPhone.value == '') {

			statusMessage.innerHTML = "Введите пожалуйста ваш номер телефона, а не набор букв";

			elementBtn.style.disabled = true;

			} else {

				statusMessage.innerHTML = "Спасибо, теперь все правильно, проверьте ваши данные и если все правильно то смело нажимайте кнопку заказать звонок";

				elementBtn.style.disabled = false;

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
		function clearInput(){
			for (let i = 0; i < input.length; i++) {
			input[i].value = '';
			}
		}

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
//Кнопка вызватьмастера такая зеленая сверху
callMaster.addEventListener('click', function(){

	sendForm(popupCallWindow);
});

//60 секундный popup
setTimeout(function() {

	sendForm(popupCallWindow);
}, 60000);










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