"use strict";

var header = document.querySelector("#header");
var aboutme = document.querySelector("#aboutme");
var skills = document.querySelector("#skills");
var work = document.querySelector("#work");
var aboutmeBtn = document.querySelector("#aboutmeBtn");
var skillsBtn = document.querySelector("#skillsBtn");
var workBtn = document.querySelector("#workBtn");

aboutmeBtn.onclick = function (event) {
	event.preventDefault();
	window.scrollTo(0, header.clientHeight);
};

skillsBtn.onclick = function (event) {
	event.preventDefault();
	window.scrollTo(0, header.clientHeight + aboutme.clientHeight);
};

workBtn.onclick = function (event) {
	event.preventDefault();
	window.scrollTo(0, header.clientHeight + aboutme.clientHeight + skills.clientHeight);
};