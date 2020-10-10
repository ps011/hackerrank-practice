// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
    let resultingArray = [];
    [...word].forEach(character => resultingArray.push(h[character.charCodeAt(0) - 97]))
    return resultingArray.length*Math.max(...resultingArray);
}