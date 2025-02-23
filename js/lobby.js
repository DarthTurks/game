document.addEventListener("DOMContentLoaded", function () {
    setInterval(checkGameStatus, 3000);
});

function checkGameStatus() {
    if (localStorage.getItem("gameStarted") === "true") {
        window.location.href = "game.html";
    }
}
