document.addEventListener("DOMContentLoaded", function() {
    function startGame() {
        const questionSet = document.getElementById("question-set").value;
        localStorage.setItem("selectedQuestionSet", questionSet);
        alert(`Game started with ${questionSet}`);
        window.location.href = "game.html";
    }

    window.startGame = startGame;
});

