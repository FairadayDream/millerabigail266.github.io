function getAverage(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  let avg = total / nums.length;
  return avg;
}

function highestAverage(numsList) {
  let maxAvg = 0;
  let maxIndex = -1;
  for (let i = 0; i < numsList.length; i++) {
    const avg = getAverage(numsList[i]);
    if (avg > maxAvg) {
      maxAvg = avg;
      maxIndex = i;
    }
  }
  return maxIndex;
}

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [10000, -9998];
const arrayC = [2, 100, 55, 19];
const arrayD = [4, 8, 12];

console.log(highestAverage([arrayA, arrayB, arrayC, arrayD])); // === 2
console.log(highestAverage([arrayA, arrayB])); // === 0
console.log(highestAverage([arrayA, arrayD])); // === 1

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

// const arrayA = [1, 2, 3, 4, 5];
// const arrayB = [10000, -9998];
// const arrayC = [2, 100, 55, 19];
// const arrayD = [4, 8, 12];

let score = 0;

if (getAverage(arrayA) === 3) score++;
if (getAverage(arrayB) === 1) score++;
if (getAverage(arrayC) === 44) score++;
if (getAverage(arrayD) === 8) score++;

if (highestAverage([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
if (highestAverage([arrayA, arrayB]) === 0) score++;
if (highestAverage([arrayA, arrayD]) === 1) score++;

console.log("You have scored " + score + "/7 points.");
