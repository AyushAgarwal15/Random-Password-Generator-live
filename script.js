const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const button = document.getElementById("btn");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const passwordLength = document.getElementById("slider");

function generatePassword() {
  let password = "";
  let randomIndex = 0;
  for (let i = 0; i < passwordLength.value; i++) {
    randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// Storing generated passwords into variables it will help to use these values in copy functon
let generatedPassword1 = "@ayush_agg15"; //default screen value for copy feature
let generatedPassword2 = "@ayush.ag15"; //default screen value for copy feature

// function to display generated passwords
function OutputPassword() {
  generatedPassword1 = generatePassword();
  generatedPassword2 = generatePassword();
  password1.textContent = generatedPassword1;
  password2.textContent = generatedPassword2;
}

// Event listener for generate password button
button.addEventListener("click", OutputPassword);

const copyPasswordBtn1 = document.getElementById("copy-password1");
const copyPasswordBtn2 = document.getElementById("copy-password2");

// Function to copy password
function copyToClipboard(value) {
  navigator.clipboard.writeText(value);
}

// Event listner for first password copy button
copyPasswordBtn1.onclick = function () {
  copyPasswordBtn2.title = "Copy Password";
  copyToClipboard(generatedPassword1);
  copyPasswordBtn1.title = "Password Copied";
};

// Event listner for second password copy button
copyPasswordBtn2.onclick = function () {
  copyPasswordBtn1.title = "Copy Password";
  copyToClipboard(generatedPassword2);
  copyPasswordBtn2.title = "Password Copied";
};
