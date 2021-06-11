// id 12 Viết hàm tìm giá trị trung bình của một mảng các số
 function average(a, n){
   var sum =0 ;
   for ( var i  = 0; i < n; i++ ){
     sum += a[i];
   }return parseFloat(sum/n);
 }
 var arr = [1,2,3,4,5,6,7,8,9];
 var n = arr.length;
 console.log(average(arr ,n));
 console.log("<br>");