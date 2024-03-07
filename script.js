const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
];

const quoteDisplay = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});
