function checkAccessLevel(accessLevel) {
    if (accessLevel === "admin") {
        console.log("Selamat datang, Admin!");
    } else if (accessLevel === "user") {
        console.log("Anda tidak memiliki akses ke halaman ini!");
    } else {
        console.log("Level akses tidak valid.");
    }
}
