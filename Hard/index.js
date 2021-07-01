let chuSo = [1, 1, 2, 6, 4, 2, 2, 4, 2, 8];
       
function chuSoCuoiCungKhac0(n)
{
	if (n < 10)
		return chuSo[n];
	if ((parseInt(n / 10, 10) % 10) % 2 == 0)
	 return (6 * chuSoCuoiCungKhac0(parseInt(n / 5, 10))
		* chuSo[n % 10]) % 10;
	else
	 return (4 * chuSoCuoiCungKhac0(parseInt(n / 5, 10))
		* chuSo[n % 10]) % 10;
}
 
let n = 14;
  document.write(chuSoCuoiCungKhac0(n));
// Kiểm tra xem chữ số hàng chục (hoặc thứ hai 
// cuối) là lẻ hay chẵn 
// Nếu n = 375, Vậy n / 10 = 37 và 
// (n / 10)% 10 = 7 Áp dụng công thức 
// cho chẵn và lẻ các trường hợp.