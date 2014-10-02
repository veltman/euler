var start = 2*3*5*7*11*13*17*19;

main: while (true) {

	for (var i = 2; i <= 20; i++) {
		if (start/i % 1 > 0) {
			start++;
			continue main;
		}
	}

	console.log(start);

	break;

}