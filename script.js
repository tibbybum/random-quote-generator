const quotes = ["quote1", "quote2", "quote3"];
const button = document.querySelector('button');
const quoteContainer = document.querySelector('.container');

const quoteText = document.createElement('h2');
const quoteAuthor = document.createElement('h3');

quoteText.classList.add("quote");
quoteAuthor.classList.add("author");

quoteContainer.appendChild(quoteText);
quoteContainer.appendChild(quoteAuthor);



button.addEventListener("click", generateQuote);

async function generateQuote() {

    // Remove animation class to reset effect
    quoteText.classList.remove("show");
    quoteAuthor.classList.remove("show");

    // Fetch quote data from the API
    const response = await fetch('http://api.quotable.io/random');
    const data = await response.json();

    // Update quote content
    quoteText.textContent = '"' + data.content + '"';
    quoteAuthor.textContent = "by " + data.author;


    // Add animation class to apply effect
    setTimeout(() => {
        quoteText.classList.add("show");
        quoteAuthor.classList.add("show");
        quoteContainer.classList.add("show");
    }, 10);



}


