document.addEventListener("DOMContentLoaded", function() {
    const leaderboard = document.getElementById("leaderboard");
    const playerData = JSON.parse(localStorage.getItem("playerData"));

    if (playerData) {
        leaderboard.innerHTML = `
            <div class="player">
                <img src="avatars/${playerData.avatar}" alt="Avatar" class="avatar">
                <h2>${playerData.nickname}</h2>
                <p>Score: ${playerData.score}</p>
                <p>Crystals: ${playerData.crystals}/15</p>
            </div>
        `;
    }
});

