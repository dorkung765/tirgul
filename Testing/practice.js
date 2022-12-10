const users = ["<th>User Name:</th> <th>Password:</th> <th>Email:</th>"];

function addUser() {
    let userName = document.getElementById("uName");
    let uPassword = document.getElementById("uPass");
    let uEmail = document.getElementById("uMail");
    console.log(userName.value , uPassword.value , uEmail.value);
}

