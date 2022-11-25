const questionContainer = document.querySelectorAll(".question-container")

questionContainer.forEach(container => {
    container.querySelector(".question").addEventListener("click", () => {
        const answer = container.querySelector(".answer")
        if(answer.style.display === "" || answer.style.display === "none") {
            container.querySelector(".answer").style.display = "block"
            container.querySelector(".answer").style.animationName = "fadeIn"
            container.querySelector(".question").classList.add("question-active")
            container.querySelector(".arrow-icon").style.animationName = "rotateArrow"
        }
        else if(answer.style.display === "block") {
            container.querySelector(".answer").style.display = "none"
            container.querySelector(".question").classList.remove("question-active")
            container.querySelector(".arrow-icon").style.animationName = "rotateArrowBack"
        }
    
    })
})