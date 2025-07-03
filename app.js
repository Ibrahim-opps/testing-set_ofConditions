//let ch=prompt("Enter any character(1,G,a,number lowercase letter or uppercase letter)")
//if(ch.length !== 1){
  //  console.log("Pleae enter only ONE character")
//    alert("Please enter only Ohne character")
//if(ch.length === 0){
//console.log("Space cannot be blank");
//}}else{
//    if(ch>=0){
 //       console.log(`'${ch}' is a number.`);        
    }
//}if (ch >= 'A' && ch <= 'Z') {
  //      console.log(`'${ch}' is an uppercase letter.`);
    //} else if (ch >= 'a' && ch <= 'z') {
     //   console.log(`'${ch}' is a lowercase letter.`);
//    }else{
        
  //  }
let ch = prompt("Enter a number (like 5 or 12) OR a single letter (like A or b):");

// Check if input is empty
if (ch.length === 0) {
    console.log("You didn't enter anything.");
    alert("Please enter something!");
} 
// Check if input is a number (can be multiple digits)
else if (!isNaN(ch)) {
    console.log(`'${ch}' is a number.`);
} 
// Check if input is exactly one uppercase letter
else if (ch.length === 1 && ch >= 'A' && ch <= 'Z') {
    console.log(`'${ch}' is an uppercase letter.`);
} 
// Check if input is exactly one lowercase letter
else if (ch.length === 1 && ch >= 'a' && ch <= 'z') {
    console.log(`'${ch}' is a lowercase letter.`);
} 
// If none of the above
else {
    console.log("Invalid input! Please enter a number or a single letter.");
}
