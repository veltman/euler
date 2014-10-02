var sum = 0;

//More efficient

for (var i = 3; i < 1000; i += 3) {
	sum += i;
}

for (var i = 5; i < 1000; i += 5) {
	if (i % 3) {
		sum += i;
	}
}

console.log(sum);