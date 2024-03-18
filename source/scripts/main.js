document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelector("#form").addEventListener('submit', (e) => {
        
        e.preventDefault()

        let maxNumber = document.querySelector("#max-number").value;
        maxNumber  = parseInt(maxNumber);

        let randomNumber = Math.random() * maxNumber;

        randomNumber = Math.round(randomNumber + 1)

        document.querySelector("#result-value").innerText = randomNumber
        document.querySelector(".result").style.display = 'block'
        
    })
})