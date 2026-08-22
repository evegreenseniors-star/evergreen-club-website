const darkButton = document.getElementById("darkModeButton");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
}

// Set the correct button icon on page load
if (darkButton) {
    darkButton.textContent = body.classList.contains("dark") ? "☀️" : "🌙";

    darkButton.addEventListener("click", () => {

        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            darkButton.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            darkButton.textContent = "🌙";
        }

    });
}