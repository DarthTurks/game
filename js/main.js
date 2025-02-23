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
        "1319": { name: "Melih", avatar: "melih.png" },
        "tosbik": { name: "Berat", avatar: "berat.png" },
        "murmur": { name: "Umur", avatar: "umur.png" },
        "woman": { name: "Sena", avatar: "sena.png" },
        "admin1": { name: "Admin1", avatar: "admin1.png" },
        "admin2": { name: "Admin2", avatar: "admin2.png" }
    };

    if (password in admins) {
        localStorage.setItem("admin", admins[password].name);
        localStorage.setItem("adminAvatar", `graphics/${admins[password].avatar}`);
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
