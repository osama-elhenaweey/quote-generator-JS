// variables
let btn =document.querySelector("#new-quote");
let quote =document.querySelector(".quote");
let person =document.querySelector(".person");


const quotes=[
    {
        quote:`“Be-patient for what was written for you was written by greatest of writers”` ,
        person:`Altaf ul qadri`
    },
    {
        quote:`“The greatest glory in living lies not in never falling, but in rising every time we fall. ”` ,
        person:`Nelson Mandela`
    },
    {
        quote:`“Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma , which is living with the results of other people's thinking. ”` ,
        person:`Steve Jobs`
    },
    {
        quote:`“If life were predictable it would cease to be life, and be without flavor.  ”` ,
        person:`Eleanor Roosevelt`
    },
    {
        quote:`“Life is what happens when you're busy making other plans.  ”` ,
        person:`John Lennon`
    },
    {
        quote:`“Don't judge each day by the harvest you reap but by the seeds that you plant.  ”` ,
        person:`Robert Louis Stevenson`
    },
    {
        quote:`“It is during our darkest moments that we must focus to see the light.   ”` ,
        person:`Aristotle`
    },
    {
        quote:`“The future belongs to those who believe in the beauty of their dreams.  ”` ,
        person:`REleanor Roosevelt`
    },
    {
        quote:`“You will face many defeats in life, but never let yourself be defeated.   ”` ,
        person:`Maya Angelou`
    },
    {
        quote:`“If You Hungry ,Eat .  ”` ,
        person:`Monkey D. Luffy`
    },
];


btn.addEventListener('click',function () {
    let random =Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;

})