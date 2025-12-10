// script.js
function findUniqueLetters() {
    const charLimit = 1000;

    const userInput = document.getElementById("userInput");
    const result = document.getElementById("result");
    const intention = document.getElementById("intention");

    if (!userInput || !result || !intention) {
        console.error("Missing DOM elements (userInput/result/intention)");
        return;
    }

    const userText = userInput.value;
    if (userText.length > charLimit) {
        result.textContent = `Tekst musi zawierać mniej niż ${charLimit} znaków!`;
        intention.textContent = "";
        return;
    }

    // Map letter -> count
    const counts = new Map();

    // Unicode property escape: \p{L} = dowolna litera
    for (const rawChar of userText) {
        const char = rawChar.toLowerCase();
        if (!/\p{L}/u.test(char)) continue;

        counts.set(char, (counts.get(char) || 0) + 1);
    }

    const uniqueLetters = Array.from(counts.entries())
        .filter(entry => entry[1] === 1)
        .map(entry => entry[0]);

    const repeatedLetters = Array.from(counts.entries())
        .filter(entry => entry[1] > 1)
        .map(entry => entry[0]);

    console.log("Input:", userText);
    console.log("Counts map (sample):", Array.from(counts.entries()).slice(0, 50));
    console.log("Unique letters:", uniqueLetters);
    console.log("Repeated letters:", repeatedLetters);

    result.textContent =
        uniqueLetters.length > 0
            ? `Znaki do sigila: ${uniqueLetters.join(", ").toUpperCase()}`
            : userText.length > 0
                ? "Znaki do sigila: Brak (żadne znaki nie wystąpiły dokładnie raz)"
                : "Brak wpisanej intencji";

    intention.textContent =
        userText.length > 0 ? userInput.value : "Brak wpisanej intencji";
}


function triggerByEnter(event) {
    if (event.key === 'Enter') {
        findUniqueLetters();
    }
}

function clearInput() {
}
function saveIntention() {
}
function browseIntention() {
}
function addRunes(){

}


// Service Worker registration for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js')
            .then(function (reg) { return console.log('SW registered', reg); })
            .catch(function (err) { return console.log('SW registration failed', err); });
    });
}
