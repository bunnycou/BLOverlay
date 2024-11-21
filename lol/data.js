function loadvars() {
    let blueName = localStorage.getItem("blue")
    let blueScore =  localStorage.getItem("blueScore")
    let redName = localStorage.getItem("red")
    let redScore = localStorage.getItem("redScore")
    let blueTeam = localStorage.getItem("blueTeam")
    let redTeam = localStorage.getItem("redTeam")
    let patch = localStorage.getItem("patch")
    let potw = localStorage.getItem("potw")
    let motd = localStorage.getItem("motd")

    if (!blueName) { blueName = "Blue" }
    if (!blueScore) { blueScore = 0 }
    if (!redName) { redName = "Red" }
    if (!redScore) { redScore = 0 }
    if (!blueTeam) { blueTeam = ["","","","",""] }
    if (!redTeam) { redTeam = ["","","","",""] }
    if (!patch) { patch = getLatest() }
    if (!potw) { potw = "Everyone" }
    if (!motd) { motd = "" }

    document.getElementById("blue").value = blueName
    document.getElementById("blueScore").value = blueScore
    document.getElementById("red").value = redName
    document.getElementById("redScore").value = redScore
    loadTeam(blueTeam, "blue")
    loadTeam(redTeam, "red")
    document.getElementById("patch").value = patch
    document.getElementById("potw").value = potw
    document.getElementById("motd").value = motd
}

function loadTeam(team, side) {
    document.getElementById(side+"Top").value = team[0]
    document.getElementById(side+"Jgl").value = team[1]
    document.getElementById(side+"Mid").value = team[2]
    document.getElementById(side+"Bot").value = team[3]
    document.getElementById(side+"Sup").value = team[4]
}

function getTeam(side) {
    return [    
        document.getElementById(side+"Top").value, 
        document.getElementById(side+"Jgl").value, 
        document.getElementById(side+"Mid").value, 
        document.getElementById(side+"Bot").value, 
        document.getElementById(side+"Sup").value
    ]
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
    let blueTeam = getTeam("blue")
    let redTeam = getTeam("red")
    let patch = document.getElementById("patch").value
    let potw = document.getElementById("potw").value
    let motd = document.getElementById("motd").value

    localStorage.setItem("blue", blue)
    localStorage.setItem("blueScore", blueScore)
    localStorage.setItem("red", red)
    localStorage.setItem("redScore", redScore)
    localStorage.setItem("blueTeam", blueTeam)
    localStorage.setItem("redTeam", redTeam)
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
    let blueTeam = getTeam("blue")
    let redTeam = getTeam("red")

    localStorage.setItem("blue", red)
    localStorage.setItem("blueScore", redScore)
    localStorage.setItem("red", blue)
    localStorage.setItem("redScore", blueScore)
    localStorage.setItem("blueTeam", redTeam)
    localStorage.setItem("redTeam", blueTeam)
    
    document.getElementById("blue").value = red
    document.getElementById("blueScore").value = redScore
    document.getElementById("red").value = blue
    document.getElementById("redScore").value = blueScore
    loadTeam("blue", redTeam)
    loadTeam("red", blueTeam)
}

document.getElementById("submit").addEventListener("click", storevars);
document.getElementById("swap").addEventListener("click", swapvars);

loadvars();