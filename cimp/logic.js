const vars1 = [
	[0x01, 0xff],	//1
	[0xC6, 0x83],	//2
	[0xcd, 0xf4],	//3
	[0x13, 0x43],	//4
	[0x05, 0xa2],	//5
	[0x03, 0x13],	//6
	[0x06, 0x25],	//7
	[0x8b, 0x83],	//8
	[0x63, 0x6b],	//9
	[0x53, 0x51],	//10
	[0x40, 0x45],	//11
	[0x30, 0x31],	//12
	[0x22, 0x23],	//13
	[0x9a, 0x9b],	//14
];

const task2 = [
	{
		"A": "2000",
		"B": " ",
		"C": "lxi",
		"D": "hl, 2030h",
		"E": "21 30 20",
		"F": 3,
		"G": "HL ← 2030h"
	},
	{
		"A": "2003",
		"B": " ",
		"C": "mvi",
		"D": "d, 09h",
		"E": "16 09",
		"F": 2,
		"G": "d ← 09h"
	},
	{
		"A": "2005",
		"B": " ",
		"C": "mvi",
		"D": "e, 10h",
		"E": "1e 10",
		"F": 2,
		"G": "e ← 10h"
	},
	{
		"A": "2007",
		"B": "m1:",
		"C": "mov",
		"D": "m,d",
		"E": "72",
		"F": 1,
		"G": "m ← (d)"
	},
	{
		"A": "2008",
		"B": " ",
		"C": "inx",
		"D": "hl",
		"E": "23",
		"F": 1,
		"G": "hl ← (hl) + 1"
	},
	{
		"A": "2009",
		"B": "",
		"C": "dcr",
		"D": "e",
		"E": "1d",
		"F": 1,
		"G": "e ← (e) - 1"
	},
	{
		"A": "200a",
		"B": "",
		"C": "jnz",
		"D": "m1",
		"E": "c2 07 20",
		"F": 3,
		"G": "Tnz m1"
	},
	{
		"A": "200d",
		"B": "",
		"C": "lxi",
		"D": "hl, 2030h",
		"E": "21 30 20",
		"F": 3,
		"G": "hl ← 2030h"
	},
	{
		"A": "2010",
		"B": "",
		"C": "mvi",
		"D": "e, 10h",
		"E": "1e 10",
		"F": 2,
		"G": "e ←10h"
	},
	{
		"A": "2012",
		"B": "",
		"C": "lxi",
		"D": "sp, 2045h",
		"E": "31 45 20",
		"F": 3,
		"G": "sp ← 2045h"
	},
	{
		"A": "2015",
		"B": "",
		"C": "mvi",
		"D": "c, 00h",
		"E": "0e 00",
		"F": 2,
		"G": "c ← 0h"
	},
	{
		"A": "2017",
		"B": "m2:",
		"C": "call",
		"D": "m3",
		"E": "cd 1f 20",
		"F": 3,
		"G": "jump m3"
	},
	{
		"A": "201a",
		"B": "",
		"C": "dcr",
		"D": "e",
		"E": "1d",
		"F": 1,
		"G": "e ← (e) - 1"
	},
	{
		"A": "201b",
		"B": "",
		"C": "jnz",
		"D": "m2",
		"E": "c2 17 20",
		"F": 3,
		"G": "Tnz m2"
	},
	{
		"A": "201e",
		"B": "",
		"C": "hlt",
		"D": "",
		"E": "76",
		"F": 1,
		"G": "Останов"
	}
]

const task22 = [
	{
		"A": "201F",
		"B": "M3:",
		"C": "MOV",
		"D": "A,C",
		"E": "79",
		"F": 1,
		"G": "a ← (c)"
	},
	{
		"A": "2020",
		"B": "",
		"C": "ADD",
		"D": "M",
		"E": "86",
		"F": 1,
		"G": "a  ← (a) + (m)"
	},
	{
		"A": "2021",
		"B": "",
		"C": "INX",
		"D": "HL",
		"E": "23",
		"F": 1,
		"G": "hl ← (hl) + 1"
	},
	{
		"A": "2022",
		"B": "",
		"C": "MOV",
		"D": "C,A",
		"E": "4F",
		"F": 1,
		"G": "c ← (a)"
	},
	{
		"A": "2023",
		"B": "",
		"C": "RET",
		"D": "",
		"E": "C9",
		"F": 1,
		"G": "возврат"
	}
]


const
	setupMenu	= document.querySelector(".setup"),
	input		= document.querySelector(".varin"),
	start		= document.querySelector(".start"),
	alt			= document.querySelector(".alt"),
	out			= document.querySelectorAll(".out"),
	done_task	= document.querySelector(".done_task");

window.onload = () => {
	if(localStorage.getItem("taskvar") != null){
		input.value = localStorage.getItem("taskvar");
	}
}

