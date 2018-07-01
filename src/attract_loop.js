export default class AttractLoop {
	constructor(){
		this.loadImages = this.loadImages.bind(this);
		this.init = this.init.bind(this);
		window.setInterval(this.loadImages, 2000);
	}

	loadImages(){
		var imageContainer = document.querySelector('.attract-image');
		var imagesArray = ['/public/com1.jpg', '/public/com2.jpg', '/public/com3.jpg', '/public/com4.jpg'];
		var length = imagesArray.length
		var randomInt = Math.floor(Math.random() * Math.floor(length));
		imageContainer.setAttribute('style', `background-image: url(${imagesArray[randomInt]})`)
	}

	init(){
		var clickMe = '.click-me';
		var attractWrapper = '.attract-wrapper';

		document.querySelector(clickMe).addEventListener('click', function(){
			document.querySelector(attractWrapper).style.display = 'none'
		});


		document.querySelectorAll('.close-the-modal').forEach(function(button){
			button.addEventListener('click', function(){
				document.querySelector(attractWrapper).style.display = 'block'
			});
		})

		document.querySelector('#my-submit-btn').addEventListener('click', function(){
			document.querySelector(attractWrapper).style.display = 'block'
		});
	}

}