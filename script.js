function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    let ch = str.charAt(i);
    for (let j = 0; j < str.length; j++) {
      if (j != i && ch == str.charAt(j)) {
        count++;
        break;
      }
    }

    if (count == 0) {
      return ch;
    }
  }
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
