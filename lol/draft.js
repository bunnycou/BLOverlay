function load() {
    let blueName = localStorage.getItem("blue")
    let blueScore = localStorage.getItem("blueScore")
    let redName = localStorage.getItem("red")
    let redScore = localStorage.getItem("redScore")
    let casters = localStorage.getItem("casters")
    let caster1 = localStorage.getItem("caster1")
    let caster2 = localStorage.getItem("caster2")
    let caster3 = localStorage.getItem("caster3")

    if (!blueName) { blueName = "Blue" }
    if (!blueScore) { blueScore = "0" }
    if (!redName) { redName = "Red" }
    if (!redScore) { redScore = "0" }
    if (!casters) { casters = 1 }
    if (!caster1) { caster1 = "Caster 1" }
    if (!caster2) { caster2 = "Caster 2" }
    if (!caster3) { caster3 = "Caster 3" }

    if (casters == 1) {
        let height = "10vh"
        let width = "39vw"
        let bottom = "26vh"

        let caster1Box = document.getElementById("draft_caster1Box")
        caster1Box.style.height = height
        caster1Box.style.width = width
        caster1Box.style.bottom = bottom
        caster1Box.style.left = "30vw"

        document.getElementById("draft_caster1").textContent = caster1
        document.getElementById("draft_caster2").textContent = ""
        document.getElementById("draft_caster3").textContent = ""

    } else if (casters == 2 ) {
        let height = "10vh"
        let width = "28.5vw"
        let bottom = "34vh"

        let caster1Box = document.getElementById("draft_caster1Box")
        caster1Box.style.height = height
        caster1Box.style.width = width
        caster1Box.style.bottom = bottom
        caster1Box.style.left = "20.5vw"

        let caster2Box = document.getElementById("draft_caster2Box")
        caster2Box.style.height = height
        caster2Box.style.width = width
        caster2Box.style.bottom = bottom
        caster2Box.style.left = "51.5vw"

        document.getElementById("draft_caster1").textContent = caster1
        document.getElementById("draft_caster2").textContent = caster2
        document.getElementById("draft_caster3").textContent = ""

    } else if (casters == 3) {
        let height = "10vh"
        let width = "23vw"
        let bottom = "22vh"
        let upper = "54vh"

        let caster1Box = document.getElementById("draft_caster1Box")
        caster1Box.style.height = height
        caster1Box.style.width = width
        caster1Box.style.bottom = upper
        caster1Box.style.left = "26vw"

        let caster2Box = document.getElementById("draft_caster2Box")
        caster2Box.style.height = height
        caster2Box.style.width = width
        caster2Box.style.bottom = upper
        caster2Box.style.left = "50.5vw"

        let caster3Box = document.getElementById("draft_caster3Box")
        caster3Box.style.height = height
        caster3Box.style.width = width
        caster3Box.style.bottom = bottom
        caster3Box.style.left = "39vw"

        document.getElementById("draft_caster1").textContent = caster1
        document.getElementById("draft_caster2").textContent = caster2
        document.getElementById("draft_caster3").textContent = caster3
    }

    document.getElementById("draft_blueName").textContent = blueName
    document.getElementById("blueScore").textContent = blueScore
    document.getElementById("draft_redName").textContent = redName
    document.getElementById("redScore").textContent = redScore
    document.getElementById("overlayImg").src = "../assets/" + casters + " Man Draft Overlay.png"
}

setTimeout(load, 5000)