const containerHand = document.querySelector(".container-hand")
const containerSelectHand = document.querySelector(".container-select-hand")
const selecHand = document.querySelector(".select-hand")
const infoGame = document.querySelector(".info-game");
const info = document.getElementById("info");
const btnPlayAgain = document.getElementById("play-again");
const handIA = document.querySelector(".hand-ia")
const containerEffectWinnerPicked = document.getElementById("effect-winner-picked")
const containerEffectWinnerHouse = document.getElementById("effect-winner-house")
const ia = ["paper", "scissors", "rock"]
const ptsShow = document.getElementById("pts");


let pts = 0;


containerHand.addEventListener("click", (e) => {
    selectHand(e);
})
btnPlayAgain.addEventListener("click", (id) => {
    containerHand.style.display = "flex"
    containerSelectHand.style.display = "none"
    infoGame.style.display = "none"
    removeClass();
})

const selectHand = (e) => {
    let id = e.target.id;
    if (e.target.classList == "hand") {

        containerHand.style.display = "none"
        containerSelectHand.style.display = "flex"


        selecHand.classList.add(`${id}-select`)

        let random = Math.random() * (2 - 0) + 0;
        let rr = Math.round(random);


        handIA.classList.add(`${ia[rr]}-select`)



        if (e.target.id == "paper" && ia[rr] == "rock") {
            setTimeout(sumarPts, 2500)
        } else if (e.target.id == "paper" && ia[rr] == "paper") {
            setTimeout(tieGame, 2500)
        } else if (e.target.id == "paper" && ia[rr] == "scissors") {
            setTimeout(restarPts, 2500)
        } else if (e.target.id == "scissors" && ia[rr] == "paper") {
            setTimeout(sumarPts, 2500)
        } else if (e.target.id == "scissors" && ia[rr] == "scissors") {
            setTimeout(tieGame, 2500)
        } else if (e.target.id == "scissors" && ia[rr] == "rock") {
            setTimeout(restarPts, 2500)
        } else if (e.target.id == "rock" && ia[rr] == "scissors") {
            setTimeout(sumarPts, 2500)
        } else if (e.target.id == "rock" && ia[rr] == "rock") {
            setTimeout(tieGame, 2500)
        } else if (e.target.id == "rock" && ia[rr] == "paper") {
            setTimeout(restarPts, 2500)
        }
    } else {
        return;
    }

};

function sumarPts() {
    info.innerHTML = "YOU WIN"
    pts = pts + 1;
    ptsShow.innerHTML = pts;
    infoGame.style.display = "flex"
    containerEffectWinnerPicked.classList.add("winner")
}

function restarPts() {
    if (pts > 0) {
        info.innerHTML = "YOU LOSE"
        pts = pts - 1;
        ptsShow.innerHTML = pts;
        infoGame.style.display = "flex"
        containerEffectWinnerHouse.classList.add("winner")
    } else {
        info.innerHTML = "YOU LOSE"
        ptsShow.innerHTML = pts;
        infoGame.style.display = "flex"
        containerEffectWinnerHouse.classList.add("winner")
    }
}

function tieGame() {
    info.innerHTML = "TIE"
    infoGame.style.display = "flex"
}

function removeClass() {
    selecHand.classList.remove("paper-select")
    selecHand.classList.remove("scissors-select")
    selecHand.classList.remove("rock-select")

    handIA.classList.remove("paper-select")
    handIA.classList.remove("scissors-select")
    handIA.classList.remove("rock-select")

    containerEffectWinnerPicked.classList.remove("winner")
    containerEffectWinnerHouse.classList.remove("winner")
}