// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    let annaBudget = 0;
    let totalBudget = 0;
    bill.forEach((item, index) => {
        totalBudget+=item;
        if (k !== index) {
            annaBudget+=item;
        }
    });
    console.log((annaBudget/2) === b ? 'Bon Appetit' :  (totalBudget/2) - (annaBudget/2));
}

bonAppetit([3,10,2,9], 1, 7); //Bon Appetit