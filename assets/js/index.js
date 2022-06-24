let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
      // quote.style.backgroundColor = "red" ;
    
    });
};


window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);





// quote.addEventListener("mouseover", colorChange);

// function colorChange {
//   fetch(url)
//     .then((data) => data.json())
//     .then((item) => {
//       quote.style.backgroundColor = "red" ;
//     });
// }


