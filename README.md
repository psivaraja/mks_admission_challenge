# mks_admission_challenge
Makersquare Admissions Challenge

Includes First and Second coding challenges for Makersquare admission

# Admissions Challenge 1 of 2

This is the first of two Admissions Challenges for MakerSquare. This will allow you to showcase your knowledge of basic JavaScript. The next challenge will be more advanced; we will present it to you after your "Admissions Q&A Interview".

To get started, create a file called `mks-admissions-challenge-1.js`. In this file you will write your solutions. All answers should be in the same file, separated by comments.

#### When you're finished...
[Submit it here.](https://makersquare.typeform.com/to/wdEmGQ)

----
## Challenge: Passing around notes in class

In this challenge you will write be decoding secret messages using JavaScript. You will write a function `decrypt` that will receive a string and return a decrypted string:

```javascript
var decryptA = function(message) {
  // Your code goes here.
  // You will process the incoming message and return the decrypted message
};
```

Read on to Phase 1 for the challenge requirements. If you have trouble solving this, you should review [Codecademy](http://www.codecademy.com/en/tracks/javascript) and our [public JS Intro course](http://mks.io/js-intro).

## Phase 1

Your task is to decrypt the true meaning of a given sentence. Here's an example:

```text
laugh ride lol hall bozo
```

On first glance, this seems like an odd sentence. However, there's a secret message hidden beneath. If you combine the last letter of each word, you will find the sensible message "hello".

Complete the `decryptA` function so that it decrypts messages like this one. Here are some examples:

```javascript
var decryptA = function(message) {
  // Your code here
}

var result1 = decryptA("laugh ride lol hall bozo")
console.log(result1) // This should be "hello"

var result2 = decryptA("dog polo boo sudd noob smiley ride")
console.log(result2) // This should be "goodbye"
```

## Phase 2

We've been exposed! Our encryption technique was way too easy to figure out, and was thus discovered... it's time to change it up.

Here's the new encryption scheme:

- Just like before, a single letter is taken from each word in the sentence.
- Unlike before, either the **first** or **last** letter is taken.
- The letter taken is decided by which of the first or last is "greater" (e.g. "b" > "a", "c" > "b", etc.)

Here are some examples based on the above rules:

"hello" translates to "o" because "o" is greater than "h".
"goodbye" translates to "g" because "g" is greater than "e".

Full sentence example:

```text
wazdee apple love bic nooo more end
```

This sentence will decrypt to "welcome".

Complete the `decryptB` function so that it decrypts messages with the new scheme. Here are some examples:

```javascript
var decryptB = function(message) {
  // Your code here
}
var result1 = decryptB("wazdee apple love bic nooo more end")
console.log(result1) // This should be "welcome"

var result2 = decryptB("bria loud fuzu antidote")
console.log(result2) // This should be "blue"
```

*Hint: you can compare letters in JS: `"c" > "b"`*

## Phase 3 - Extra Credit

This phase is not required. You should schedule an interview before you attempt this.

We keep getting hacked! Looking at the first and last letter is not effective enough - we need a new structure. Here's the new encryption scheme:

- Starting with `n=1`, for each word `n`, take the `nth` letter of that word.
  - For example, take the 1st letter of the 1st word, 2nd letter of the 2nd word, 3rd letter of the 3rd word, etc.
- If a word has length `len` such that `n > len`, then continue consuming words until you reach letter `n`.
- Skip over any words consumed in the manner of the previous rule.

This is much more complicated than the previous schemes. Here are some examples:

- The message `oh i understand banter` decrypts to `out` - since the second word needs a second letter, it continues into the next word's letters to find it. In this case it steps **1 letter** into the next word.
- The message `a ob ooc dd oeoo ooooof` decrypts to `abcef` - since the fourth word needs a fourth letter, it continues into the next word's letters to find it. In this case it steps **2 letters** into the next word.
- The message `a b c` decrypts to `ac` - since the second word needs a second letter, it continues into the next word's letters to find it. Afterwards, because `c` is already consumed, there are no more words to continue with.
- The message `a b c d e f g` decrypts to `acg` - both words `b` and `d` need to step into their next words in order to get their letters.

Write a `decryptC` function so that it decrypts messages with this new scheme.

----

# Coding Challenge Part 2

[Submit](https://makersquare.typeform.com/to/wdEmGQ) a completed version of this first challenge to access the next one. You'll be given the link to the second challenge automatically upon submission of this challenge.



Admissions Challenge 2 of 2 - Making Cookies
For this project you will be incorporating your JavaScript skills along with jQuery in order to build out a cookie baking app. Start by cloning this repository and reading through the pre-existing code - we've built out the HTML for you.

If you're not comfortable with jQuery just yet, check out CodeCademy or Code school.

When You're Finished

Submit your solution here. Upon submission, you'll automatically be taken to schedule your Technical Interview.

Note: Please do not schedule a Technical Interview before conducting your "Admissions Q&A Interview". E-mail admissions@makersquare.com for any further clarification.

Step 1

All of your code will go inside of the document ready function. Here's the functionality you need to build out:

When someone clicks on Use 1 Sugar, decrement 1 from the sugar in ingredients, and increment 1 from the sugar count in the pot
Replicate the same for flour
When someone clicks Cook a Cookie, deplete 6 units of flour and 3 units of sugar. Add 1 cookie as well.
When you click on buy Sugar, add 1 unit of sugar for $10.
1 unit of flour costs $15
Make sure you spend time cleaning up your code. Keeping your code flexible and DRY is very important. This is your chance to showcase your ability to write excellent code.
Step 2

Right now, anyone can just jump into the developer console for the HTML page and change how many cookies are available. This is unacceptable! We cannot have people counterfeiting cookies! Instead of keeping track of cookies inside of the HTML, we want to keep track of cookies inside of our JavaScript code - the HTML code will simply reflect what the JavaScript says.

For example you can keep track of an object called inventory which keeps track of how much money you have, how many cookies you have, etc:

var inventory = {
  product: {
    money: 1000,
    cookies: 0
  },
  ingredients: {
    sugar: 10,
    flour: 10
  },
  pot: {
    sugar: 0,
    flour: 0
  }
};
This object will hold the "truth" about what you actually have, and anytime you update this object, you will want to also update the HTML page regarding how much you have.

Algorithms Challenge

Along with this challenge, submit a solution to the following challenge:

Given an array of integers, find the smallest positive difference between any two elements of the array. For example:

var findSmallestDifference = function(arr) {
  // Your code goes here
};
var result = findSmallestDifference([100, 500, 300, 1000, -200, 990]);
console.log(result); // The answer is 10 for this example because the difference between 1000 and 990 is 10
This code should print out 10 because the different between 1000 and 990 is 10 and there are no pairs that have a smaller difference.
