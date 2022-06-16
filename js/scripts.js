const boxs = document.querySelectorAll(".boxs")
let checkTime = true
const playerX = "x"
const playerO = "O"

document.addEventListener("click", (event) => {
    if (event.target.matches(".boxs")){
        play(event.target.id)
 }});

 function play(id) {
    const box = document.getElementById(id)
    time = checkTime ? playerX : playerO
    box.textContent = time
    checkTime = !checkTime
 }

 