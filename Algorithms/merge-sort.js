const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  const half = Math.ceil(array.length / 2);    
  const left = array.slice(0, half)
  const right = array.splice(half)
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const arr = [];
  let i=0,j=0;
  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
  }
    return arr
    .concat(left.slice(i))
    .concat(right.slice(j));
}


const answer = mergeSort(numbers);
console.log(answer);