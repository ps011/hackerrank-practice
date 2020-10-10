// Complete the climbingLeaderboard function below.
// ****************************** BRUTEFORCE ******************************************
// function climbingLeaderboard(scores, alice) {
//   let ranks = [];
//   for (let i = 0; i < alice.length; i++) {
//     let rank = 1;
//     if (alice[i] >= scores[0]) {
//       ranks.push(1);
//       break;
//     } else if (alice[i] < scores[scores.length - 1]) {
//       ranks.push(new Set(scores).size + 1);
//       break;
//     } else {
//       for (let j = 1; j <= scores.length; j++) {
//         if (scores[j] !== scores[j - 1]) {
//           rank++;
//         }
//         if (alice[i] >= scores[j] && alice[i] < scores[j - 1]) {
//           ranks.push(rank);
//           break;
//         } else if (alice[i] > scores[j] && alice[i] <= scores[j - 1]) {
//           ranks.push(rank);
//           break;
//         }
//       }
//     }
//   }
//   return ranks;
// }
// ******************************BRUTEFORCE**************************************************


function climbingLeaderboard(scores, alice) {
  let ranks = [];
  for (let i = 0; i < alice.length; i++) {
    if (alice[i] >= scores[0]) {
      ranks.push(1);
    } else if (alice[i] < scores[scores.length - 1]) {
      ranks.push(new Set(scores).size + 1);
    } else {
        // do binary search here
        const clonedArray = [...scores];
        let rank = findScore(clonedArray, alice[i], 0);
        ranks.push(new Set(scores.slice(0, rank - 1)).size + 2);
        // ranks.push(findScore(clonedArray, alice[i], 0));
    }
  }
  return ranks;
}

function findScore(arr, element, originalLength) {
    let targetIndex = Math.ceil((arr.length - 1)/2);
    let currentElement = arr[targetIndex];
    if (element === currentElement ) {
        return targetIndex + originalLength;
    } else if (element > currentElement && element <= arr[targetIndex - 1]) {
        return originalLength + targetIndex;
    } else if (element < currentElement && element >= arr[targetIndex + 1]) {
        return originalLength + (targetIndex + 1);
    }
    else if (element > arr[targetIndex]){
        return findScore(arr.splice(0, targetIndex - 1), element, originalLength);
    } else {
        return findScore(arr.splice(targetIndex + 1), element, originalLength + (targetIndex + 1));
    }
}
// console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105])); // [4,3,1]
// console.log(climbingLeaderboard([1], [1, 1])); // [1,1]
// console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])); // [6,4,2,1]
console.log(climbingLeaderboard([100,90,90,80,75,60], [50,65,77,90,102])); // [6,5,4,2,1]
