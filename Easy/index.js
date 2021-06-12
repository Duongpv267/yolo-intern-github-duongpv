// id 14 Viết hàm tìm vị trí của một sô trong một mảng các số
// sử dụng phương thức indexOf() phương thức này trả về chỉ số cảu lần xuất hiện 
//đầu tiên phần tử bạn muốn tìm hoặc -1 nếu phần tử không được tìm thấy.
// sử dụng thuật toán so sánh như toán tử(===)
// ---Array.indexOf (seachElement, fromIndex) <từ trái qua phải>
//---lastindexOf (seachElement, fromIndex= aray.lenght -1) <từ phải qua trái>
 var scores =[1,2,3,4,5,6,7];
 console.log("number of things" + scores.indexOf(4));
 console.log("number of things" + scores.indexOf(9));
 console.log("number of things" + scores.lastIndexOf(5));
 console.log("number of things" + scores.lastIndexOf(9));