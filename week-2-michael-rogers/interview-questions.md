# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is usually a data type stored in a variable. For example, var dataType1 = 45 or let dataType2 = true. Parameters are placeholders for data and can be passed into an argument of a function. An argument is a piece of a function that syntax-wise goes after the function declaration. An argument can have parameters passed into it. The paramaters are given generic names that are local to the function only. If you invoke your function, an argument () is needed to be written next to the function name. The parameters passed into the function invoke are the ACTUAL names of the parameters, not the generic names used in the function. 

Researched answer: Through further research, a key concept that follows functions is encapsulation. Where all the logic inside the function is local just to inside of it. But, the problem with this is, functions cannot perform efficiently without some external information. That is where paramters and arguments come into play. Parameters are placeholders with generic names inside of the function. The argument is passed the parameter during function invocation. That argument must be a data type recognized by JS and can be reusable so long as the data type is recognized. 

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .map method takes three pre-defined parameters. Value, index, and array. Value is required in every map use. Index and array are optional. Index can be helpful when you want to focus on specific indexes or iterate through an array based on index. The array is very rarely used, but can be helpful in cases. 

Researched answer: To further add, .map predefined parameters must be in that required order. The parameters can be named anything generic, preferably descriptive to what the logic that it is doing. 

3. What is the difference between map and filter?

Your answer: map and filter methods are both only used on arrays but, have different uses. While both methods iterate over an array, both have distinct returns. Map will return the same length array as the original, while filter will not. Filter will return an array of only the filtered values based on filter conditions. 

Researched answer: To reinforce further, .map both iterates through and array and does some sort of data manipulation to the values in the array. .filter iterates through an array and returns a subset of that array based on the conditions that are set in the function. Filter performs an evaluation that gives either a true or false return. Based on that return, the values that meet the true return will be included and the false returns will be excluded. 

1. What is iteration?

Your answer: Iteration is counting from a starting point to an end point. Iteration can be used in a variety of ways. You can use iteration in strings, arrays, for loops, etc. Iteration is most commonly used in arrays and loops because if you want to perform some kind of logic. Iteration helps perform that logic on different values depending on the data type. 

Researched answer: Iteration can continue to perform logic until it has met a specific condition. You can not on increment while doing iteration, you can decrement too. While decrementing is not common, it can be a resourceful way to solve a problem. 

1. What is the difference between a function and a method?

Your answer: A function is usually created by a developer to be reusable with other parameter inputs. Functions will perform some kind of logic inside of it. Functions can be invoked and parameters can be passed into the argument. Generally, in JavaScript, methods tend to be built-in to the framework of JavaScript itself. They are already predefined and do some sort of data manipulation. .map for example can iterate over an array and perfornm some logic on the elements inside the array. 

Researched answer: Objects present interesting behavior. If an object contains a function inside of it, it then will be a method. Unlike methods, functions MUST be invoked in order to perform the logic inside of them. Methods can becalled upon and used almost everywhere in code.Functions have specific syntax they need every single time they are created. Methods have some require syntax but not as heavy as functions. 

6. STRETCH: What is hoisting in JavaScript?

Your answer: To be honest, I have no understanding of what hoisting is. But, just by the word definition, it could possibly have to do with lifting written code to a higher level. The only other possible thing I can think of is it is some arbitrary concept in JavaScript that is an outlier, similar to type coercion. 

Researched answer: After some research, looking back at my original answer, I don't think I was too far off the mark. JavaScript hoisting is a concept that allows for moving all variable declarations to the top of script or function. Often times we declare variables and assign them to a value prior to any logic. Variables can be used prior to their declarations. So, the behavior of hoisting allows all variable declarations to be moved to the top of the code, prior to variable assignment. let and const declaration placement is super important. Different errors will occur depending on the placement of those variable declarations. 

Reference: https://www.w3schools.com/js/js_hoisting.asp

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Classes: Classes are objects that contain different accessible methods inside of them. Classses need to be created and defined. Classes are reusable like functions are. You can call upon different methods that reside inside the class outside of the class. 

2. Spread operator: The spread operator allows for simpler written code. Specifically it has to be used on data that iteration can be used on. When more data is expected, such as an array, you can use the spread operator to indicate more data is present without typing the actual data. 

3. React state: A variable thats stores data for React apps. 

4. React props: React objects that pass information. 

5. DOM events: An HTML concept that allows JS to add interactive elements to a webpage. 
