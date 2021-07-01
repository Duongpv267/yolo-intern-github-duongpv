function FibonacciNumbers(n) {
	let f1 = 0, f2 = 1, i;
	if (n < 1)
		return;
	document.write(f1 + " ");
	for (i = 1; i <= n; i++) {
		document.write(f2 + " ");
		let next = f1 + f2;
		f1 = f2;
		f2 = next;
	}
}
FibonacciNumbers(9);
