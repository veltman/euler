var words = {
	"1": "one",
	"2": "two",
	"3": "three",
	"4": "four",
	"5": "five",
	"6": "six",
	"7": "seven",
	"8": "eight",
	"9": "nine",
	"10": "ten",
	"11": "eleven",
	"12": "twelve",
	"13": "thirteen",
	"14": "fourteen",
	"15": "fifteen",
	"16": "sixteen",
	"17": "seventeen",
	"18": "eighteen",
	"19": "nineteen",
	"20": "twenty",
	"30": "thirty",
	"40": "forty",
	"50": "fifty",
	"60": "sixty",
	"70": "seventy",
	"80": "eighty",
	"90": "ninety"
};

var total = 0;

for (var i = 1; i <= 1000; i++) {
	total += written(i).replace(/[^a-z]/g,"").length;
}

console.log(total);

function written(num){
	var str = "";

	var thousands = Math.floor(num/1000);

	if (thousands) {
		str += words[thousands]+" thousand ";
		num = num % 1000;
	}

	var hundreds = Math.floor(num/100);

	if (hundreds) {
		str += words[hundreds]+" hundred ";
		num = num % 100;
	}

	if (str.length && num) {
		str += "and ";
	}

	if (num >= 20) {
		var tens = (Math.floor(num/10)*10);
		str += words[tens];
		num = num % tens;
		if (num) {
			str += "-";
		}
	}

	if (num) {
		str += words[num];
	}

	return str.trim();

}