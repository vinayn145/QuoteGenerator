// Variables

let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes =[{
    quote:`
    "ಎದ್ದೇಳಿ, ಎಚ್ಚರಗೊಳ್ಳಿ ಮತ್ತು ನಿಮ್ಮ ಗುರಿಯನ್ನು ತಲುಪುವವರೆಗೆ ನಿಲ್ಲಬೇಡಿ." `,
    person:"Swami Vivekananda"
},
{
    quote:`“Stay Hungry. Stay Foolish".`,
    person:"Stieve Jobs"
}, ];

btn.addEventListener('click', function(){
    let random=Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText=quotes[random].person;
})