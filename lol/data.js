function loadvars() {
    let blueName = localStorage.getItem("blue")
    let blueScore =  localStorage.getItem("blueScore")
    let redName = localStorage.getItem("red")
    let redScore = localStorage.getItem("redScore")
    let patch = localStorage.getItem("patch")
    let casters = localStorage.getItem("casters")
    let caster1 = localStorage.getItem("caster1")
    let caster2 = localStorage.getItem("caster2")
    let caster3 = localStorage.getItem("caster3")
    let potw = localStorage.getItem("potw")
    let motd = localStorage.getItem("motd")

    if (!blueName) { blueName = "Blue" }
    if (!blueScore) { blueScore = 0 }
    if (!redName) { redName = "Red" }
    if (!redScore) { redScore = 0 }
    if (!patch) { patch = getLatest() }
    if (!casters) { casters = 1 }
    if (!caster1) { caster1 = "Caster 1" }
    if (!caster2) { caster2 = "Caster 2" }
    if (!caster3) { caster3 = "Caster 3" }
    if (!potw) { potw = "Everyone" }
    if (!motd) { motd = "" }

    document.getElementById("blue").value = blueName
    document.getElementById("blueScore").value = blueScore
    document.getElementById("red").value = redName
    document.getElementById("redScore").value = redScore
    document.getElementById("patch").value = patch
    document.getElementById("casters").value = casters
    document.getElementById("caster1").value = caster1
    document.getElementById("caster2").value = caster2
    document.getElementById("caster3").value = caster3
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
    let casters= document.getElementById("casters").value
    let caster1 = document.getElementById("caster1").value
    let caster2 = document.getElementById("caster2").value
    let caster3 = document.getElementById("caster3").value
    let potw = document.getElementById("potw").value
    let motd = document.getElementById("motd").value

    localStorage.setItem("blue", blue)
    localStorage.setItem("blueScore", blueScore)
    localStorage.setItem("red", red)
    localStorage.setItem("redScore", redScore)
    localStorage.setItem("game", parseInt(blueScore) + parseInt(redScore) + 1)
    localStorage.setItem("patch", patch)
    localStorage.setItem("casters", casters)
    localStorage.setItem("caster1", caster1)
    localStorage.setItem("caster2", caster2)
    localStorage.setItem("caster3", caster3)
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