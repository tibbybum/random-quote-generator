const quotes = ["quote1", "quote2", "quote3"];
const button = document.querySelector('button');
const body = document.querySelector('body');

const quoteElement = document.createElement('h2');
document.body.appendChild(quoteElement);

button.addEventListener("click", generateQuote);

function generateQuote() {
    const randomIndex = Math.floor(Math.random()*quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

