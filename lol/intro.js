let casters = localStorage.getItem("casters")
let caster1 = localStorage.getItem("caster1")
let caster2 = localStorage.getItem("caster2")
let caster3 = localStorage.getItem("caster3")
let POTW = localStorage.getItem("potw")

if (!casters) { casters = 1 }
if (!caster1) { caster1 = "Caster 1" }
if (!caster2) { caster2 = "Caster 2" }
if (!caster3) { caster3 = "Caster 3" }
if (!POTW) { POTW = "Everyone" }

if (casters == 1) {
    let height = "10vh"
    let width = "39vw"
    let bottom = "24vh"

    let caster1Box = document.getElementById("intro_caster1Box")
    caster1Box.style.height = height
    caster1Box.style.width = width
    caster1Box.style.bottom = bottom
    caster1Box.style.left = "30vw"

    document.getElementById("intro_caster1").textContent = caster1

} else if (casters == 2 ) {
    let height = "10vh"
    let width = "39vw"
    let bottom = "24vh"

    let caster1Box = document.getElementById("intro_caster1Box")
    caster1Box.style.height = height
    caster1Box.style.width = width
    caster1Box.style.bottom = bottom
    caster1Box.style.left = "7vw"

    let caster2Box = document.getElementById("intro_caster2Box")
    caster2Box.style.height = height
    caster2Box.style.width = width
    caster2Box.style.bottom = bottom
    caster2Box.style.left = "55vw"

    document.getElementById("intro_caster1").textContent = caster1
    document.getElementById("intro_caster2").textContent = caster2

} else if (casters == 3) {
    let height = "10vh"
    let width = "28vw"
    let bottom = "29vh"

    let caster1Box = document.getElementById("intro_caster1Box")
    caster1Box.style.height = height
    caster1Box.style.width = width
    caster1Box.style.bottom = bottom
    caster1Box.style.left = "4vw"

    let caster2Box = document.getElementById("intro_caster2Box")
    caster2Box.style.height = height
    caster2Box.style.width = width
    caster2Box.style.bottom = bottom
    caster2Box.style.left = "35.8vw"

    let caster3Box = document.getElementById("intro_caster3Box")
    caster3Box.style.height = height
    caster3Box.style.width = width
    caster3Box.style.bottom = bottom
    caster3Box.style.left = "67.6vw"

    document.getElementById("intro_caster1").textContent = caster1
    document.getElementById("intro_caster2").textContent = caster2
    document.getElementById("intro_caster3").textContent = caster3
}

document.getElementById("overlayImg").src = "../assets/" + casters + " Man Intro.png"
document.getElementById("POTW").textContent = POTW