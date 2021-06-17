//3function puzzle01() {
  var arrayOne = [3, 6, -1, 11, 15, -1, 23, 34, -1, 42];
  var arrayTwo = [1, 9, 28];
  var array1Counter = 0,
    isMerged = false;

  console.log(" array-1 ", arrayOne);
  console.log(" array-2 ", arrayTwo);

  for (var array2Counter = 0; array2Counter < arrayTwo.length; array2Counter++) {
    isMerged = false;
    while (isMerged === false && array1Counter < arrayOne.length) {

      if (arrayOne[array1Counter] === -1) {
        arrayOne[array1Counter] = arrayTwo[array2Counter];
        isMerged = true;
      }

      array1Counter++;
    }
  } //for
  console.log(" array-1 + array-2 ", arrayOne);
  bubbleSort(arrayOne);
  console.log(" Sorted array ", arrayOne);
 //puzzle01

puzzle01();

// implementation of bubble sort for sorting the 
// merged array
function bubbleSort(arrayOne) {
  var nextPointer = 0,
    temp = 0,
    hasSwapped = false;
    
  do {
    hasSwapped = false;
    for (var x = 0; x < arrayOne.length; x++) {
      nextPointer = x + 1;
      if (nextPointer < arrayOne.length && arrayOne[x] > arrayOne[nextPointer]) {
        temp = arrayOne[x];
        arrayOne[x] = arrayOne[nextPointer];
        arrayOne[nextPointer] = temp;
        hasSwapped = true;
      }
    } //for
  } while (hasSwapped === true);
} // bubbleSort