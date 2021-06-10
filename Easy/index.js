
   // id 6 viết hàm tính tổng số chẵn trong một mảng
   var  tall =[9,8,7,6,5,4,3,2,1];
   total( tall);
   function total(arr){
     var  totalEven = 0;
     for (var i = 0; i< arr.length; i++){
       if (arr[i] % 2  === 0){
         totalEven = totalEven + tall[i];
       }
     }
     console.log( "totalEven have :" + totalEven);
   }