function enterGame() {
    const gameId = document.getElementById("game-id").value.trim();
    if (gameId === "") {
        alert("Please enter a valid Game ID!");
        return;
    }
    localStorage.setItem("gameID", gameId);
    window.location.href = "player_nickname.html"; // Redirect to nickname selection
}

function adminLogin() {
    const password = document.getElementById("admin-password").value.trim();

    const admins = {
        "1319": { name: "Melih", avatar: "graphics/melih.png" },
        "tosbik": { name: "Berat", avatar: "graphics/berat.png" },
        "murmur": { name: "Umur", avatar: "graphics/umur.png" },
        "woman": { name: "Sena", avatar: "graphics/sena.png" },
        "admin1": { name: "Admin1", avatar: "graphics/admin1.png" },
        "admin2": { name: "Admin2", avatar: "graphics/admin2.png" }
    };

    if (password in admins) {
        localStorage.setItem("admin", admins[password].name);
        localStorage.setItem("adminAvatar", admins[password].avatar);
        window.location.href = "admin_dashboard.html"; // Fixed redirection
    } else {
        alert("Incorrect password!");
    }
}

function joinAudience() {
    const audienceCode = document.getElementById("audience-code").value.trim();
    if (audienceCode === "") {
        alert("Please enter a valid Audience Code!");
        return;
    }
    localStorage.setItem("audienceCode", audienceCode);
    window.location.href = "audience.html";
}
