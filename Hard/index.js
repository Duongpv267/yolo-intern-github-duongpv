// trả về một số thực ngẫu nhiên từ a-b
function randomRange(a,b){
return Math.random() * (b-a)+a;
}
var randomNumber =randomRange(3,9);
console.log(randomNumber);

//trả về một số tự nhiên từ a-b
function randomRange1(c,d){
    return Math.floor(Math.random()* (d-c+1))+c;
}
var randomNumber1 =randomRange1(3,9);
console.log(randomNumber1);
