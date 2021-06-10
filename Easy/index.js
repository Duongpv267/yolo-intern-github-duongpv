 var tall=[2,5,4,6,1,7,8,];
 total(tall);
 function total(arr){
     var  totalOdd = 0;
    for (var i = 0; i< arr.length; i++){
      if (arr[i] % 2  !== 0){
        totalOdd = totalOdd + tall[i];
      }
    }
    console.log( "totalEven have :" + totalOdd);
 }