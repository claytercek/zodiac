(function() {
	var artistIconList = document.querySelectorAll(".artistIcon");

	for (i = 0; i < 12; i++) {
		(function() {
			var name = artistIconList[i].getAttribute("alt");
			var nameNoSpaces = name.replace(/ /g, "");
			artistIconList[i].addEventListener(
				"click",
				function() {
					playAudio(nameNoSpaces);
					lazyLoad(name, nameNoSpaces);
					swapDiv(nameNoSpaces);
				},
				false
			);
			console.log("created event listener for " + nameNoSpaces + "icon");
		})();
	}

	var audio = new Audio(); //establish audio variable
	function playAudio(artistName) {
		console.log("calling audio for " + artistName);
		audio.pause(); //incase audio is already playing
		audio = new Audio("audio/" + artistName + ".mp3");
		audio.play();
	}

	var oldWrapper = "";
	function swapDiv(artistName) {
		console.log("swapping text to " + artistName);
		var newWrapper = document.querySelector("#" + artistName);
		if (newWrapper !== oldWrapper) {
			if (oldWrapper !== "") {
				oldWrapper.style.animationDelay = "0s";
				oldWrapper.classList.remove("slideinAnimation");
				newWrapper.style.animationDelay = "0.6s";
				oldWrapper.classList.add("wipeOutAnimation");
			}
			newWrapper.classList.remove("wipeOutAnimation");
			newWrapper.classList.add("slideinAnimation");
			oldWrapper = newWrapper;
		}
		if (window.innerWidth < 720) {
			moveIconGrid(artistName);
		}
	}

	function lazyLoad(name, noSpaces) {
		var img = document.querySelector("#" + noSpaces + " div img");
		img.setAttribute("src", "images/artistPics/" + noSpaces + ".jpg");
		img.setAttribute("alt", name);
	}
})();
