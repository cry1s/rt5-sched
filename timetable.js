//<p class=\"twocabs\">317</p><p class=\"twocabs\">319</p>

let les = {
	"cimpy": {
		"name": "ЦиМПУ",
		"room": "",
	},
	"ig": {
		"name": "ИГ",
		"room": "",
	},
	"msp": {
		"name": "МСП",
		"room": "",
	},
	"fiz": {
		"name": "ФиЗ",
		"room": "",
	},
	"opsist": {
		"name": "ОПСиСТ",
		"room": "",
	},
	"isp": {
		"name": "ИСП",
		"room": "",
	},
	"ksst": {
		"name": "КССТ",
		"room": "",
	},
	"tuids": {
		"name": "ТУиДС",
		"room": "",
	},
	"voennaja": {
		"name": "Военная кафедра",
		"room": "",
	},
}


const TimeTable = [
	{
		name: "Понедельник",
		lessons: [
			"",
			[les.cimpy.name, les.cimpy.room],
			[les.ig.name, les.ig.room],
			[les.ig.name, les.ig.room],
			[les.msp.name, les.msp.room],
		],
	},
	{
		name: "Вторник",
		lessons: [
			"",
			"",
			[les.cimpy.name, les.cimpy.room],
			[les.fiz.name, les.fiz.room],
			[les.opsist.name, les.opsist.room],
			[les.isp.name, les.isp.room],
		]
	},	{
		name: "Среда",
		lessons: [
			"",
			"",
			[les.ksst.name, les.ksst.room],
			[les.tuids.name, les.tuids.room],
			[les.msp.name, les.msp.room],
		]
	},	{
		name: "Четверг",
		lessons: [
			[les.cimpy.name, les.cimpy.room],
			[les.tuids.name, les.tuids.room],
			[les.fiz.name, les.fiz.room],
			[les.ksst.name, les.ksst.room],
		]
	},	{
		name: "Пятница",
		lessons: [
			[les.voennaja.name, ""],
		]
	},	{
		name: "Суббота",
		lessons: [
			{
				odd: [les.opsist.name, les.opsist.room],
				even: ["", ""]
			},
			[les.msp.name, les.msp.room],
			[les.ksst.name, les.ksst.room],
			[les.fiz.name, les.fiz.room],
		]
	},
];
//конец расписания
/*
пустая пара добавляется с помошью ""
обычная пара добавляется:
			["название", "кабинет"],
пара с зависимостью от чётности недели добавляется с помощью:
			{
				odd: ["Название 1,3", "кабинет"],
				even: ["название 2,4", "кабинет"]
			},


 */


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

/*
(часы * 60) + минуты

 */