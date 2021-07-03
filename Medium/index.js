function tongSoNguyen(n){
	n = n.toString();
	let ketqua = 0;
	for (let i = 0; i < n.length; i++){
		ketqua += parseInt(n[i]);
	}
	return ketqua;
}
console.log(tongSoNguyen(22222));