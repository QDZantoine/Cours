const points = [
	'IT IS CERTAIN',
	'WHITOUT A DOUBT',
	'YOU MAY RELAY IT',
	'YES DEFINITELY',
	'IT IS DECIDELDY SO',
	'AS I SEE IT, YES',
	'MOST LIKELY',
	'YES',
	'Outlook good',
	'Signs point to yes',
	'Reply hazy try again',
	'Better not tell you now',
	'Ask again later',
	'Cannot predict now',
	'Concentrate and ask again',
	'Don’t count on it',
	'Outlook not so good',
	'My sources say no',
	'Very doubtful',
	'My reply is no',
];
document.getElementById('response').innerHTML = points;

function myFunction() {
	points.sort(function (a, b) {
		return 0.5 - Math.random();
	});
	document.getElementById('response').innerHTML = points[0];
	document.getElementById('response').style.fontSize = '18px';
	setTimeout(timeup, 4000);

	function timeup() {
		document.getElementById('response').innerHTML = '';
		document.getElementById('response').style.fontSize = '120px';
		document.getElementById('clear').value = '';
	}
}
