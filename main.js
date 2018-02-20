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
					submit(artistName);
				},
				false
			);
			console.log("created event listener for " + artistName + "icon");
		})();
	}

	var audio = new Audio(); //establish audio variable
	function submit(artistName) {
		console.log("calling audio for " + artistName);
		audio.pause(); //incase audio is already playing
		audio = new Audio("audio/" + artistName + ".mp3");
		audio.play();
	}
})();
