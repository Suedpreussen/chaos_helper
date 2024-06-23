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
        let repeatedLetters = new Set();

        // main loop
        for (const char of input){
            // check if char is a letter 
            if(letters.includes(char)){
                // and if it's already pushed
                if((lettersFromInput.includes(char))){
                    repeatedLetters.add(char);
                }
                else{
                    lettersFromInput.push(char);
                }
            }
        }

        // get set-difference 
        let uniqueLetters = lettersFromInput.filter(x => !repeatedLetters.has(x));

        // print result to the page
        document.getElementById('result').textContent = `Unikalne litery: ${uniqueLetters.join(', ').toUpperCase()}`;
    }

function triggerByEnter(event){
    if(event.key === 'Enter'){
        findUniqueLetters();
    }
}

