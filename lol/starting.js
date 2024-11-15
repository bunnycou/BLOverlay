function load() {
    var blue = localStorage.getItem("blue")
    var red = localStorage.getItem("red")
    var motd = localStorage.getItem("motd")

    if (!motd) {
        document.getElementById("motd").textContent = "Coming Up: " + blue + " VS " + red
    } else {
        document.getElementById("motd").textContent = motd
    }
    
}

setInterval(load, 1000)