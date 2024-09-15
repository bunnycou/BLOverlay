function load() {
    var blue = localStorage.getItem("blue")
    var red = localStorage.getItem("red")

    document.getElementById("motd").textContent = "Coming Up: " + blue + " VS " + red
}

setInterval(load, 1000)