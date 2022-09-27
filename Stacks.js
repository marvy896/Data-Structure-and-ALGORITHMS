/**
 * Stacks are used to place item in an ordered manner
 * the basic functions for that is the Push(), pop(), peek(), length
 */


let letter = [];
let word = "hannah";
let reverseWord = "";

for (let i = 0; i < word.length; i++) {
  letter.push(word[i]);
  
}
console.log(letter)
for (let i = 0; i < word.length; i++) {
  reverseWord += letter.pop();
}
if (reverseWord == word) {
  console.log(word + " " + "is a Palindrome");
} 
else {
  console.log(word + " " + "is not a Palindrome");
}

/**
 * so This word is a Palindrome
 * you can replace the word with another word to check if its a Palindrome or not
 */

//USING SETS
let stack = function () {
    this.count = 0;
    this.storage = {};
    //let add value to the end of the stack
    this.push = function (value) {
      this.storage[this.count] = value;
      this.count++;
    };
  
    //let remove and return the value at the end of the stack
    this.pop = function () {
      if (this.count == 0) {
        return undefined;
      }
      this.count--;
      let result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    };
  
    this.size = function () {
      return this.count;
    };
  
    //returns the value at the end of stack
    this.peek = function () {
      return this.storage[this.count - 1];
    };
  };

  
 var myStack = new stack();
   myStack.push(1);
   myStack.push(2);
   console.log(myStack.peek());
   console.log(myStack.pop());
   console.log(myStack.peek());
   myStack.push("Marvel");
   console.log(myStack.size());
   console.log(myStack.peek());
   console.log(myStack.pop());
   console.log(myStack.peek());
