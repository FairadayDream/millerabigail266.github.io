/*   DAY 2
- twoSum
-
-
*/

/* Write a function twoSum(arr, target) that accepts an array and a target number as args. The function should a return a boolean indicating if two
distinct numbers of the array add up to the target value. You can assume that input array contains only unique numbers. */
/*
function twoSum(arr, target){
for(let i = 0; i < arr.length; i++){
  for (let j = i + 1; j < arr.length; j++){
    if(arr[i] + arr[j] === target){
      return true;
//The function should return a boolean if two num in arr..
      }
    }
  }
  return false;
}

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false
*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*The function takes in a string word and returns the number of e's in the word.
The function counts both lowercase (e) and uppercase (E). use a while loop instead*/

function eCounter(word) {
  let count = 0;

  for (let index = 0; index < word.length; index++) {
    let char = word[index];
    if (char === "e" || char === "E") {
      count += 1;
    }
  }

  return count;
}

function eCounter(word) {
  let count = 0;
  let i = 0;
  while (i < word.length) {
    i++;
    let char = word[i];
    if (char === "e" || char === "E") {
      count += 1;
    }
  }
  return count;
}
console.log(eCounter("apple")); // => 1
console.log(eCounter("appleapple")); // => 2
console.log(eCounter("Appleee")); // => 3

/*|||||||||||||||||||||||||||||||||||||||||||||||||||
//Define a function isPrime(number) that returns true if number is prime.
//Otherwise, false. A number is prime if it is only divisible by 1 and itself.
function isPrime(number){
  for (let i = 2; i <= Math.sqrt(number); i++){
    if(number % i === 0){
      return false;
    }
  }
  return true;
}
*/
