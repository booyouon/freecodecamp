function rot13(str) {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "!", "?", "."];
  const rot13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', ' ', '!', '?', '.'];
  let output = str.split('');
  
  for (let i = 0; i < output.length; i++) {
    output[i] = rot13[alphabet.indexOf(output[i])];
  }
  
  return output.join('');
}

rot13("SERR PBQR PNZC");
