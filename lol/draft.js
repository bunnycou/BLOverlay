

let blueName = localStorage.getItem("blue")
let blueScore = localStorage.getItem("blueScore")
let redName = localStorage.getItem("red")
let redScore = localStorage.getItem("redScore")
let casters = localStorage.getItem("casters")
// let game = localStorage.getItem("game")
// let patch = localStorage.getItem("patch")

if (!blueName) { blueName = "Blue" }
if (!blueScore) { blueScore = "0" }
if (!redName) { redName = "Red" }
if (!redScore) { redScore = "0" }
if (!casters) { casters = "1" }
// if (!game) { game = "Game 1" } else { game = "Game " + game }
// if (!patch) { patch = "Latest Patch" } else { patch = "Patch " + patch }

document.getElementById("draft_blueName").textContent = blueName
document.getElementById("blueScore").textContent = blueScore
document.getElementById("draft_redName").textContent = redName
document.getElementById("redScore").textContent = redScore
document.getElementById("overlayImg").src = "../assets/" + casters + " Man Draft Overlay.png"
// document.getElementById("draft_game").textContent = game 
// document.getElementById("draft_patch").textContent = patch