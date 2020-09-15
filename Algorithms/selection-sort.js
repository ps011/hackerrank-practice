const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// Time complexity: O(n^2) because of nested for loops
// Space complexity: O(1) because we're not storing anything additional
function selectionSort (array) {
  // Variable to keep track of index of lowest value in the array
  let min = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        // As soon as we find something lower than the minimum, we declare that as minimum
        min = j;
      }
    }
    // Once we have the smallest member of the array, we put that at the ideal position
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
const answer = selectionSort(numbers);
console.log(answer);