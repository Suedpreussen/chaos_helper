// user inserts a sentence
// every letter that occurs more than once gets crossed out
// the output is the set of unique letters 

function findUniqueLetters(){
        
    // declare array of all letters in your language
    const letters = ["a", "ą", "b", "c", "ć", "d", "e", "ę", 
        "f", "g", "h", "i", "j", "k", "l", "ł", "m", "n", "ń", "o",  
        "ó", "p", "q", "r", "s", "ś", "t", "u", "v", "w", "x", "y", "z", "ż", "ź"];

    // get user input and convert to lower case
    const input = document.getElementById("userInput").value.toLowerCase();

    // declare temporary arrays
    let lettersFromInput = [];
    let repeatedLetters = [];

    // main loop
    for (const char of input){
        // check if char is a letter 
        if(char.match(letters) ){
            lettersFromInput.push(char);

            // AND if it is not already in the temp arr
            if((char.match(lettersFromInput)))

            arr.push(char);

        }
    }

    let difference = arr1.filter(x => !arr2.includes(x));
    document.getElementById('result').textContent = `Unikalne litery: ${sortedUniqueLetters.join(', ')}`;
}


