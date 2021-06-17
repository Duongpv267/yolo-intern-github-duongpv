//id 2 viết 2 mảng 
let a=[12,11,13,23,5,9];
let b=[6,7,8,9,3,4];
var c =[];
for (let i=0; i< a.length;i++){
  c.push(Math.abs(a[i]*b[i]));
}
alert("Array c: "+c);