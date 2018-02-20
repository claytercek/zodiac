(function() {
	var artistIconList = document.querySelectorAll(".artistIcon");

	for (i = 0; i < 12; i++) {
		(function() {
			var artistName = artistIconList[i]
				.getAttribute("src")
				.split("/")
				.pop()
				.split(".")[0];

			artistIconList[i].addEventListener(
				"click",
				function() {
					playAudio(artistName);
					swapText(artistName);
					reAnimate();
				},
				false
			);
			console.log("created event listener for " + artistName + "icon");
		})();
	}

	var audio = new Audio(); //establish audio variable
	function playAudio(artistName) {
		console.log("calling audio for " + artistName);
		audio.pause(); //incase audio is already playing
		audio = new Audio("audio/" + artistName + ".mp3");
		audio.play();
	}

	function swapText(artistName) {
		nameWithSpace = artistName.replace(/([A-Z])/g, " $1").trim();
		console.log("swapping text to " + nameWithSpace);
		document.querySelector("#artistNameHeader").innerHTML = nameWithSpace;
	}

	function reAnimate() {
		infoWrapper = document.querySelector(".infoWrapper");
		infoWrapper.classList.remove("slideinAnimation");
		infoWrapper.offsetWidth;
		infoWrapper.classList.add("slideinAnimation");
	}
})();
