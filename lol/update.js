function load() {
    let blueName = localStorage.getItem("blue")
    let blueScore = localStorage.getItem("blueScore")
    let redName = localStorage.getItem("red")
    let redScore = localStorage.getItem("redScore")
    let blueTeam = localStorage.getItem("blueTeam").split(",")
    let redTeam = localStorage.getItem("redTeam").split(",")
    let game = localStorage.getItem("game")
    let patch = localStorage.getItem("patch")
    let potw = localStorage.getItem("potw")
    let motd = localStorage.getItem("motd")

    if (!blueName) { blueName = "Blue" }
    if (!blueScore) { blueScore = "0" }
    if (!redName) { redName = "Red" }
    if (!redScore) { redScore = "0" }
    if (!game) { game = "Game 1" } else { game = "Game " + game }
    if (!patch) { patch = "Patch " + getLatest() } else { patch = "Patch " + patch }
    if (!potw) { potw = "Everyone" }
    if (!motd) { motd = "" }

    console.log("--Load Start--")
    try { document.getElementById("blueTeam").textContent = blueName } catch (error) {console.log("No blueTeam display")}
    try { document.getElementById("blueScore").textContent = blueScore } catch (error) { console.log("No blueScore display") }
    try { document.getElementById("redTeam").textContent = redName } catch (error) { console.log("No redTeam display") }
    try { document.getElementById("redScore").textContent = redScore } catch (error) { console.log("No redScore display") }
    try { loadTeam(blueTeam, "blue") } catch (error) { console.log("No bluePlayer display") }
    try { loadTeam(redTeam, "red") } catch (error) { console.log("No redPlayer display") }
    try { document.getElementById("game").textContent = game } catch (error) { console.log("No game num display") }
    try { document.getElementById("patch").textContent = patch } catch (error) { console.log("No patch display") }
    try { document.getElementById("potw").textContent = potw } catch (error) { console.log("No potw display") }
    try { document.getElementById("motd").textContent = motd } catch (error) { console.log("No motd display") }
}

setInterval(load, 1000)

function loadTeam(team, side) {
    document.getElementById(side+"Top").textContent = team[0]
    document.getElementById(side+"Jgl").textContent = team[1]
    document.getElementById(side+"Mid").textContent = team[2]
    document.getElementById(side+"Bot").textContent = team[3]
    document.getElementById(side+"Sup").textContent = team[4]
}

function getLatest() {
    return JSON.parse(Get("https://ddragon.leagueoflegends.com/api/versions.json"))[0].split(".").slice(0,2).join(".");
}

function Get(url){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}