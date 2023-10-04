//sort with array and ascending and descending
let unsortedArray = [1, 10, 3, 56, 76, 4, -1];

function sort(unsortedArray, order) {
  if (order === 'ascending') {
    for (let i = 0; i < unsortedArray.length; i++) {
      for (let j = 1; j < unsortedArray.length; j++) {
        if (unsortedArray[j] > unsortedArray[j - 1]) {
          let temp = unsortedArray[j];
          unsortedArray[j] = unsortedArray[j - 1];
          unsortedArray[j - 1] = temp;
        }
      }
    }
  } else if (order === 'descending') {
    for (let i = 0; i < unsortedArray.length; i++) {
      for (let j = 1; j < unsortedArray.length; j++) {
        if (unsortedArray[j] < unsortedArray[j - 1]) {
          let temp = unsortedArray[j];
          unsortedArray[j] = unsortedArray[j - 1];
          unsortedArray[j - 1] = temp;
        }
      }
    }
  }
  console.log(unsortedArray);
}

sort(unsortedArray, 'descending');


//Fibonacci Series
let num=7;
myarray=[0,1]
function Fibonacci()
                {
                        for (let i = 0; i < num; i++)
                         {
                                myarray.push(myarray[i] + myarray[i+1])
                         }
                                console.log(myarray)
                }




