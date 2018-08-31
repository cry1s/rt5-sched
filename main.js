//само расписание
var group = 1;
var wrapper = document.getElementById("app");
var less = document.getElementById("lessonTime");
var currentTime;
var currentLesson;

const lessonTime = [
	//первая пара
	[
		{
			start: (8 * 60),
			end: (8 * 60) + 45,
		},
		{
			start: (8 * 60) + 55,
			end: (9 * 60) + 40
		}
	],
	//вторая
	[
		{
			start: (9 * 60) + 55,
			end: (10 * 60) + 40,
		},
		{
			start: (10 * 60) + 50,
			end: (11 * 60) + 35
		}
	],
	//третья
	[
		{
			start: (12 * 60) + 15,
			end: (13 * 60),
		},
		{
			start: (13 * 60) + 10,
			end: (13 * 60) + 55
		}
	],
	//четвертая
	[
		{
			start: (14 * 60) + 10,
			end: (14 * 60) + 55,
		},
		{
			start: (15 * 60) + 5,
			end: (15 * 60) + 50
		}
	],
	//пятая
	[
		{
			start: (16 * 60) + 20,
			end: (17 * 60) + 5,
		},
		{
			start: (17 * 60) + 15,
			end: (18 * 60)
		}
	],

];

const TimeTable = [
	{
		name: "Понедельник",
		lessons: [
			"",
			["Ц и МПУ", ""],
			["ИСТК", ""],
			["ФиЗ", ""],
			{
				odd: ["", ""],
				even: ["М и И", ""]
			},
		],
	},
	{
		name: "Вторник",
		lessons: [
			"",
			["Охрана труда", ""],
			["ТУ и ДС", ""],
			["Ц и МПУ", ""],
			["ООП", ""],
		]
	},	{
		name: "Среда",
		lessons: [
			["Инженерная графика", ""],
			{
				odd: ["Ц и МПУ", ""],
				even: ["ООП", ""]
			},
			["Охрана труда", ""],
			["ФиЗ", ""],
		]
	},	{
		name: "Четверг",
		lessons: [
			"",
			["Ц и МПУ", ""],
			["ТУ и ДС", ""],
			["ТЭС", ""],
			["М и И", ""],
		]
	},	{
		name: "Пятница",
		lessons: [
			"",
			["ООП", ""],
			{
				odd: ["ОПС и СТ", ""],
				even: ["ТЭС", ""]
			},
			["ФиЗ", ""],
			["НСТК", ""],
		]
	},	{
		name: "Суббота",
		lessons: [
			"",
			["М и И", "109"],
			["ОПС и СТ", "123"],
		]
	},
];
//конец расписания

//начало построения таблицы расписания
function showLesson(lesson) {
	if (lesson.odd === undefined) {

		return `
			<tr class="lesson" id="lessonLine">
				${(lesson === "") ? `
					<td class="lesson_item"></td>
					<td class="lesson_item"></td>
				` : `
					<td class="lesson_item">${lesson[0]}</td>
					<td class="lesson_item">${lesson[1]}</td>
				`}
			</tr>
		`

	} else {
		return `
			<tr class="lesson weeks">
				<td class="lesson_item">
	      	<div class="odd">
	        	<span class="lil">1,3</span> ${lesson.odd[0]}
	        </div>
	        <div class="even">
	          <span class="lil">2,4</span> ${lesson.even[0]}
	        </div>
	      </td>
	      <td class="lesson_item weeks">
	        <div class="odd">
	          ${lesson.odd[1]}
	        </div>
	        <div class="even">
	          ${lesson.even[1]}
	        </div>
	      </td>
	    </tr>
		`
	}

}

function showDay(day) {
	return `
		<div class="item">
			<p>${day.name}</p>
			<table class="timetable">
				${day.lessons.map(showLesson).join(" ")}
			</table>
		</div>
	`
}

function draw() {
	if (group === 1) {
		wrapper.innerHTML = `${TimeTable.map(showDay).join("")}`;
	} else {
		wrapper.innerHTML = `${TimeTable2.map(showDay).join("")}`;
	}
}

draw();
//конец построения таблицы расписания0

