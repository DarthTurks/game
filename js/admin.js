document.addEventListener("DOMContentLoaded", function () {
    // Load Admin Info
    const adminName = localStorage.getItem("admin");
    const adminAvatar = localStorage.getItem("adminAvatar");

    if (adminName && adminAvatar) {
        document.getElementById("admin-name").innerText = adminName;
        document.getElementById("admin-avatar").src = adminAvatar;
    }

    // Load Available Question Sets
    loadQuestionSets();
});

// Function to Load Question Sets from GitHub
function loadQuestionSets() {
    const dropdown = document.getElementById("question-set-dropdown");
    const questionSets = ["5th-grade", "6th-grade", "7th-grade"]; // Manually update as needed

    questionSets.forEach(set => {
        let option = document.createElement("option");
        option.value = set;
        option.textContent = set.replace("-", " ").toUpperCase();
        dropdown.appendChild(option);
    });
}

// Function to Create Game (Generate Codes)
function createGame() {
    const selectedSet = document.getElementById("question-set-dropdown").value;
    if (!selectedSet) {
        alert("Please select a question set!");
        return;
    }

    const gameCode = Math.floor(10000 + Math.random() * 90000);
    const audienceCode = Math.floor(10000 + Math.random() * 90000);

    document.getElementById("game-code").innerText = gameCode;
    document.getElementById("audience-code").innerText = audienceCode;
    document.getElementById("game-codes").style.display = "block";
    document.getElementById("start-game-btn").style.display = "block";

    localStorage.setItem("gameCode", gameCode);
    localStorage.setItem("audienceCode", audienceCode);
    localStorage.setItem("selectedQuestionSet", selectedSet);
}

// Function to Start Game
function startGame() {
    localStorage.setItem("gameStarted", "true");
    alert("Game Started!");
}

// Function to End Game
function endGame() {
    alert("Game Ended!");
}
