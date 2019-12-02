//firebase
const firebaseConfig = {
	apiKey: "AIzaSyBha4mcbQX96CwqAvl2j-1ja3E-N8ExKmk",
	authDomain: "sw-721.firebaseapp.com",
	databaseURL: "https://sw-721.firebaseio.com",
	projectId: "sw-721",
	storageBucket: "sw-721.appspot.com",
	messagingSenderId: "30613357636",
	appId: "1:30613357636:web:4b2b178ab9168ad5766811"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase end

const db = firebase.database();
let wrapper = document.getElementById("app"),
    less = document.getElementById("lessonTime"),
    currentTime,
    currentLesson;

//начало построения таблицы расписания
function showLesson(lesson) {
    if (lesson.odd === undefined) {

        return `
			<tr class="lesson" id="lessonLine">
				${ (lesson === "")
            ? `
					<td class="lesson_item"></td>
					<td class="lesson_item"></td>
				`
            : `
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

function draw(time) {
    wrapper.innerHTML = `${time.map(showDay).join("")}`;
}

draw(TimeTable);
db.ref('/').once('value').then(function (ans) {
	draw(ans.val());
	loadDone();
});

db.ref('/').on("value", newData => {
	draw(newData.val());
	loadDone();
})

//конец построения таблицы расписания день недели
function loadDone() {
    let lower = document.getElementById("lower");
    let upper = document.getElementById("upper");
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
	if (getWeekNum() !== undefined) {
		let weekNum = (getWeekNum() - 1) % 4;
        if(weekNum === 0){
            weekNum = 4;
        }
        upper.innerHTML = `${weekNum}${ (weekNum === 3)
            ? "-я"
            : "-ая"} неделя`;
    }

    wrapper
        .childNodes[day * 2 - 1]
        .childNodes[3]
        .style
        .borderColor = "#39b9bf";
    wrapper
        .childNodes[day * 2 - 1]
        .childNodes[3]
        .style
        .boxShadow = "0px 4px 6px 0 #d7d8db, 0 2px 2px 1px #e3e4e8";
    wrapper
        .childNodes[day * 2 - 1]
        .childNodes[1]
        .style
        .color = "#39b9bf";
};
//конец дня недели работа с часами

function currentLessonFunc() {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
    //определение пары
	currentTime = hours * 60 + minutes;
    let isPause;
    switch (true) {
        case(currentTime >= 480 - 3 && currentTime <= 580 - 3):
            currentLesson = 1;
            isPause = currentTime > 8 * 60 + 45 && currentTime < 8 * 60 + 55;
            break;
        case(currentTime >= 595 - 3 && currentTime <= 695 - 3):
            currentLesson = 2;
            isPause = currentTime > 10 * 60 + 40 && currentTime < 10 * 60 + 50;
            break;
        case(currentTime >= 735 - 3 && currentTime <= 835 - 3):
            currentLesson = 3;
            isPause = currentTime > 13 * 60 && currentTime < 13 * 60 + 10;
            break;
        case(currentTime >= 850 - 3 && currentTime <= 950 - 3):
            currentLesson = 4;
            isPause = currentTime > 14 * 60 + 55 && currentTime < 15 * 60 + 5;
            break;
        case(currentTime >= 980 - 3 && currentTime <= 1080 - 3):
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
        let percent = (currentTime - lessonTime[currentLesson - 1][0].start) / (
            lessonTime[currentLesson - 1][1].end - lessonTime[currentLesson - 1][0].start
        );
        let x = 246 - (percent * 246);

        document.body.style.backgroundColor = "#e9f0ed";
        if (isPause) {
            wrapper
                .childNodes[(new Date().getDay()) * 2 - 1]
                .childNodes[3]
                .childNodes[1]
                .childNodes[currentLesson * 2 - 2]
                .childNodes[1]
                .style
                .background = "url(img/bg_blue.png) no-repeat -" + x + "px";
        } else {
            wrapper
                .childNodes[(new Date().getDay()) * 2 - 1]
                .childNodes[3]
                .childNodes[1]
                .childNodes[currentLesson * 2 - 2]
                .childNodes[1]
                .style
                .background = "url(img/bg.png) no-repeat -" + x + "px";
        }
    }
    //конец подкраски фона пары
}

currentLessonFunc();
setInterval(() => currentLessonFunc(), 5000);


if (currentLesson !== 0) {
    var clock = document.createElement("div");
    clock.className = "clock";
    document
        .getElementById("wrapper")
        .insertBefore(clock, null);
}

function left() {
     if (currentLesson !== 0) {
        clock.innerHTML = `
<p>1 half: ${
	zeroBefore(Math.floor(lessonTime[currentLesson - 1][0].start / 60))}:${zeroBefore(lessonTime[currentLesson - 1][0].start)}
 - ${Math.floor(lessonTime[currentLesson - 1][0].end / 60)}:${ zeroBefore(lessonTime[currentLesson - 1][0].end)}
<br>
2 half: ${
	zeroBefore(Math.floor(lessonTime[currentLesson - 1][1].start / 60))}:${zeroBefore(lessonTime[currentLesson - 1][1].start)}
 - ${Math.floor(lessonTime[currentLesson - 1][1].end / 60)}:${zeroBefore(lessonTime[currentLesson - 1][1].end)}</p>`;
    }
}
left();
setInterval(left, 1000);
//конец работы с часами

function zeroBefore(num){
	let ret;
	if(num % 60 < 10){
		ret = "0" + num % 60;
	} else {
		ret = ""+num % 60;
	}
	return ret
}