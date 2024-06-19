// user inserts a sentence
// every letter that occurs more than once gets crossed out
// the output is the set of unique letters 

// declare the set of all letters in your language
const letters = ["a", "ą", "b", "c", "ć", "d", "e", "ę", 
    "f", "g", "h", "i", "j", "k", "l", "ł", "m", "n", "ń", "o",  
    "ó", "p", "q", "r", "s", "ś", "t", "u", "v", "w", "x", "y", "z", "ż", "ź"];

// get the sentence from the user and convert to all lower case for convenience
var intention = prompt("What do you wish?").toLowerCase;
