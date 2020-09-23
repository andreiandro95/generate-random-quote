// generate random quotes
function randomQuotes(){
    let quote = document.getElementsByClassName("quote")[0]
    let author = document.getElementsByClassName("author-quote")[0]

    let quoteAuthor = []

    let quotesList = [
        {author: "Mark Twain", quote: "Get your facts first, and then you can distort them as much as you please."},
        {author: "Robin Williams", quote: "You're only given a little spark of madness. You mustn't lose it."},
        {author: "Albert Einstein", quote: "The significant problems we have cannot be solved at the same level of thinking with which we created them."},
        {author: "Robert J. Sawyer", quote: "The right things to do are those that keep our violence in abeyance; the wrong things are those that bring it to the fore."},
        {author: "Gallagher", quote: "Don't you wish there was a knob on the TV to turn up the intelligence? There's one marked 'Brightness,' but it doesn't work."},
        {author: "Tom Wolfe", quote: "A cult is a religion with no political power."},
        {author: "William Gibson", quote: "The future is here. It's just not widely distributed yet."},
    ]

    quoteAuthor = quotesList[Math.floor(Math.random() * quotesList.length)]
    quote.textContent = quoteAuthor.quote
    author.textContent = quoteAuthor.author
}