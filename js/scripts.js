const boxs = document.querySelectorAll(".boxs")
let checkTime = true
const playerX = "x"
const playerO = "O"

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

document.addEventListener("click", (event) => {
    if (event.target.matches(".boxs")){
        play(event.target.id)
 }});

 function play(id) {
    const box = document.getElementById(id)
    time = checkTime ? playerX : playerO
    box.textContent = time
    box.classList.add(time)
    checkVictory(time)
 }

function checkVictory(time) {
    const winner = winCondition.some((win) => {
        return win.every((index) => {
            return boxs(index).classList.contains(time)
        })
    })

    if (winner){
        endGame(time)
    } else if (checkDraw) {
        endGame()
    }else{
        checkTime = !checkTime
    }
}


function checkDraw() {
    return false
}


function endGame(winner = null) {
    if (winner) {
        console.log(`${winner} is the winner !`)
    }else {
        console.log("Draw")
    }
}