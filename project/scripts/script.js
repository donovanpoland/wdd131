
//add event listener to new letter subscribe button
const submit = document.getElementById("subscribe");
const join = document.getElementById("join");
const newsLetter = document.getElementById("news-letter");
const msg = document.createElement("p");
msg.classList = "thanks"

submit.addEventListener("click", () => {
    msg.textContent = "Thank you for subscribing!"
    join.appendChild(msg);
    newsLetter.style.display = "none";
})





