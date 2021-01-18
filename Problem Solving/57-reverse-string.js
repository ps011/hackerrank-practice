function reverseString(str) {
  if (str.length === 0) {
    return '';
  } else {
    return reverseString(str.substring(1)) + str[0];
  }
}

console.log(reverseString('yoyo mastery'))