'use strict'



let quoteBtn = document.querySelector('#quote-btn')


async function fetchAdvice() {
    try {
        let response = await fetch('https://api.adviceslip.com/advice')
        let data = await response.json();
        console.log(data.slip.id);
        document.getElementById('advice-tag').innerText = `ADVICE #${data.slip.id}`;
        document.getElementById('word-tag').innerText = `"${data.slip.advice}"`
    } catch (error) {
        console.log(error);
    }
}




