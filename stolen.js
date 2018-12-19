function getWeekNum() { //Выводим инфо о номере недели в году и семестре
	let currentDateTime = new Date();
	let startTimeOfCurrentYear = (new Date(currentDateTime.getFullYear(), 0, 1)).getTime();
	let currentTime = currentDateTime.getTime();
	let pastTimeOfStartCurrentYear = currentTime - startTimeOfCurrentYear;
	let hourOfMillisecs = 3600000;
	let hoursOfOneWeek = 168;

	return Math.ceil(pastTimeOfStartCurrentYear / hourOfMillisecs / hoursOfOneWeek);

//	document.write("С начала года: <br />");
//	document.write("Прошло " + (pastTimeOfStartCurrentYear / hourOfMillisecs).toFixed(2) + " часов<br />");
//	document.write("Прошло " + (pastTimeOfStartCurrentYear / hourOfMillisecs / hoursOfOneWeek).toFixed(2) + " недель");
}