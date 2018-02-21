{
	var artistIconList = document.querySelectorAll(".artistIcon");

	for (const icon of artistIconList) {
		let name = icon.getAttribute("alt");
		let nameNoSpaces = name.replace(/ /g, "");
		icon.addEventListener(
			"click",
			function() {
				playAudio(nameNoSpaces);
				swapDiv(nameNoSpaces);
			},
			false
		);
	}

	var audio = new Audio(); //establish audio variable
	function playAudio(artistName) {
		audio.pause(); //incase audio is already playing
		audio = new Audio("audio/" + artistName + ".mp3");
		audio.play();
	}

	var oldWrapper = "";
	function swapDiv(artistName) {
		var newWrapper = document.querySelector("#" + artistName);
		if (newWrapper !== oldWrapper) {
			if (oldWrapper !== "") {
				oldWrapper.style.animationDelay = "0s";
				oldWrapper.classList.remove("slideinAnimation");
				if (window.innerWidth > 720) {
					newWrapper.style.animationDelay = "0.6s";
				} else {
					newWrapper.style.animationDelay = "1.5s";
				}
				oldWrapper.classList.add("wipeOutAnimation");
			}
			newWrapper.classList.remove("wipeOutAnimation");
			newWrapper.classList.add("slideinAnimation");
			oldWrapper = newWrapper;
		}
	}
}
