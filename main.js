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
				insertName(nameNoSpaces);
			},
			false
		);
	}

	var form = document.querySelector("form");
	var warning = document.querySelector(".warning");
	function submitForm() {
		var fname = form.elements[0].value;
		var lname = form.elements[1].value;
		var date = form.elements[2].value;
		console.log(date);
		date = date.split("-");

		whichDayOfMonth = date[2];
		whichMonth = date[1];

		AstroSign = "";

		if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
			AstroSign = "Cap";
		} else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
			AstroSign = "Sag";
		} else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
			AstroSign = "Sco";
		} else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
			AstroSign = "Lib";
		} else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
			AstroSign = "Vir";
		} else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
			AstroSign = "Leo";
		} else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
			AstroSign = "Can";
		} else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
			AstroSign = "Gem";
		} else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
			AstroSign = "Tau";
		} else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
			AstroSign = "Ari";
		} else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
			AstroSign = "Pis";
		} else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
			AstroSign = "Aqu";
		}
		if (AstroSign === "") {
			warning.style.display = "block";
		} else {
			warning.style.display = "none";
		}

		var astroSignToArtist = {
			Cap: "GerryMulligan",
			Sag: "TheloniousMonk",
			Sco: "CharlieParker",
			Lib: "MilesDavis",
			Vir: "DukeEllington",
			Leo: "JohnColtrane",
			Can: "BillEvans",
			Gem: "ChetBaker",
			Tau: "CannonballAdderley",
			Ari: "LouisArmstrong",
			Pis: "CountBasie",
			Aqu: "BillieHoliday"
		};
		playAudio(astroSignToArtist[AstroSign]);
		swapDiv(astroSignToArtist[AstroSign]);
		insertName(astroSignToArtist[AstroSign], fname, lname);
	}

	function insertName(artistname, fname = form.elements[0].value, lname = form.elements[1].value) {
		if (fname == "") {
			phrase = "";
		} else {
			if (lname == "") {
				phrase = fname + ", ";
			} else {
				phrase = fname + " " + lname + ", ";
			}
		}
		var desc = document.querySelector("#" + artistname + " .desc");
		text = desc.innerHTML;
		combined = phrase + text;
		combined = combined.charAt(0).toUpperCase() + combined.slice(1);
		desc.innerHTML = combined;
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
