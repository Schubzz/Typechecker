import './style.css'
import axios from 'https://esm.sh/axios'

const quotes =  await axios.get('https://api.quotable.io/quotes/random?minLength=300&maxLength=350');
const checkText = document.querySelector('#check-text');
const counter = document.querySelector('#counter');


let count = 0;

let characterCount = quotes.data[0].content.length;

counter.innerText = count +"/"+ characterCount;

checkText.setAttribute("data-placeholder",  quotes.data[0].content);
checkText.setAttribute("placeholder",  quotes.data[0].content);

// checkText.innerText = quotes.data[0].content;
checkText.style.height = checkText.scrollHeight + "px";
checkText.classList.add("text-opacity-10");

