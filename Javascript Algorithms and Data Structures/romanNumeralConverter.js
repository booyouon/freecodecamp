function convertToRoman(num) {
  let roman = num;
  let output = ""
  
  while (roman > 0) {
    if (roman >= 1000) {
      output = output.concat("M");
      roman -= 1000;
    } else if (roman >= 900) {
      output = output.concat("CM");
      roman -= 900;
    } else if (roman >= 500) {
      output = output.concat("D");
      roman -= 500;
    } else if (roman >= 400) {
      output = output.concat("CD");
      roman -= 400;
    } else if (roman >= 100) {
      output = output.concat("C");
      roman -= 100;
    } else if (roman >= 90) {
      output = output.concat("XC");
      roman -= 90;
    } else if (roman >= 50) {
      output = output.concat("L");
      roman -= 50;
    } else if (roman >= 40) {
      output = output.concat("XL");
      roman -= 40;
    } else if (roman >= 10) {
      output = output.concat("X");
      roman -= 10;
    } else if (roman >= 9) {
      output = output.concat("IX");
      roman -= 9;
    } else if (roman >= 5) {
      output = output.concat("V");
      roman -= 5;
    } else if (roman >= 4) {
      output = output.concat("IV");
      roman -= 4;
    } else {
      output = output.concat("I");
      roman -= 1;
    } 
  }
  return output;
}

convertToRoman(36);
