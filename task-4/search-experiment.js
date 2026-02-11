// Write your code here
// Use generateBigArray to create a big array numbers.
// Example: generateBigArray(1000000) will create an array of 1 million numbers.

import generateBigArray from "./bigArray.js";

// Linear Search
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

// Binary Search
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);

    if (array[middle] < target) {
      left = middle + 1;
    } else if (array[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

const array1k = generateBigArray(1_000);
const array100k = generateBigArray(100_000);
const array10M = generateBigArray(10_000_000);
const target = 123456789;

// Linear Search timings
console.time("Linear Search 1k");
linearSearch(array1k, target);
console.timeEnd("Linear Search 1k");

console.time("Linear Search 100k");
linearSearch(array100k, target);
console.timeEnd("Linear Search 100k");

console.time("Linear Search 10M");
linearSearch(array10M, target);
console.timeEnd("Linear Search 10M");

console.log("---");

// Binary Search timings
console.time("Binary Search 1k");
binarySearch(array1k, target);
console.timeEnd("Binary Search 1k");

console.time("Binary Search 100k");
binarySearch(array100k, target);
console.timeEnd("Binary Search 100k");

console.time("Binary Search 10M");
binarySearch(array10M, target);
console.timeEnd("Binary Search 10M");

/*
test results:
Linear Search 1k: 0.368ms
Linear Search 100k: 0.972ms
Linear Search 10M: 44.328ms
---
Binary Search 1k: 0.116ms
Binary Search 100k: 0.021ms
Binary Search 10M: 0.012ms

showing that binary search is significantly faster than linear search, especially as the size of the array increases.
*/
