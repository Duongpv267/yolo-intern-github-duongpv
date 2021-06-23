var numberToWordMap = {
    0: "không",
    1: "một",
    2: "hai",
    3: "ba",
    4: "bốn",
    5: "lăm",
    6: "sáu",
    7: "bảy",
    8: "tám",
    9: "chín"
  };
  function numberToWords(number){
    let result = '';
    if (number >= 0 && number <= 9) {
      return numberToWordMap[number]; 
      //hàng đơn vị
    } else if (number >= 10 && number <= 99 ) {
      let phanNguyen10 = Math.floor(number / 10);
      let phanDu10 = number % 10 ;
      if (phanNguyen10 === 1){
         if (phanDu10 === 0){
           return "mười";
         }
         return "mười " + numberToWords(phanDu10);
      } else {
         let phanNguyen10DangChu = phanNguyen10 === 5 ? "năm" : numberToWordMap[phanNguyen10];
         if (phanDu10 === 0 ){
           return  phanNguyen10DangChu + " mươi"
         }
         let phanDu10DangChu = phanDu10 === 1 ? "mốt" :  numberToWordMap[phanDu10];
         return  phanNguyen10DangChu + " mươi " + phanDu10DangChu;
      } 
     // hàng chục
     }  else if (number >= 100 && number <= 999 ) {
      let phanNguyen100 = Math.floor(number / 100);
      let phanDu100 = number % 100 ;
       let phanNguyen100DangChu  = phanNguyen100 === 5 ? "năm" : numberToWordMap[phanNguyen100];
       if (phanNguyen100 ===1){
       if (phanDu100 === 0){
         return  phanNguyen100DangChu +" trăm ";
       }
       if (phanDu100 >= 1 && phanDu100 <= 9){
         return phanNguyen100DangChu +" trăm linh " + numberToWords(phanDu100);
       }
       return phanNguyen100DangChu +" trăm " + numberToWords(phanDu100);
      }
       // hàng trăm
     } 
    return  "";
  }
  
  for(let i = 99; i < 300; i++) {
     console.log(numberToWords(i));
  }
