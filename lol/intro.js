let casters = localStorage.getItem("casters")
let POTW = localStorage.getItem("potw")

if (!casters) { casters = "1" }
if (!POTW) { POTW = "Everyone" }

document.getElementById("overlayImg").src = "../assets/" + casters + " Man Intro.png"
document.getElementById("POTW").textContent = POTW