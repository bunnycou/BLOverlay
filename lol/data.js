function loadvars() {
    let blueName = localStorage.getItem("blue")
    let blueScore =  localStorage.getItem("blueScore")
    let redName = localStorage.getItem("red")
    let redScore = localStorage.getItem("redScore")
    let patch = localStorage.getItem("patch")
    let potw = localStorage.getItem("potw")
    let motd = localStorage.getItem("motd")

    if (!blueName) { blueName = "Blue" }
    if (!blueScore) { blueScore = 0 }
    if (!redName) { redName = "Red" }
    if (!redScore) { redScore = 0 }
    if (!patch) { patch = getLatest() }
    if (!potw) { potw = "Everyone" }
    if (!motd) { motd = "" }

    document.getElementById("blue").value = blueName
    document.getElementById("blueScore").value = blueScore
    document.getElementById("red").value = redName
    document.getElementById("redScore").value = redScore
    document.getElementById("patch").value = patch
    document.getElementById("potw").value = potw
    document.getElementById("motd").value = motd
}

function getLatest() {
    return JSON.parse(Get("https://ddragon.leagueoflegends.com/api/versions.json"))[0].split(".").slice(0,2).join(".");
}

function Get(url){
    let Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

function storevars() {
    let blue = document.getElementById("blue").value
    let blueScore = document.getElementById("blueScore").value
    let red = document.getElementById("red").value
    let redScore= document.getElementById("redScore").value
    let patch = document.getElementById("patch").value
    let potw = document.getElementById("potw").value
    let motd = document.getElementById("motd").value

    localStorage.setItem("blue", blue)
    localStorage.setItem("blueScore", blueScore)
    localStorage.setItem("red", red)
    localStorage.setItem("redScore", redScore)
    localStorage.setItem("game", parseInt(blueScore) + parseInt(redScore) + 1)
    localStorage.setItem("patch", patch)
    localStorage.setItem("potw", potw)
    localStorage.setItem("motd", motd)
}

function swapvars() {
    let blue = document.getElementById("blue").value
    let blueScore = document.getElementById("blueScore").value
    let red = document.getElementById("red").value
    let redScore = document.getElementById("redScore").value

    localStorage.setItem("blue", red)
    localStorage.setItem("blueScore", redScore)
    localStorage.setItem("red", blue)
    localStorage.setItem("redScore", blueScore)
    
    document.getElementById("blue").value = red
    document.getElementById("blueScore").value = redScore
    document.getElementById("red").value = blue
    document.getElementById("redScore").value = blueScore
}

document.getElementById("submit").addEventListener("click", storevars);
document.getElementById("swap").addEventListener("click", swapvars);

loadvars();