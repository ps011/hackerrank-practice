// Complete the cutTheSticks function below.
function cutTheSticks(arr) {
  let sticksCut = [];
  arr = arr.sort((a,b) => a - b);
  while(arr.length > 0) {
    sticksCut.push(arr.length);
    arr = arr.filter(a => a !== arr[0]);
  }
  return sticksCut;
}


console.log(cutTheSticks([5,4,4,2,2,8]));