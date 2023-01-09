const api = 'https://api.quotable.io/random';

const button = document.getElementById('button');
const responseField = document.getElementById('response-field');
const authorField = document.getElementById('author');

const getQuote = async () => {
    try {
        const response = await fetch(api)
        if (response.ok) {
            const jsonResponse = await response.json();
            responseField.innerHTML = jsonResponse.content;
            authorField.innerHTML = '- ' + jsonResponse.author;
        }
    } catch(error) {
        console.log(error);
    }
}

button.addEventListener('click', getQuote);