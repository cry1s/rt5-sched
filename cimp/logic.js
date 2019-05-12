const vars = [
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

const
	setupMenu	= document.querySelector(".setup"),
	input		= document.querySelector(".varin"),
	start		= document.querySelector(".start"),
	alt			= document.querySelector(".alt"),
	out			= document.querySelector(".out"),
	done_task	= document.querySelector(".done_task");

start.onclick = () => {
	if (input.value == ""){
		document.querySelector(".attention").classList.remove("hidden");
		input.style.border = "1px solid #E32636"
		return;
	}
	const
		variant	= input.value,
		c1		= vars[variant - 1][0],
		c2		= vars[variant - 1][1];

	out.innerHTML = `
	<p>${c1.toString(16)}<sub>(16)</sub> = ${convToBin(c1)}<sub>(2)</sub> => ${goFirstTask(c1)}<sub>(2)</sub> = ${parseInt(goFirstTask(c1), 2).toString(16)}<sub>(16)</sub></p></p>
	<p>${c2.toString(16)}<sub>(16)</sub> = ${convToBin(c2)}<sub>(2)</sub> => ${goFirstTask(c2)}<sub>(2)</sub> = ${parseInt(goFirstTask(c2), 2).toString(16)}<sub>(16)</sub></p>
	`;

	document.querySelectorAll(".variant").forEach((elem)=>{
		elem.innerHTML = c1.toString(16);
	});
	//console.log(`${variant}, ${c1.toString(16)}, ${c2.toString(16)}`);

	done_task.classList.toggle("hidden");
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