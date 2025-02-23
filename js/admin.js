document.addEventListener("DOMContentLoaded", function () {
    const gameCode = Math.floor(10000 + Math.random() * 90000);
    const audienceCode = Math.floor(10000 + Math.random() * 90000);
    
    document.getElementById("game-code").innerText = gameCode;
    document.getElementById("audience-code").innerText = audienceCode;

    localStorage.setItem("gameCode", gameCode);
    localStorage.setItem("audienceCode", audienceCode);
});

function startGame() {
    alert("Game Started!");
}

function endGame() {
    alert("Game Ended!");
}
