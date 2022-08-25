function getQuote() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => {
        return response.json();
    })
    .then( data => {
        let adviceNumber = document.getElementById("adviceNumber");
        let advice = document.getElementById("advice");

        adviceNumber.innerHTML = "ADVICE #" + data.slip.id;
        advice.innerHTML = '"'+data.slip.advice+'"';
    })
}