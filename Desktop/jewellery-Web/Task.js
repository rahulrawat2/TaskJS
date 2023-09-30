

//Question1
function getFrequency(arr) {
    const frequency = {};

    arr.forEach(function(value) {
        if (frequency[value]) {
            frequency[value] += 1;
        } else {
            frequency[value] = 1;
        }
    });

    return frequency;
}

const array1 = ["A", "B", "A", "A", "A"];
const array2 = [1, 2, 3, 3, 2];
const array3 = [true, false, true, false, false];

console.log(getFrequency(array1)); 
console.log(getFrequency(array2));
console.log(getFrequency(array3)); 




//Question2 
function getArrayLength(arr) {
    const flattenedArray = arr.flat(Infinity);
    return flattenedArray.length;
  }
  
  const myArray = [1, [2, 3]];
  const length = getArrayLength(myArray);
  console.log(length);


//QUESTION3
function letterIndexes(word) {
    const indexes = {};
  
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (indexes[letter]) {
        indexes[letter].push(i);
      } else {
        indexes[letter] = [i];
      }
    }
  
    return indexes;
  }
  
  const word = "dodo";
  const indexes = letterIndexes(word);
  console.log(indexes);

  //Question4
  



