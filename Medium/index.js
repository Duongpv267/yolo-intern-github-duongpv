//id 2 viết 2 mảng 
let a=[1,2,3,4,5,6];
let b=[6,7,8,9,3,4];
var sum= a.map(function(num,idx){
  return num + b[idx];
})
alert("Array c :"+ sum);