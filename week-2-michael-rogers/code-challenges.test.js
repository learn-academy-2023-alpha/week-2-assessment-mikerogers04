// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

//Reusable test template

// describe("greeter", () => {
//     it("returns a generic greeting", () => {
//       expect(greeter()).toEqual("Hello, LEARN student!")
//     })
//   })

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
//const test = true //Test variable to try and throw an error
//Expected output: "Error: Function input is not an object or key-pair value is not a number"

describe("divisbleByThree", () => {
    //console.log(test)
    it("returns an appropriate message if the number inside the object is divisible by 3 or not", () => {
      expect(divisibleByThree(object1)).toEqual(`${15} is divisible by three`)
      expect(divisibleByThree(object2)).toEqual(`${0} is divisible by three`)
      expect(divisibleByThree(object3)).toEqual(`${-7} is not divisible by three`)
      //expect(divisibleByThree(test)).toEqual("Error: Function input is not an object or key-pair value is not a number")
        //Had difficulty trying to replicate the error message in my test. Function expects an object, so I tested by passing in a regular variable with a boolean
        //value. My function allowed that variable to be passed in. That should have thrown an error. Needs more research. 
    })
})
//Expected Test failed: ReferenceError: divisbleByThree is not defined

// b) Create the function that makes the test pass.

//Pseudocode:
//Create a function called divisibleByThree
    //Function argument input will be an object, with key-pair values of numbers
//Conditional if/else statements to determine if each number is divisible by 3. Using modulo and dot notation of the object number value. 
    //Each conditional statement will return expected output messages
    //Catch-all statement included with appropriate error message return
//Output: Return an appropriate message if the number inside the object is divisible by 3 or not

const divisibleByThree = (object) =>{
    if(object.number % 3 === 0){        //Takes the value at object.number and uses modulo by 3 and if its strictly equals to 0 the number is evenly divisisble by 3
        return `${object.number} is divisible by three` //String interpolation
    } else if(object.number % 3 != 0){  //Takes the value at object.number and uses modulo by 3 and if it does not equal 0 the number is not divisble by 3
        return `${object.number} is not divisible by three` //String interpolation
    } else {
        return "Error: Function input is not an object or key-pair value is not a number"   //Error message if input is not a number
    }
}
//console.log(divisibleByThree(test))
//Output of successful tests after function creation:
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
//const randomNouns3 = [5, "", "", ""]  //Array to test if it would throw an error
//Expected output: TypeError: value.charAt is not a function
//Runnning the test gave a proper TypeError because the first index value is a number, not a string, charAt does not work on numbers. 

describe("capitalWords", () => {
    it("returns an array with all words capitalized", () => {
      expect(capitalWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capitalWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
      //expect(capitalWords(randomNouns3)).toEqual([5, "", "", ""])
    })
  })
//Expected Test failed: ReferenceError: capitalWords is not defined

// b) Create the function that makes the test pass.

//Pseudocode:
//Create a function called capitalWords
    //Function argument input will be an array of words
//Use .map to iterate through the array
    //Use charAt to take the first letter then use toUpperCase to make the letter capital
    //Concat the capital letter with the rest of the word by using slice with the index of 1
//Output: Return an array with all words capitalized

const capitalWords = (array) => {
    return array.map((value) => {   //using .map to iterate through the array of words
       return value.charAt(0).toUpperCase() + value.slice(1)    //using charAt to take the first letter(at index 0) of each word, the using toUpperCase to make 
                                                                //them capital, then concat the rest of the string using .slice(at index 1)
    })                                                          //Had to do some research on how to grab that first letter to be able to uppercase it. Then to concat
}                                                               //the rest of the word using slice and providing the index.
//Output of successful tests after function creation:
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2
const vowelTester4 = "woo"  //Test with vowels back to back to check if it outputs the index of the first vowel occurrence 
// Expected output: 1
//const vowelTester5 = true
//TypeError: string.search is not a function. 
//I believe this is the correct error because the function expects a string, but for this test, passing in a boolean value. Search method only works on strings 

describe("firstVowel", () => {
    it("returns the index of the first vowel in the word", () => {
      expect(firstVowel(vowelTester1)).toEqual(1)
      expect(firstVowel(vowelTester2)).toEqual(0)
      expect(firstVowel(vowelTester3)).toEqual(2)
      expect(firstVowel(vowelTester4)).toEqual(1)   //test output
     // expect(firstVowel(vowelTester5)).toEqual("Error") //test output
    })
})
//Expected Test failed: ReferenceError: firstVowel is not defined

// b) Create the function that makes the test pass.

//Pseudocode:
//Create a function called firstVowel
    //Function argument input will be a string
//Setup a regular expression of vowels to be used to compare characters of the string to the regex.
//Use search method to run a search between a regular expression(regex) and a string. It will return the 
//index if the search matches a character in the string and the regex. -1 if the search found no match. 
//Output: Return the index of the first vowel in the string

const firstVowel = (string) => {
    return string.search(/[a,e,i,o,u]/)     //Initially was using indexOf to return the index and charAt to check the characters in the string.
                                            //Function was working, but giving incorrect output. Constant output of -1, saying there was no value. 
                                            //Had to research a way to search the string and check for the first vowel and return that index. 
}
//console.log(firstVowel(vowelTester1)) //logging to check output
//console.log(firstVowel(vowelTester2)) //logging to check output

//Output of successful tests after function creation:
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total