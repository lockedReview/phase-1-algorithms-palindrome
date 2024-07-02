function isPalindrome(word) {
  // Write your algorithm here
    let newWord= "";
    for( i= word.length-1; i >= 0; i--){
      newWord += word[i];
      console.log(newWord);
      }
    if(word===newWord){
      return true;
    }
    else{
      return false;
    }
}

/* 
  Add your pseudocode here
  handwrote
*/

/*
  Add written explanation of your solution here
  i thought to iterate through the string backwards and saving it to a new word then made an if statement to check if the word is a palindrome

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
