const header = document.querySelector("#header");
const aboutme = document.querySelector("#aboutme");
const skills = document.querySelector("#skills");
const work = document.querySelector("#work");
const aboutmeBtn = document.querySelector("#aboutmeBtn");
const skillsBtn = document.querySelector("#skillsBtn");
const workBtn = document.querySelector("#workBtn");

aboutmeBtn.onclick = function(event) {
	event.preventDefault();
	window.scrollTo(0, header.clientHeight);
}

skillsBtn.onclick = function(event) {
	event.preventDefault();
	window.scrollTo(0, header.clientHeight+aboutme.clientHeight);
}

workBtn.onclick = function(event) {
	event.preventDefault();
	window.scrollTo(0, header.clientHeight+aboutme.clientHeight+skills.clientHeight);
}

