/*WHEN I SEE A NEW PROBLEM THIS IS WHAT I DO TO LEARN IT:
1. what algorithms do i use;
JavaScript is a versatile programming language, and it supports a wide range of algorithms that can be implemented. Here are some common algorithms used in JavaScript:

Sorting Algorithms:

Bubble Sort
Selection Sort
Insertion Sort
Merge Sort
Quick Sort
Heap Sort
Radix Sort
Counting Sort
Searching Algorithms:

Linear Search
Binary Search
Graph Algorithms:

Breadth-First Search (BFS)
Depth-First Search (DFS)
Dijkstra's Algorithm (shortest path)
Bellman-Ford Algorithm (shortest path with negative weights)
Prim's Algorithm (minimum spanning tree)
Kruskal's Algorithm (minimum spanning tree)
Dynamic Programming Algorithms:

Fibonacci Sequence
Longest Common Subsequence (LCS)
Knapsack Problem
Tree Algorithms:

Binary Search Tree (BST) operations (insertion, deletion, search)
Tree Traversal (pre-order, in-order, post-order)
String Algorithms:

String Matching (e.g., Knuth-Morris-Pratt algorithm, Boyer-Moore algorithm)
Levenshtein Distance (edit distance)
Numerical Algorithms:

Prime Number Generation (Sieve of Eratosthenes)
Greatest Common Divisor (Euclidean Algorithm)
Matrix Operations (addition, multiplication, exponentiation)
These are just a few examples of algorithms commonly used in JavaScript. However, the list is not exhaustive, and there are numerous other algorithms and variations that can be implemented in JavaScript to solve various problems.


//Bubble sort
function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
      // Iterate through the array from the beginning
      // Compare adjacent elements and swap them if necessary
      for (let j = 0; j < length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }

  // Example usage:
  const arr = [64, 34, 25, 12, 22, 11, 90];
  const sortedArr = bubbleSort(arr);
  console.log(sortedArr); // Output: [11, 12, 22, 25, 34, 64, 90]

  Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. It is suitable for small-sized arrays or as an educational tool to understand sorting algorithms. However, it has poor performance for larger arrays and is not recommended for practical use in most scenarios.

  function selectionSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
      let minIndex = i;
      // Find the minimum element in the unsorted part of the array
      for (let j = i + 1; j < length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        // Swap the minimum element with the first unsorted element
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }

  // Example usage:
  const arr = [64, 25, 12, 22, 11];
  const sortedArr = selectionSort(arr);
  console.log(sortedArr); // Output: [11, 12, 22, 25, 64]
*/
////////////////////////////////////////////

function costOfGroceries(groceries) {
  let total = 0;

  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === "cheese") {
      total += 5;
    }
    if (groceries[i] === "butter") {
      total += 1;
    }
    if (groceries[i] === "eggs") {
      total += 2;
    }
    if (groceries[i] === "milk") {
      total += 3;
    }
    if (groceries[i] === "bread") {
      total += 4;
    } else if (groceries[i] === "") {
      return 0;
    }
  }
  return total;
}

function mostExpensiveGroceries(groceriesList) {
  let highestIndex = 0;
  let currentHighestCost = costOfGroceries(groceriesList[0]);

  for (let i = 1; i < groceriesList.length; i++) {
    let cost = costOfGroceries(groceriesList[i]);
    if (cost > currentHighestCost) {
      highestIndex = i;
      currentHighestCost = cost;
    }
  }
  return highestIndex;
}

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ["cheese", "butter", "eggs"];
const groceriesB = ["eggs", "milk", "bread", "bread"];
const groceriesC = ["cheese", "bread"];
const groceriesD = ["eggs", "butter"];

costOfGroceries(groceriesA); // 8
costOfGroceries(groceriesB); // 13  3
costOfGroceries(groceriesC); // 9
costOfGroceries(groceriesD); // 3
costOfGroceries(groceriesD); // 3)

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (
  mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1
)
  score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");
