var studyWeekNum,
	calStartDOW = 1; //С чего начинать неделю, в США день 0 (Вс), в мире день 1 (Пн)

function getWeekNum(day, month, year) { //Корректно определяем номер недели в году
    if (calStartDOW === 0) 
        day++; //Чтоб работало и для САЩ :)
    month++; //в JS месяцы нумеруются с нуля!
    var a = Math.floor((14 - month) / 12);
    var y = year + 4800 - a;
    var m = month + 12 * a - 3;
    var J = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(
        y / 100
    ) + Math.floor(y / 400) - 32045;
    d4 = (((J + 31741 - (J % 7)) % 146097) % 36524) % 1461;
    var L = Math.floor(d4 / 1460);
    var d1 = ((d4 - L) % 365) + L;
    var week = Math.floor(d1 / 7) + 1;
    if (week < 10) 
        week = '0' + week; //Лидирующий ноль для недель 1-9
    return week;
}

function numWeekSep(Y) { //Найти номер недели начала учебного года для года Y
    var date1 = new Date(Y, 9 - 1, 1);
    var wd1 = date1.getDay();
    var nw1 = getWeekNum(1, 9 - 1, Y);
    if (wd1 == 0 || wd1 == 6) 
        nw1++; //Если 1 сент. - Сб или Вс, начнём со след. Пн
    return nw1;
}

function weekInfo() { //Выводим инфо о номере недели в году и семестре
    var date = new Date();
    var Y = date.getFullYear();
    var M = date.getMonth();
    var D = date.getDate();
    var NW = getWeekNum(D, M, Y);
    // Ниже - "неуниверсальная" часть функции Определяем неделю начала учебного года
    // и номер недели в осеннем семестре
    if (M > 8 - 1) { //осенний семестр - с 1 сентября, если оно не Сб или Вс, тогда со след. Пн
        var nw1 = numWeekSep(Y);
        var num = NW - nw1 + 2; //номер недели семестра  TODO: на случай замены даты, смотреть тут!
        if (num > 0 && num < 16) { //Показываем не дольше 15 недель
            studyWeekNum = num;
        }
    }
}

function main() {
    weekInfo();
    window.setTimeout('main()', 60000); //Обновлять раз в минуту
}

main();