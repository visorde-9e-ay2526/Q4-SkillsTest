/*function to handle the login process*/
function logIn(event) {
    /*ensure that the form does not submit and refresh the page*/
    event.preventDefault();
    /*values of the username and password input fields*/
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    /*method to check the username and password against predefined values*/
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