function logIn(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    switch (username) {
        case "admin":
            if (password === "admin123") {
                alert("Login successful!");
                window.location.href = "notebooks.html";
            } else {
                alert("Incorrect username or password.");
            }
            break;
        case "Cedric Philmund M. Visorde":
            if (password === "cedric123") {
                window.location.href = "notebooks.html";
            } else {
                alert("Incorrect username or password.");
            }
            break;
        default:
            alert("Username not found.");
    }
}