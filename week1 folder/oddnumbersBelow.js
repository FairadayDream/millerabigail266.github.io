function oddNumbersBelow(num) {
  let arr = [];
  for (let i = 1; i < num; i += 2) {
    arr.push(i);
  }
  return arr;
}

// Expected return values
console.log(oddNumbersBelow(1)); // []
console.log(oddNumbersBelow(2)); // [1]
console.log(oddNumbersBelow(6)); // [1, 3, 5]
console.log(oddNumbersBelow(7)); // [1, 3, 5]
console.log(oddNumbersBelow(8)); // [1, 3, 5, 7]

/* SCORING: DO NOT MODIFY ANYTHING BELOW THIS LINE */
let score = 0;

const arrComparison = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let i = 0;
  while (i < arr1.length) {
    if (arr1[i] !== arr2[i]) return false;
    i++;
  }
  return true;
};

if (arrComparison(oddNumbersBelow(1), [])) score++;
if (arrComparison(oddNumbersBelow(2), [1])) score++;
if (arrComparison(oddNumbersBelow(7), [1, 3, 5])) score++;
if (arrComparison(oddNumbersBelow(8), [1, 3, 5, 7])) score++;

console.log("You have scored " + score + "/4 points.");
