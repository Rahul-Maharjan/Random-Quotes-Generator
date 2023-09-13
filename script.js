const quoteElement = document.getElementById('quote');
const api_url = "https://api.quotable.io/random"

// Function to fetch a random quote from the API
async function getQuote(url) {
    try {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        quoteElement.innerHTML = data.content;
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteElement.textContent = 'Failed to fetch a new quote.';
    }
}

// Initial quote fetch when the page loads
getQuote(api_url);


