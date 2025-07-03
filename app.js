let ch=prompt("Enter any character(1,G,a,number lowercase letter or uppercase letter)")
if(ch.length !== 1){
    console.log("Pleae enter only ONE character")
    alert("Please enter only Ohne character")
if(ch.length === 0){
console.log("Space cannot be blank");
}}else{
    if(ch>=0){
        console.log(`'${ch}' is a number.`);        
    }
}if (ch >= 'A' && ch <= 'Z') {
        console.log(`'${ch}' is an uppercase letter.`);
    } else if (ch >= 'a' && ch <= 'z') {
        console.log(`'${ch}' is a lowercase letter.`);
    }else{
        
    }