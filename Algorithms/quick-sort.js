const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
    if (right - left <= 1) {
        return array;
    }
   let pivot = right;
   while (left < pivot) {
    if (array[left] > array[pivot]) {
        let temp = array[pivot];
        array[pivot] = array[pivot - 1];
        array[pivot - 1] = temp;
        if (array[left] !== array[pivot - 1] ) {
            temp = array[pivot];
            array[pivot] = array[left];
            array[left] = temp;
        }
        pivot = pivot - 1;
    } else {
    left++;
    }
   }
   console.log('Array: ', array, 'Left: ', array.slice(0, pivot), 'Right: ', array.slice(pivot+1, array.length-1));
    quickSort(array, 0, pivot);
    quickSort(array, pivot+1, array.length-1);
}


//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);