const text = document.querySelector("#text p span");
const quote = document.querySelector("#text i");
const author = document.querySelector("#author p");
const button = document.querySelector("#new-quote button");
const body = document.body;
const twitter = document.getElementById("tweet-quote");
const tumblr = document.getElementById("tumblr-quote");

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

const changeColor = () => {
  const color = colors[Math.floor(Math.random() * colors.length)];

  text.style.color = color;
  quote.style.color = color;
  author.style.color = color;
  button.style.backgroundColor = color;
  body.style.backgroundColor = color;
  twitter.style.backgroundColor = color;
  tumblr.style.backgroundColor = color;
};

const fadein = () => {
  text.style.animation = "fadin 1.5s forwards";
  quote.style.animation = "fadin 1.5s forwards";
  author.style.animation = "fadin 1.5s forwards";
};

const fadeout = () => {
  text.style.animation = "fadout 1.5s forwards";
  quote.style.animation = "fadout 1.5s forwards";
  author.style.animation = "fadout 1.5s forwards";
};

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      text.innerHTML = data.content;
      author.innerHTML = `- ${data.author}`;
      twitterLink();
      changeColor();
      fadein();
    });
};

const twitterLink = () => {
  const twitter = document.getElementById("tweet-quote");
  const link =
    "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
    text.innerHTML.replaceAll(/\s/g, "%20");

  twitter.setAttribute("href", link);
};

const handleClick = () => {
  fadeout();
  getQuote();
};

getQuote();

button.addEventListener("click", handleClick);
