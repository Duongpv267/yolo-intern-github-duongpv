
//id 5 Viết hàm đếm số lượng lẻ trong một mảng  
   var tall =[1,2,3,4,5,6,7,8,9,10,11,12];
   duolingo(tall);
   function duolingo(arr){
      var sumOdd =0;
      for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 !==0){
          sumOdd++;
        }
      }
      console.log(" sumOdd number have :" +sumOdd);
   }