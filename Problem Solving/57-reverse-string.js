function reverseString(str, rev = '') {
  if (str.length === 0) {
    return rev;
  } else {
    rev+=str[str.length - 1];
    return reverseString(str.substring(0, str.length - 1), rev);
  }
}

console.log(reverseString('yoyo mastery'))