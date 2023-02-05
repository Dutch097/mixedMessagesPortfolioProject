//portfollio project - Mixed Messages
//this program will generate a new quote everytime the user runs the program

const generateQuote = function() {
    const quotes = [
        {
            quote: `Life should not be a journey to the grave with the intention of arriving safely in a pretty and well preserved body, 
            but rather to skid in broadside in a cloud of smoke, thoroughly used up, totally worn out, and loudly proclaiming 
            "Wow! What a Ride!`,
            author: `Hunter S. Thompson`
        },
        {
            quote: `A man who procrastinates in his choosing will inevitably have his choice made for him by circumstance.`,
            author: `Hunter S. Thompson`
        },
        {
            quote: `I hate to advocate drugs, alcohol, violence, or insanity to anyone, but they've always worked for me.`,
            author: `Hunter S. Thompson`
        },
        {
            quote: `Life has become immeasurably better since I have been forced to stop taking it seriously.`,
            author: `Hunter S. Thompson`
        },
        {
            quote: `No sympathy for the devil; keep that in mind. Buy the ticket, take the ride...and if it occasionally gets
            a little heavier than what you had in mind, well...maybe chalk it up to forced consciousness expansion: Tune in, 
            freak out, get beaten.`,
            author: `Hunter S. Thompson`
        },       
    ];
    //randomizes the array, and places the keys of quote and author to the corresponding HTML property
    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
};
window.onload = function() {
    generateQuote();
    document.getElementById("generate-quote").addEventListener('click', generateQuote);
}
