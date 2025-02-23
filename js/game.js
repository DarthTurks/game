document.addEventListener("DOMContentLoaded", function() {
    function joinGame() {
        const nickname = document.getElementById("nickname").value;
        const avatar = document.getElementById("avatar").value;
        
        if (nickname.trim() === "") {
            alert("Please enter a nickname!");
            return;
        }

        const playerData = {
            nickname: `Darth ${nickname}`,
            avatar: avatar,
            score: 0,
            crystals: 15
        };

        localStorage.setItem("playerData", JSON.stringify(playerData));
        window.location.href = "leaderboard.html";
    }

    window.joinGame = joinGame;
});

