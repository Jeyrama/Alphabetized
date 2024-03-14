/*
Re-order the characters of a string, so that they are concatenated into a 
new string in "case-insensitively-alphabetical-order-of-appearance" order. 
Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and 
only words containing the english alphabet letters.

Example:
  alphabetized("The Holy Bible") // "BbeehHilloTy"
*/


// Solution

const alphabetized = s => s
  .replace(/[^a-zA-Z]/g, '')
  .split``
  .sort((x, y) => (x.toUpperCase() === y.toUpperCase()) ? 
    (s.indexOf(x) - s.indexOf(y)) : x.localeCompare(y))
  .join``;

// or

function alphabetized(s) {
  let ans="";
  for (let i=97; i<123; ++i)
    for (let j=0; j<s.length; j++)
      if (s[j].toLowerCase().charCodeAt()==i)
      ans+=s[j]
  return ans
  }

// or

function alphabetized(s) {
  let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  s = s.split(' ').join('').split('')
  let num = [];
  let answer = '';
  
  for(let elem of s){
    num.push([alphabet.indexOf(elem.toUpperCase()), s.indexOf(elem)])
  }
  
  num = num.sort((a, b) => a[0] - b[0]);
  
  for(let elem of num){
    if(elem[0] != -1){
    answer += s[elem[1]]
    }
  }
  return answer
}