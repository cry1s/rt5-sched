function getWeekNum() {
	let thisYear = new Date().getFullYear();
	let firstDay = new Date(0);
	firstDay.setFullYear(thisYear);
	const day = 8.64e7;
	const weekMil = 6.048e8;

	firstDay = firstDay.getTime() - day * firstDay.getDay();
	let now = new Date().getTime();

	week = Math.floor((now - firstDay) / weekMil) - 1;
	return week;
}