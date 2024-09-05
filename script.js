document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        window.location.href = "admin.html";
    } else {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
});