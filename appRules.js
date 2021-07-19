const containerTargetRules = document.querySelector(".container-target-rules");
const btnRules = document.getElementById("rules");
const containerRules = document.getElementById("container-rules")

btnRules.addEventListener("click", () => {
    containerRules.style.display = "block"

})

containerRules.addEventListener("click", () => {
    containerRules.style.display = "none"
})