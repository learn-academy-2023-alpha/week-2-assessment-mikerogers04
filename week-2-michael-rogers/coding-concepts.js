// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
console.log(cohort.split(""))

// a) Your answer: The statement will log an array with both strings as elements separated by a comma. 
// b) Verify and explain: The console logged an array with each character from the given string as an element separated by commas. I was partially correct, instead of it being two words, it logs each letter into each element position in the array. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: This function will not log anything. There is no return prior to the string interpolation. 
// b) Verify and explain: The console logged undefined. I was somewhat correct because it did not log properly because of the missing return keyword. But, infact it did log undefined because a parameter was passed in the argument of the function. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16] 
// b) Verify and explain: I was correct because .map returns the same length array just with manipulated data inside the array. So, the proper output was an array with each element multiplied by 2. 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: I was correct because .filter returns an array only with the elements that meet the condition inside the filter function. So, the proper output was an array with only odd numbers. Using modulo to determine if the remainder was not equal to 0. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: I was correct because the proper dot notation was correct inside the console.log. Even though the value for languages is an array, the proper index number was referenced in brackets after languages. So, the console log is accessing the object myCodingSkills then the languages key, then the value at index 0 of the array. 