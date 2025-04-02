Code Challenge: Pangram Analyzer

Description
In this challenge, you will write a JavaScript function that analyzes a list of sentences and determines which ones are pangrams.

A pangram is a sentence that contains every letter of the 26-letter English alphabet at least once.  
For example, the following sentence is a pangram: “The quick brown fox jumps over the lazy dog."

Objective

You need to implement a function that:  
Receives an array of strings (each string is a sentence).  
Determines whether each sentence is a pangram or not.  
Returns an object with the following information:  
The sentence being analyzed.  
A boolean indicating if it is a pangram.  
An object with the letter frequency for each letter in the sentence.

Technical Requirements

Your solution should demonstrate the use of:

- Data structures: Use objects or appropriate structures to store letter statistics.
- Loops: You must iterate over the sentences and efficiently analyze their letters.
- Arrays & Objects: Use arrays and objects to process the information correctly.
- Ensure you test the sentence "The quick brown fox jumps over the lazy dog", as it is a known pangram.
- Best Software Practices: Solutions that follow clean code principles, good development practices, and an organized structure will be highly valued.
- Extra: If you add unit tests with Jest or any other framework, it's a plus.

Example Input and Output

Input:  
const sentences = [
"The quick brown fox jumps over the lazy dog",
"Hello world",
"Pack my box with five dozen liquor jugs"
];

Expected Output:  
[
{
sentence: "The quick brown fox jumps over the lazy dog",
isPangram: true,
letterFrequency: { a: 1, b: 1, c: 1, d: 1, ... }
},
{
sentence: "Hello world",
isPangram: false,
letterFrequency: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
},
{
sentence: "Pack my box with five dozen liquor jugs",
isPangram: true,
letterFrequency: { p: 1, a: 1, c: 1, k: 1, ... }
}
]

Evaluation Criteria

- Correctness: Does the code correctly detect if a sentence is a pangram?
- Efficiency: Is the code optimal and avoids unnecessary calculations?
- Clarity and readability: Is the code well-structured and easy to read?
- Good practices: Does it properly use data structures, loops, and functions?
- Best software practices: Modular, reusable code with descriptive variable names.
- Testing (optional): If you add unit tests, it’s a plus.

Submission  
Format: A .js file with your implementation. If you add tests, use a separate file (.test.js).  
Time limit: No more than 45-60 minutes.
