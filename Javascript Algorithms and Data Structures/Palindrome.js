const submit = document.querySelector("#submitBtn");
const entry = document.querySelector("#entry");
let text = document.querySelector("#floatingTextarea2").value;

submit.addEventListener('click', () => {
  entry.textContent = text;
})

function palindrome(str) {
  let word1 = str.toLowerCase().replace(/[^a-zA-Z1-9]/g,'').split('').reverse().join('');
/* 
string is first converted to lowercase.
replace is used to search through the input globally(/g) if there is any non-alphanumeric characters and spaces(\s)
string is then turned into an array, array is reversed, then rejoined into a string. 
*/
  let word2 = str.toLowerCase().replace(/[^a-zA-Z1-9]/g,'')
  
  if (word1 === word2) {
    return true;
  } else {
    return false;
  }
}
