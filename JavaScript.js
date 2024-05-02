document
  .querySelector(".markedSentence")
  .addEventListener("click", function () {
    const divs = document.querySelectorAll(
      ".one, .two, .three, .four, .five, .six, .seven"
    );

    divs.forEach(function (div) {
      if (div.style.backgroundColor != "white") {
        div.style.backgroundColor = "white";
      }
    });

    const countNum = document.querySelector(".count");
    countNum.textContent = "0";

    const sentences = document.querySelectorAll(".sentence");
    sentences.forEach(function (sentence) {
      sentence.classList.add("hide-after");
    });
  });
