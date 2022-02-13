let wrapper = document.getElementById("app"),
    less = document.getElementById("lessonTime"),
    currentTime,
    currentLesson;

//начало построения таблицы расписания
function showLesson(lesson) {
    if (lesson.odd === undefined) {

        return `
			<tr class="lesson" id="lessonLine">
				${` <td class="lesson_item">${lesson.time}</td>
					<td class="lesson_item">${lesson[0]}</td>
					<td class="lesson_item">${lesson[1]}</td>
				`}
			</tr>
		`

    } else {
        return `
				<tr class="lesson weeks">
                    <td class="lesson_item">${lesson.time}</td>
					<td class="lesson_item">
					<div class="odd">
					<span class="lil">1,3</span> ${lesson.odd[0]}
				</div>
                <hr>
				<div class="even">
					<span class="lil">2,4</span> ${lesson.even[0]}
				</div>
				</td>
				<td class="lesson_item weeks">
				<div class="odd">
					${lesson.odd[1]}
				</div>
                    <hr>
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

function appendTime() {
    TimeTable.map(day => {
        lessons = day["lessons"];
        console.log(day.name, lessons.length)
        for (let i = 0; i < lessons.length; i++) {
            if (!lessons[i].time) {
                time = `${zeroBefore(Math.floor(lessonTime[i][0].start 	/ 60))}:${zeroBefore(lessonTime[i][0].start 	% 60)}\n`+
                    `${zeroBefore(Math.floor(lessonTime[i][1].end 	/ 60))}:${zeroBefore(lessonTime[i][1].end 	% 60)}`
                console.log(time);
                lessons[i].time = time;
            }
        }
    })
}
appendTime();
draw(TimeTable);
loadDone();
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
        
		let weekNum = (getWeekNum()) - 33;
        if(weekNum < 0){
            weekNum += 52;
		}
        upper.innerHTML = `${weekNum}${ (weekNum % 100 !== 13 && weekNum % 10 === 3)
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
    console.log(hours);
	let minutes = date.getMinutes();
    //определение пары
	currentTime = hours * 60 + minutes;
    currentLesson = 0;
    document.body.style.backgroundColor = "#edeef0";
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
