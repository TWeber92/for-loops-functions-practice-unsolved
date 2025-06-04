// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  let result = Infinity;
  for (let num of array) {
    if (num < result) {
      result = num;
    }
  }
  return result;
  // return array.reduce((a, b) => Math.min(a, b));
}

export function findMaxValueInArray(array) {
  return array.reduce((a, b) => Math.max(a, b));
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
