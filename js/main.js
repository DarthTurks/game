function joinGame() {
    const nickname = document.getElementById("nickname").value.trim();
    if (nickname === "") {
        alert("Please enter a name!");
        return;
    }
    localStorage.setItem("nickname", `Darth ${nickname}`);
    window.location.href = "game.html";
}

function adminLogin() {
    const password = document.getElementById("admin-password").value.trim();
    const admins = {
        "melldawg": "Melih",
        "admin01": "Admin1",
        "admin02": "Admin2",
        "admin03": "Admin3"
    };

    if (password in admins) {
        localStorage.setItem("admin", admins[password]);
        window.location.href = "admin_panel.html";
    } else {
        alert("Incorrect password!");
    }
}

function joinAudience() {
    const code = document.getElementById("audience-code").value.trim();
    if (code.length !== 5) {
        alert("Invalid audience code!");
        return;
    }
    localStorage.setItem("audienceCode", code);
    window.location.href = "audience.html";
}
