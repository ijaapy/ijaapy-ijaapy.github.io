// bron: http://stackoverflow.com/questions/6893080/html5-audio-play-sound-repeatedly-on-click-regardless-if-previous-iteration-h

// een arrray met paths naar alle audio bestanden
var audioSamples = [
	'samples/kick.wav',
	'samples/snare.wav',
	'samples/clap.wav',
	'samples/hihat.wav',
	'samples/openhat.wav',
	'samples/crash.wav'
]

// een array met een audio function voor elk audio bestand
var audioFunctions = [
	new Audio(audioSamples[0]),
	new Audio(audioSamples[1]),
	new Audio(audioSamples[2]),
	new Audio(audioSamples[3]),
	new Audio(audioSamples[4]),
	new Audio(audioSamples[5])
]

// een array met alle buttons waar op geklikt moet worden
var buttons = [
	document.getElementsByTagName('li')[0],
	document.getElementsByTagName('li')[1],
	document.getElementsByTagName('li')[2],
	document.getElementsByTagName('li')[3],
	document.getElementsByTagName('li')[4],
	document.getElementsByTagName('li')[5],
]

// op basis van welke toets er wordt ingedrukt wordt er een geluid afgespeeld en een class toegevoegd 
function playSound(whichKey) {
	switch (whichKey) {
		case 65:
			buttons[0].classList.add('selected');
			var click = audioFunctions[0].cloneNode();
			click.volume = 1;
			click.play();
			break;

		case 83:
			buttons[1].classList.add('selected');
			var click = audioFunctions[1].cloneNode();
			click.volume = 0.6;
			click.play();
			break;

		case 68:
			buttons[2].classList.add('selected');
			var click = audioFunctions[2].cloneNode();
			click.volume = 1;
			click.play();
			break;

		case 70:
			buttons[3].classList.add('selected');
			var click = audioFunctions[3].cloneNode();
			click.volume = 1;
			click.play();
			break;

		case 71:
			buttons[4].classList.add('selected');
			var click = audioFunctions[4].cloneNode();
			click.volume = 1;
			click.play();
			break;

		case 72:
			buttons[5].classList.add('selected');
			var click = audioFunctions[5].cloneNode();
			click.volume = 1;
			click.play();
			break;
	}
}

// haalt de class weer weg
function removeClass(whichKey) {
	switch (whichKey) {
		case 65:
			buttons[0].classList.remove('selected');
			break;

		case 83:
			buttons[1].classList.remove('selected');
			break;

		case 68:
			buttons[2].classList.remove('selected');
			break;

		case 70:
			buttons[3].classList.remove('selected');
			break;

		case 71:
			buttons[4].classList.remove('selected');
			break;

		case 72:
			buttons[5].classList.remove('selected');
			break;
	}
}

// eventlisteners die kijken welke toetsen er worden ingetoetst en vervolgens de funcites aanroepen
document.addEventListener("keydown", function(e) {
	playSound(e.keyCode);
}, false);

document.addEventListener("keyup", function(e) {
	removeClass(e.keyCode)
}, false);

// eventlisteners voor als je met de muis een knop indrukt
buttons[0].addEventListener("mousedown", function(e) {
	playSound(65);
}, false);

buttons[1].addEventListener("mousedown", function(e) {
	playSound(83);
}, false);

buttons[2].addEventListener("mousedown", function(e) {
	playSound(68);
}, false);

buttons[3].addEventListener("mousedown", function(e) {
	playSound(70);
}, false);

buttons[4].addEventListener("mousedown", function(e) {
	playSound(71);
}, false);

buttons[5].addEventListener("mousedown", function(e) {
	playSound(72);
}, false);

// mousedown
buttons[0].addEventListener("mouseup", function(e) {
	removeClass(65)
}, false);

buttons[1].addEventListener("mouseup", function(e) {
	removeClass(83)
}, false);

buttons[2].addEventListener("mouseup", function(e) {
	removeClass(68)
}, false);

buttons[3].addEventListener("mouseup", function(e) {
	removeClass(70)
}, false);

buttons[4].addEventListener("mouseup", function(e) {
	removeClass(71)
}, false);

buttons[5].addEventListener("mouseup", function(e) {
	removeClass(72)
}, false);