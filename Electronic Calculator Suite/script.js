// ===============================
// Electronic Calculator Suite
// script.js
// ===============================

// ---------- Dark Mode ----------

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeBtn.innerHTML = "☀️";
        } else {
            themeBtn.innerHTML = "🌙";
        }
    });
}

// ---------- Calculator Search ----------

const searchBox = document.getElementById("searchBox");
const cards = document.querySelectorAll(".card");

if (searchBox) {

    // Filter cards while typing
    searchBox.addEventListener("keyup", function () {

        let value = searchBox.value.toLowerCase();

        cards.forEach(function (card) {

            let text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// ---------- Search on Enter ----------

function searchCalculator() {

    let value = searchBox.value.toLowerCase();

    for (let card of cards) {

        let text = card.innerText.toLowerCase();

        if (text.includes(value)) {

            let link = card.querySelector("a");

            if (link) {
                window.location.href = link.href;
                return;
            }
        }
    }

    alert("Calculator not found.");
}

// ---------- Welcome Message ----------

window.onload = function () {
    console.log("Electronic Calculator Suite Loaded Successfully");
};