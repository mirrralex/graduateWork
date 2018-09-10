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