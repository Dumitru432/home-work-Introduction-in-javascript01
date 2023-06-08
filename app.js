// Request a user’s name and display the response “Hello, [name]”.

/* let name = prompt("What is your name ?")
alert("Hello " + name + "!")  */

// Request a user’s year of birth, count his age, and display the result. Store the current year as a constant.

/* const currentYear = new Date().getFullYear();
const yearOfBirth = prompt("Please enter your year of birth:");
const age = currentYear - yearOfBirth;

console.log("Your age is: " + age); 
 */
//Request a radius of a circle and display the area of such a circle.

/* const radius = prompt("Please enter the radius of the circle:");
const area = Math.PI * Math.pow(radius, 2);

console.log("The area of the circle is: " + area); 
 */

//Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.

/* const distance = prompt("Please enter the distance between the two cities in kilometers:");
const time = prompt("Please enter the time you want to cover the distance within (in hours):");
const speed = distance / time;
console.log("To reach your destination on time, you need to maintain a speed of " + speed + " km/h."); */

//Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant.

/* let dollarToEuro = 0.94;
let usdInput = prompt("Enter the amount in USD to change in EURO! ");
let euroOutput = usdInput * dollarToEuro;
console.log(
  `your amount in dollar:${usdInput}\n and in euro will be: ${euroOutput}`
);
 */

// A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive.

/* let flashCapacityMB = prompt('Enter the flash drive memory in GB:', 820); 
let flashCapacityGB = flashCapacityMB * 0.001;
console.log(flashCapacityGB)
 */

// A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left.

/* let walletMoney = prompt("enter the total amount of money");
let priceChocolate = prompt("enter the pricece of chocolate ");
let chocolateCount = walletMoney / priceChocolate;
let changeAmount = walletMoney - chocolateCount * priceChocolate;
console.log(`${chocolateCount} and ${changeAmount}`); */

//The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest.

/* const depositMonth1 = parseFloat(prompt("Enter the bank deposit amount for the first month:"));
const depositMonth2 = parseFloat(prompt("Enter the bank deposit amount for the second month:"));
const yearlyInterestRate = 0.05;
const totalDeposit = depositMonth1 + depositMonth2;
const interestAmount = totalDeposit * (yearlyInterestRate / 12) * 2;

console.log(interestAmount) */























// Request a user’s age and define whether he/she is an infant (0–2), a child (3-11), a teen (12–18), an adult (19-60) or a senior citizen (60– ...). Print the result to the webpage as a paragraph.

/* let userAge = prompt("introduce your age: ");
var result = "age is invalid"; // tot ce se afla in statement daca este fals se afiseaza acest mesaj bydefault
if (userAge <= 2 && userAge >= 0) {
  result = "infant";
} else if (userAge >= 3 && userAge <= 11) {
  result = "child";
} else if (userAge >= 12 && userAge <= 18) {
  result = "teen";
} else if (userAge >= 19 && userAge < 60) {
  result = "adult";
} else if (userAge >= 60 && userAge <= 123) {
  result = "sinior";
}

const paragraphElement = document.createElement("p"); // am creat un paragraf
paragraphElement.innerText = result; // cu ajutorul la innerText pun ce este in interiorul tag ului paragraph
const bodyElement = document.getElementsByTagName('body')[0] // din documentul nostru HTML sa caute bytagName body, dar sa fie body0 adica primul body
bodyElement.appendChild(paragraphElement) */