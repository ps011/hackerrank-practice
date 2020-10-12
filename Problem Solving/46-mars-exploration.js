// Complete the marsExploration function below.
function marsExploration(s) {
  let signals = s.match(/.{1,3}/g);
  let alteredLetters = 0;
  signals.forEach((signal) => {
    if (signal[0] !== "S") {
        alteredLetters ++;
    }
    if (signal[1] !== "O") {
        alteredLetters ++;
    }
    if (signal[2] !== "S") {
        alteredLetters ++;
    }
  });
  return alteredLetters;
}

