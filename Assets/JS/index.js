var QuoteArray=[
  {
    id:1,
    quote: "Be yourself; everyone else is already taken.",
    author:"Oscar Wilde",
    // book:""
  },
  {
    id:2,
    quote: "So many books, so little time.",
    author:"Frank Zappa",
    // book:""
  },
  {
    id:3,
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author:"Dr. Seuss",
    // book:""
  },
  {
    id:4,
    quote: "Be the change that you wish to see in the world.",
    author:"Mahatma Gandhi",
    // book:""
  },
  {
    id:5,
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author:"Robert Frost",
    // book:""
  },
  {
    id:6,
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author:" J.K. Rowling",
    book:" Harry Potter and the Goblet of Fire"
  },
  {
    id:7,
    quote: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
    author:" Jane Austen",
    book: " Northanger Abbey"
  },
  {
    id:8,
    quote: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
    author:" Marilyn Monroe",
    // book:""
  },
  {
    id:9,
    quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    author:" William Shakespeare",
    book:" As You Like It"
  },
  {
    id:10,
    quote: "Life is what happens to us while we are making other plans.",
    author:" Allen Saunders",
    // book:""
  },
  {
    id:11,
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author:" Thomas A. Edison",
    // book:""
  },
  {
    id:12,
    quote: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
    author:" Friedrich Nietzsche",
    // book:""
  },
  {
    id:13,
    quote: "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
    author:" Eleanor Roosevelt",
    // book:""
  },
  {
    id:14,
    quote: "The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",
    author:" Bob Marley",
    // book:""
  },
  {
    id:15,
    quote: "Folks are usually about as happy as they make their minds up to be.",
    author:" Abraham Lincoln",
    // book:""
  },
  {
    id:16,
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author:" Winston S. Churchill",
    // book:""
  },
  {
    id:17,
    quote: "Not all of us can do great things. But we can do small things with great love.",
    author:" Mother Teresa",
    // book:""
  },
  {
    id:18,
    quote: "Not all those who wander are lost.",
    author:" J.R.R. Tolkien",
    book:" The Fellowship of the Ring"
  },
  {
    id:19,
    quote: "And, when you want something, all the universe conspires in helping you to achieve it.",
    author:" Paulo Coelho",
    book:" The Alchemist"
  },
  {
    id:20,
    quote: "There is nothing to writing. All you do is sit down at a typewriter and bleed.",
    author:" Ernest Hemingway",
    // book:""
  },
  {
    id:21,
    quote: "Everything you can imagine is real.",
    author:" Pablo Picasso",
    // book:""
  },
  {
    id:22,
    quote: "Life isn't about finding yourself. Life is about creating yourself.",
    author:" George Bernard Shaw",
    // book:""
  },
  {
    id:23,
    quote: "I'm not afraid of death; I just don't want to be there when it happens.",
    author:" Woody Allen",
    // book:""
  },
  {
    id:24,
    quote: "You cannot find peace by avoiding life.",
    author:" Michael Cunningham",
    book:" The Hours"
  },
  {
    id:25,
    quote: "Get busy living or get busy dying.",
    author:" Stephen King",
    book:" Different Seasons"
  },
  {
    id:26,
    quote: "I love to see a young girl go out and grab the world by the lapels. Life's a bitch. You've got to go out and kick ass.",
    author:" maya angelou",
    //book:""
  },
  {
    id:27,
    quote: "It may be unfair, but what happens in a few days, sometimes even a single day, can change the course of a whole lifetime...",
    author:" Khaled Hosseini",
    book:" The Kite Runner"
  },
  {
    id:28,
    quote: "If you love somebody, let them go, for if they return, they were always yours. If they don't, they never were.",
    author:" Kahlil Gibran",
    //book:""
  },
  {
    id:29,
    quote: "Unbeing dead isn't being alive.",
    author:" E. E. Cummings",
    //book:""
  },
  {
    id:30,
    quote: "wisdom comes to us when it can no longer do any good.",
    author:" Gabriel García Márquez",
    book:" Love in the Time of Cholera"
  },
]

function getQuote(){
  var x = Math.floor((Math.random() * 30) )
  var objectNew={};
  objectNew=QuoteArray[x];
  // console.log(objectNew);
  document.getElementById("quoteOutput").innerHTML='<i class="fas fa-quote-left"></i> <i>'+ objectNew.quote + ' </i><i class="fas fa-quote-right"></i>';
  document.getElementById("authorOutput").innerHTML= objectNew.author;
  document.getElementById("bookOutput").innerHTML= (objectNew.book) ? "," + objectNew.book  :'' ;
}