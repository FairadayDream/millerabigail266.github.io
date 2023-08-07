/*function stringChanger(word,operation){
    //capitalize the first letter in word
        if(operation === 'capitalize'){
           console.log(word[0].toUpperCase())
        }
    //uppercase every letter
        if(operation === 'uppercase'){
           console.log(word.toUpperCase())
        }
    //double return the word twice in a row
        if(operation === 'double'){
            console.log(word + word)
        }
    //reverse the string's letter
        if(operation === 'reverse'){
            console.log(word.reverse())
        }
    //if the operation is invalid, return the word unchanged
        else if(operation === ''){
            console.log(word)
        }
    }
console.log(stringChanger('pancake',uppercase))*/
/*
/////////////////////////////////////////////
function stringChanger(word, operation) {
    //capitalize the first letter in word
    if (operation === 'capitalize') {
      return word.charAt(0).toUpperCase() + word.slice(1) ;
    }
    //uppercase every letter
    else if (operation === 'uppercase') {
      return word.toUpperCase();
    }
    //double return the word twice in a row
    else if (operation === 'double') {
      return word + word;
    }
    //reverse the string's letters
    else if (operation === 'reverse') {
      return word.split('').reverse().join('');
//split the string into an array then reverse array
//then join turn back to string using ''!!!!!!!
    }
}
console.log(stringChanger('pancake', 'capitalize'));*/

/*Write a function lastVowel(str) that takes in a string and returns the last vowel that
appears sequentially in the string. Note that the string may contain capitalization.
*/

/*function lastVowel(str){
//return the last vowel in the string
    let str1 = str.toLowerCase();
    let matched = str1.match(/[aeoiu]/g);//'g'flag to match all vowels
    if (matched){
        return matched.pop();
    }
    return null;
}*/

/*function lastVowel(str) {
    const regex = /[aeiou]/i;
    let lastVowel = null;

    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i].match(regex)) {
        lastVowel = str[i];
        break;
      }
    }
    return lastVowel;
}

  console.log(lastVowel('battery')); // Output: 'e'
  console.log(lastVowel('TUNNEL')); // Output: 'E'
  console.log(lastVowel('dog')); // Output: 'o'
  console.log(lastVowel('conventional')); // Output: 'a'
  console.log(lastVowel('rhythm')); // Output: null */
/*
  function lastVowel(str){
    //return last vowel sequentially in string
    const vowel = str.match(/[aeiou]/gi);
    return vowel[vowel.length-1]
   }

    console.log(lastVowel('battery')); // 'e'
    console.log(lastVowel('TUNNEL')); // 'E'
    console.log(lastVowel('dog')); // 'o'
    console.log(lastVowel('conventional')); // 'a'
    console.log(lastVowel('rhythm')); // null */
///////////////////////////////////////////////////////
/*function removeLastVowel(word){
//Sort out the vowels and assign them to a variable .match(regex)
const allVowel = word.match(/[aeiou]/g);
//Exclude early the words without allVowel
if (!allVowel || allVowel.length === 0){
    return word;
}
//get the last vowel excluded from the rest & as a variable .pop()
let excludeThisVowel = allVowel.pop();
//return the string less the excluded variable but you cant subtract only replace
return word.replace(excludeThisVowel,'');
}

       console.log(removeLastVowel('bootcamp')); // 'bootcmp'
       console.log(removeLastVowel('better')); // 'bettr'
       console.log(removeLastVowel('graph')); // 'grph'
       console.log(removeLastVowel('thy')); // 'thy' */
////////////////////////////////////////////////////////////////////////
/*function minValue(num){
//If the array is empty the func should return null
if (num.length === 0){
    return null;
}
//Return the smallest # of the array
let min = num[0]; //assume the first element is the minimum
for(let i = [1]; i < num.length; i++){
   if (num[i] < min){
    min = num[i];
   }
}
return min
}

    console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
    console.log(minValue([-2, -3, -7, 3 ])); // -7
    console.log(minValue([])); // null */

/* function twoDimensionalSum(arr) {
     let sum = 0; //initializing sum to 0
for (let i = 0; i < arr.length; i++){ // Outer loop for rows // double loop the bitch cause it a 2D array sum
  let subArr = arr[i];  //give var to index tracking of i

  for (let j = 0; j < subArr.length; j++){ // Inner loop for columns
      sum += subArr[j]; // Accumulate the values inton sum !!! not a new var.
   }
}
return sum;
}

let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6
*/
