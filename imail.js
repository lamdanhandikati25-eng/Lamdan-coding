const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cekEmail() {
    rl.question("Masukkan email: ", function(email) {

        if (email.includes("@") && email.includes(".")) {
            console.log("Email valid: " + email);
        } else {
            console.log("Email tidak valid: " + email);
        }

        rl.close();
    });
}

cekEmail();