start.onclick = () => {
	//проверка наличия варианта
	if (input.value == ""){
		document.querySelector(".attention").classList.remove("hidden");
		input.style.border = "1px solid #E32636"
		return;
	}
	const
	variant	= input.value,
	c1		= vars1[variant - 1][0],
	c2		= vars1[variant - 1][1];

	localStorage.setItem("taskvar", variant);
	
	let task2var;
	switch (parseFloat(variant, 10)) {
		case 1:
		case 3:
		case 5:
		case 7:
			task2var = 0x05;
			break;
		case 2:
		case 4:
		case 6:
			task2var = 0x0a;
			break;
		case 8:
		case 10:
		case 12:
		case 14:
			task2var = 0x09;
			break;
		case 9:
		case 11:
		case 13:
			task2var = 0x0d;
			break;
	
		default:
			alert("Some kinda error");
			task2var = 0x05;
			break;
	}
	//задание 1
	out[0].innerHTML = `
		<p>${c1.toString(16)}<sub>(16)</sub> = ${convToBin(c1)}<sub>(2)</sub> => ${goFirstTask(c1)}<sub>(2)</sub> = ${parseInt(goFirstTask(c1), 2).toString(16)}<sub>(16)</sub></p>
		<p>${c2.toString(16)}<sub>(16)</sub> = ${convToBin(c2)}<sub>(2)</sub> => ${goFirstTask(c2)}<sub>(2)</sub> = ${parseInt(goFirstTask(c2), 2).toString(16)}<sub>(16)</sub></p>
	`;

	document.querySelectorAll(".variant").forEach((elem)=>{
		elem.innerHTML = c1.toString(16);
	});

	//задание 2
	out[1].innerHTML = `
		<p>${task2var.toString(16)}<sub>(16)</sub> => ${task2var}<sub>(10)</sub></p>
		<p>10<sub>(16)</sub> => 16<sub>(10)</sub></p>
		<p>${task2var} * 16 = ${task2var * 16}<sub>(10)</sub> = ${(task2var * 16).toString(16)}<sub>(16)</sub></p>
	`


	//команды для таблы
	task2[1].D = `d, ${task2var.toString(16).padStart(2, "0")}h`
	task2[1].E = `16 ${task2var.toString(16).padStart(2, "0")}`
	task2[1].G = `d ← ${task2var.toString(16).padStart(2, "0")}h`
	document.querySelector(".out-table-1").insertBefore(createTable(task2), null);
	document.querySelector(".out-table-2").insertBefore(createTable(task22), null);

	//убрать модалку с вариантом
	setupMenu.classList.toggle("hidden");
}

input.oninput = ()=>{
	document.querySelector(".attention").classList.add("hidden");
	input.style.border = null;
}

function goFirstTask(num){

	let binNum = convToBin(num)

	if ( isNeedToPad(binNum) ){
		return binNum.replace("0", "1");
	}
	return binNum;


	function isNeedToPad(binNum) {
		let countOfOnes = 0;
		for (let char of binNum) {
			if (char == 1) countOfOnes++
		}
		if (countOfOnes % 2 == 0) {
			return false;
		} else {
			return true;
		}
	}

}

function convToBin(num) {
	return num.toString(2).padStart(8, "0");
}

function createTable(arrayOfCommands) {
	let head = [
		{
			"A": "Адрес",
			"B": "Метка",
			"C": "Команда",
			"D": "Операнд",
			"E": "Машинный код",
			"F": "Число байтов/тактов",
			"G": "Комментарий"
		},
		{
			"A": "1",
			"B": "2",
			"C": "3",
			"D": "4",
			"E": "5",
			"F": "6",
			"G": "7"
		}
	];
	// arrayOfCommands = head.concat(arrayOfCommands);
	let table = document.createElement("table");
	for(let i = 0; i < head.length; i++){
		table.insertBefore(createTr(head[i], false), null )
	}
	for(let i = 0; i < arrayOfCommands.length; i++){
		table.insertBefore( createTr(arrayOfCommands[i], true), null );
	}

	function createTr(obj, coma) {
		let
			tr = document.createElement("tr"),
			td = [];
		for(let i = 0; i < 7; i++){
			td.push(document.createElement("td"));
		};

		td[0].innerHTML = obj.A || adres;
		td[1].innerHTML = obj.B || "";
		td[2].innerHTML = obj.C || "";
		td[3].innerHTML = obj.D || "";
		td[4].innerHTML = obj.E || "";
		td[5].innerHTML = obj.F || "";
		td[6].innerHTML = coma ? (obj.G ? `;${obj.G}` : ";") : obj.G;

		for(let i = 0; i < td.length; i++){
			tr.insertBefore(td[i], null);
		}

		return tr;
	}

	return table;
}
