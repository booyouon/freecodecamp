const validSep = ['(', ')', '-', ' '];
const validNum = []
for (let i = 0; i < 10; i++) {
  validNum.push(String(i));
}
const valid = validNum.concat(validSep);

function telephoneCheck(str) {
  function checker (arr) {
  //check that only dashes, parenthesis, or, spaces are included
    const c1 = arr.every(el => valid.includes(el));
    const numOnly = arr.filter(el => validNum.includes(el)) ;
  //check that there are only either 10 digits or 11 digits
  //check that if there are 11 digits then the first digit is 1
    const c2 = numOnly.length == 10 || (numOnly.length == 11 && arr[0] == 1);
    let c3 = true;
  //check that if there is a ( that there is a ) 4 spots later
    if (arr.includes('(')) {
      c3 = arr[arr.indexOf('(') + 4] == ')'? true : false;
    }
   // check that there is a ( with )
    if (arr.includes(')')) {
      c3 = arr[arr.indexOf(')') - 4] == '('? true : false;
    }
   // check that there are atleast 3 digits between separators
   let counter = 0;
   for (let i = 0; i < arr.length; i++) {
     if (validSep.includes(arr[i]) && counter == 2) {
       return false;
     } else if (validSep.includes(arr[i])) {
       counter = 0;
     } else {
       counter++
     }
   }
    return c1 && c2 && c3? true : false;
  }
  
  return checker(str.split(''));
}

telephoneCheck("555-555-5555");
