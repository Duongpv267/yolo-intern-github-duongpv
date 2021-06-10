// 8 Viết hàm kiểm tra một số có phải là số nguyên tố hay không
function prime(number) {
  if (number <=1 ){
    return false;
  }else{
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      prime = false;
    }
  }
  return true;
}
}
console.log(prime(2));
