function chuoi(c2, c1) {
	var count = 0;
	for (var i = 0; c1.length; i++) {
		if (count == c2.length) {
			break;
		} if (c2[count] == c1[i]) {
			count++;
		} else {
			if (count > 0) {
				i -= count;
			} count = 0;
		}
	}
	return count < c2.length ? -1 : i - count;
}
var c1 = "phanvanduongph18124";
document.write("vị trí thứ"+chuoi("duong", c1));