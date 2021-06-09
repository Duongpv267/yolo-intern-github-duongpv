
//id 1 Viết hàm hoán đổi giá trị của 3 số a, b và c với nhau
    // var a= 0;
    // var b= 2;
    // var c= 3;
    // console.log('a is now',a=b+c);
    // console.log('b is now',b=c*a);
    // console.log('c is now',c=b-a);
//id 2 Viết hàm tính a mũ b
    // var a=2;
    // var b=3;
    // var c = console.log('c is now', c=a**b);
//id 3 Viết hàm kiểm tra tính đồng nhất chẵn lẻ của 2 số
    // var a=2, b=3;
    // if ((a==b)/0){
    //     console.log('cùng chẵn');
    // } if((a==b)%0){
    //     console.log('cung le')
    // } else { 
    //     console.log('1 chan 1 le')
    // }
//id 4 Viết hàm đếm số lượng số chẵn trong một mảng   
var tall = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
liste(tall);
function liste(arr) {
  var sumEven = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEven++;
    }
  }
    console.log("sumEven number have : " + sumEven);
}