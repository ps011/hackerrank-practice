// Complete the libraryFine function below.
function libraryFine(d1, m1, y1, d2, m2, y2) {
   let yearDiff = y1 - y2;
   let monthDiff = m1 - m2;
   let daysDiff = d1 - d2;

   if (yearDiff > 0) {
       return 10000;
   } else if (yearDiff < 0) {
       return 0;
   }
   if (monthDiff > 0) {
       return 500*monthDiff;
   } else if (monthDiff < 0) {
       return 0;
   }
   if (daysDiff > 0) {
       return 15*daysDiff
   }
   return 0;
}

console.log(libraryFine(9,6,2015,6,6,2015)); // 45
console.log(libraryFine(1,1,2015,31,12,2014)); // 10000
console.log(libraryFine(15,7,2014,1,7,2015)); // 0