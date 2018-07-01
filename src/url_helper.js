export default class UrlHelper {
	constructor() {
		this.url = "http://requestbin.fullcontact.com/1516j1r1";
		this.updateUrl = this.updateUrl.bind(this)
		this.submitUserData = this.submitUserData.bind(this)
		document.querySelector("#url-submit-button").addEventListener("click", this.updateUrl)
		document.querySelector("#my-submit-btn").addEventListener("click", this.submitUserData)
	}

	//updates requestbin url
	updateUrl(e){
		e.preventDefault();
		this.url = $('.new-url-input').val()
	}

	//submits user information from modal
	submitUserData(e){
		e.preventDefault()

		var infoArray = []
		$('.user-information-input').each(function(){
			infoArray.push($(this).val());
		});
		var informationHash = { 'firstName': infoArray[0], 'lastName': infoArray[1], 'emailAddress': infoArray[2] }

		$.ajax({
			type: "POST",
			url: this.url,
			data: JSON.stringify(informationHash),
			dataType: "json",
			success: alert("Data successfully sent!")
		});

	}
}
