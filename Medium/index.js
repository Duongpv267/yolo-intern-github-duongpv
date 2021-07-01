<<<<<<< HEAD

// ID 20 sự khác nhau giữa stack và queue 
/* giống :
 - đều là các dữ liệu không nguyên thủy 
/* khác :
 - Stack :
    + Thì sử dụng phương thức LIFO  (last in first out) 
    + Chỉ có một đầu mở để pushing và popping các phần tử dữ liệu
    + Nó là một danh sách được sắp xếp trong đó các phần tử được 
  thêm vào hoặc xóa đi chỉ ở một đầu của danh sách, 
  được gọi là đỉnh của ngăn xếp (TOS)
  VD: Stack là một chồng đĩa CD, nơi bạn có thể lấy ra và 
  đưa vào đĩa CD thông qua đỉnh của ngăn xếp đĩa CD
    VD:  Vào đầu ra đầu
 - Queue :
    + Sử dụng phương thức FIFO (First in first out)
    + Có cả hai đầu mở để enqueuing và dequeuing các phần tử dữ liệu.
    VD: Queue là hàng đợi cho các vé của Nhà hát nơi người đứng ở vị trí đầu tiên,
  nghĩa là, phía trước hàng đợi sẽ được phục vụ trước và
  người mới đến sẽ xuất hiện ở phía sau hàng đợi.
    VD:   Vào đầu ra cuối 
=======
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
>>>>>>> medium
