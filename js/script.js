
// Create the array of quote objects and name it `quotes`.

const quotes = [

  {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  source: 'Nelson Mandela',
  citation: 'Speech',
  year: 1994,
  tags: 'inspirational'},

  {quote: 'The way to get started is to quit talking and begin doing.',
  source: 'Walt Disney',
  citation: 'Book',
  year: 1950,
  tags: 'inspirational'},

  {quote: 'If life were predictable it would cease to be life, and be without flavor.',
  source: 'Eleanor Roosevelt',
  citation: 'Speech',
  year: 1950,
  tags: 'inspirational'},

  {quote: 'Life is what happens when you\'re busy making other plans.',
  source: 'John Lennon',
  citation: 'Song',
  year: 1980,
  tags: 'inspirational'},

  {quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
  source: 'Mother Teresa',
  citation: 'Speech',
  year: 1970,
  tags: 'inspirational'},

];


// Create a function that generates a random number between zero and the last index in the `quotes` array

function getRandomQuote() {

  // Create a variable that generates a random number

  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];

}


// Background color change

function updateBackgroundColor() {

  // Create a random number between 0 and 255
  const randomRGB = () => Math.floor(Math.random() * 256);

  // Construct the RGB color string
  const randomColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;

  // Update the background color of the body
  document.body.style.backgroundColor = randomColor;

}


// Create a function that prints the quote to the page and changes the background color

function printQuote() {

  const currentQuote = getRandomQuote();
  const html = `
    <p class="quote">${currentQuote.quote}</p>
    <p class="source">${currentQuote.source}
      <span class="citation">${currentQuote.citation}</span>
      <span class="year">${currentQuote.year}</span>
      <span class="tags">${currentQuote.tags}</span>
    </p>
  `;

  document.getElementById('quote-box').innerHTML = html; 

  updateBackgroundColor();

}


// Call the `printQuote` function every 10 seconds using setInterval.

setInterval(printQuote, 10000); // 10000 miliseconds = 10 seconds


/*** This line of code attaches an event listener to the element with the id 'load-quote'.
 * When the 'click' event occurs on this element, it will trigger the function named 'printQuote'. 
 * The third argument 'false' indicates that the event listener should be set to bubble up during event propagation.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


