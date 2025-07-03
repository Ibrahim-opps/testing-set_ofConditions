let ch = prompt("Enter any one character (number,upercase letter or lowercase letter)");
if (ch.length === 0) {
    console.log("Space cannot be blank");
    alert("Space cannot be blank");
} 
else if (!isNaN(ch)) {
    console.log(`'${ch}' is a number.`);
} 
else if (ch.length === 1 && ch >= 'A' && ch <= 'Z') {
    console.log(`'${ch}' is an uppercase letter.`);
} 
else if (ch.length === 1 && ch >= 'a' && ch <= 'z') {
    console.log(`'${ch}' is a lowercase letter.`);
} 
else {
    console.log("Invalid input! Please enter one single letter.");
}
