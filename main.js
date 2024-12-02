const adviceID = document.getElementById("adviceNo");

const adviceText = document.getElementById("adviceText");

const getAdvice = document.querySelector(".dice");

getAdvice.addEventListener("click", () => {
  //Get advice from selected API, For this API, max advice is #224
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceID.textContent = data.slip.id;
      adviceText.textContent = '"' + data.slip.advice + '"';
    })
    .catch((error) => {
      console.log("Error:", error);
      adviceText.textContent =
        '"Error getting advice, Check internet connection."';
      adviceText.style.color = "crimson";

      const myTimeout = setInterval(function () {
        adviceText.textContent = '"Click on the die to get a random advice."';
        adviceText.style.color = "hsl(193, 38%, 86%)";
      }, 3000);
    });
});