//день недели
window.onload = function () {
	let lower = document.getElementById("lower");
	let day = (new Date()).getDay();
	switch (day) {
		case 1:
			lower.innerHTML = "понедельник";
			break;
		case 2:
			lower.innerHTML = "вторник";
			break;
		case 3:
			lower.innerHTML = "среда";
			break;
		case 4:
			lower.innerHTML = "четверг";
			break;
		case 5:
			lower.innerHTML = "пятница";
			break;
		case 6:
			lower.innerHTML = "суббота";
			break;
		case 0:
			lower.innerHTML = "воскресенье";
			break;
	}
	wrapper.childNodes[day * 2 - 1].childNodes[3].style.borderColor = "#39b9bf";
	wrapper.childNodes[day * 2 - 1].childNodes[3].style.boxShadow = "0px 4px 6px 0 #d7d8db, 0 2px 2px 1px #e3e4e8";
	wrapper.childNodes[day * 2 - 1].childNodes[1].style.color = "#39b9bf";
};
//конец дня недели

//работа с часами
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();

function currentLessonFunc() {
	//определение пары
	currentTime = hours * 60 + minutes;
	let isPause;
	switch (true) {
		case (currentTime >= 480 - 3 && currentTime <= 580 - 3):
			currentLesson = 1;
			isPause = currentTime > 8 * 60 + 45 && currentTime < 8 * 60 + 55;
			break;
		case (currentTime >= 595 - 3 && currentTime <= 695 - 3):
			currentLesson = 2;
			isPause = currentTime > 10 * 60 + 40 && currentTime < 10 * 60 + 50;
			break;
		case (currentTime >= 735 - 3 && currentTime <= 835 - 3):
			currentLesson = 3;
			isPause = currentTime > 13 * 60 && currentTime < 13 * 60 + 10;
			break;
		case (currentTime >= 850 - 3 && currentTime <= 950 - 3):
			currentLesson = 4;
			isPause = currentTime > 14 * 60 + 55 && currentTime < 15 * 60 + 5;
			break;
		case (currentTime >= 980 - 3 && currentTime <= 1080 - 3):
			currentLesson = 5;
			isPause = currentTime > 17 * 60 + 5 && currentTime < 17 * 60 + 15;
			break;
		default:
			currentLesson = 0;
	}
//конце определения пары

	if (currentLesson === 0) {
		document.body.style.backgroundColor = "#edeef0";
	} else {
		let percent = (currentTime - lessonTime[currentLesson - 1][0].start) / (lessonTime[currentLesson - 1][1].end - lessonTime[currentLesson - 1][0].start);
		let x = 246 - (percent * 246);

		document.body.style.backgroundColor = "#e9f0ed";
		if (isPause) {
			wrapper.childNodes[(new Date().getDay()) * 2 - 1].childNodes[3].childNodes[1].childNodes[currentLesson * 2 - 2].childNodes[1].style.background = "url(img/bg_blue.png) no-repeat -" + x + "px";
		} else {
			wrapper.childNodes[(new Date().getDay()) * 2 - 1].childNodes[3].childNodes[1].childNodes[currentLesson * 2 - 2].childNodes[1].style.background = "url(img/bg.png) no-repeat -" + x + "px";
		}
	}
//конец подкраски фона пары
}

currentLessonFunc();
setInterval(() => currentLessonFunc(), 1000/30);

if (currentLesson !== 0) {

	let clock = document.createElement("div");
	clock.className = "clock";
	document.getElementById("wrapper").insertBefore(clock, null);
}

function left() {
	clock.innerHTML = `
1 half: ${Math.floor(lessonTime[currentLesson - 1][0].start / 60)}:${(lessonTime[currentLesson - 1][0].start % 60) < 10 ? "0" + lessonTime[currentLesson - 1][0].start % 60 : lessonTime[currentLesson - 1][0].start % 60}
 -
${Math.floor(lessonTime[currentLesson - 1][0].end / 60)}:${(lessonTime[currentLesson - 1][0].end % 60) < 10 ? "0" + lessonTime[currentLesson - 1][0].end % 60 : lessonTime[currentLesson - 1][0].end % 60}
<br>
2 half: ${Math.floor(lessonTime[currentLesson - 1][1].start / 60)}:${(lessonTime[currentLesson - 1][1].start % 60) < 10 ? "0" + lessonTime[currentLesson - 1][1].start % 60 : lessonTime[currentLesson - 1][1].start % 60}
 -
${Math.floor(lessonTime[currentLesson - 1][1].end / 60)}:${(lessonTime[currentLesson - 1][1].end % 60) < 10 ? "0" + lessonTime[currentLesson - 1][1].end % 60 : lessonTime[currentLesson - 1][1].end % 60}`;
}

left();
setInterval(left, 1000);
//конец работы с часами
