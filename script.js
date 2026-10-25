
const openButton = document.getElementById("openLetter");
const envelope = document.getElementById("envelope");
const letterSection = document.getElementById("letterSection");

const surpriseButton = document.getElementById("surpriseButton");
const hiddenMessage = document.getElementById("hiddenMessage");

openButton.addEventListener("click", function () {
    envelope.classList.add("opened");

    openButton.textContent = "Your letter is open ♡";
    openButton.disabled = true;
    openButton.style.opacity = "0.7";
    openButton.style.cursor = "default";

    // Let the envelope animation begin before showing the letter.
    window.setTimeout(function () {
        letterSection.hidden = false;

        letterSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 650);
});

surpriseButton.addEventListener("click", function () {
    hiddenMessage.hidden = false;

    surpriseButton.textContent = "A little reminder, just for you ♡";
    surpriseButton.disabled = true;
    surpriseButton.style.opacity = "0.7";
    surpriseButton.style.cursor = "default";

    hiddenMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});
