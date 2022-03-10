const text = document.querySelector("#text p span");
const author = document.querySelector("#author p");
const button = document.querySelector("#new-quote button");

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      text.innerHTML = data.content;
      author.innerHTML = `- ${data.author}`;
      twitterLink();
    });
};

const twitterLink = () => {
  const twitter = document.getElementById("tweet-quote");
  const link =
    "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
    text.innerHTML.replaceAll(/\s/g, "%20");

  twitter.setAttribute("href", link);
};

getQuote();

button.addEventListener("click", getQuote);
