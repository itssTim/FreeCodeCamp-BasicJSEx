function maskEmail(email) {
    let prefix = email.substring(0,email.lastIndexOf("@"));
    let postfix = email.substring(email.lastIndexOf("@"));
    let maskid = "";
    
    for (let i = 0; i< prefix.length; i++) {
        if (i === 0 || i === prefix.length - 1) {
            maskid = maskid + prefix[i].toString();
        } else maskid = maskid + "*";
    }
    return maskid + postfix;
}

let email = "mynewemail@example.com";

console.log(maskEmail("apple.pie@example.com"))
console.log(maskEmail("freecodecamp@example.com"))
console.log(maskEmail("info@test.dev"))
console.log(maskEmail("user@domain.org"))
console.log(maskEmail(email))