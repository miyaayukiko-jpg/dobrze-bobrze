const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvddzqy";

const activities = {
  city: {
    title: "🦆 Miejskie chillowanie 🦆",
    description: "Ty, ja i... Park Cytadela? W pakiecie kocyk, przekąski, planszówka i relaks :) Dużo zieleni i przestrzeni a pogodynka zapowiada 23°C"
  },
  lake: {
    title: "🦦 Chillowanie po sąsiedzku 🦦",
    description: "Pkakujemy się do pociągu, 15 minut i... Jesteśmy w Puszczykowie :) oczywiście koc i przekąski pod pachę, i możemy posiedzieć nad Wartą, a obiad zjeść w Restauracji Lokomotywa!"
  },
  trip: {
    title: "🐼 Chillowanie na wycieczce 🐼",
    description: "Jedziemy do Torunia! Spacer po starówce i bulwarze, kawa, pierniki i trochę udawania turystów :)"
  }
};

const startBtn = document.getElementById("startBtn");
const confirmBtn = document.getElementById("confirmBtn");

const welcomeScreen = document.getElementById("welcome-screen");
const choiceScreen = document.getElementById("choice-screen");
const endScreen = document.getElementById("end-screen");

const details = document.getElementById("details");
const detailsTitle = document.getElementById("details-title");
const detailsDescription = document.getElementById("details-description");

const envelopes = document.querySelectorAll(".envelope");

let selectedPlan = null;

startBtn.addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");
  choiceScreen.classList.remove("hidden");
});

envelopes.forEach((envelope) => {
  envelope.addEventListener("click", () => {
    envelopes.forEach((item) => item.classList.remove("active"));

    envelope.classList.add("active");

    selectedPlan = envelope.dataset.plan;
    const chosenActivity = activities[selectedPlan];

    details.classList.add("show");

    detailsTitle.textContent = chosenActivity.title;
    detailsDescription.textContent = chosenActivity.description;
  });
});

confirmBtn.addEventListener("click", async () => {
    if (!selectedPlan) return;

    const chosenActivity = activities[selectedPlan];

    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                wybor: chosenActivity.title,
                opis: chosenActivity.description,
                data: new Date().toLocaleString("pl-PL")
            })
        });

        if (response.ok) {
            console.log("Sukces! Wybór został wysłany ❤️");
        } else {
            const errorData = await response.json();
            console.error("Formspree zwróciło błąd:", errorData);
        }

    } catch (error) {
        console.error("Nie udało się połączyć z Formspree:", error);
    }

    choiceScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");
});

const beaver = document.querySelector(".beaver");
const easterEgg = document.getElementById("easterEgg");
const closeEgg = document.getElementById("closeEgg");

let beaverClicks = 0;

if (beaver) {
  beaver.addEventListener("click", (event) => {
    event.stopPropagation();
    beaverClicks++;

    if (beaverClicks >= 5) {
      easterEgg.classList.remove("hidden");
      beaverClicks = 0;
    }
  });
}

closeEgg.addEventListener("click", () => {
  easterEgg.classList.add("hidden");
});

console.error("CRITICAL ERROR: wykryto przemęczonego frontendowca.");

setTimeout(() => {
  console.log(
    "%cSpokojnie. Hotfix został wdrożony: sobota bez myślenia o pracy. 🦫❤️",
    "font-size: 16px; color: #4f7f6b; font-weight: bold;"
  );
}, 1200);

setTimeout(() => {
  console.log(
`%cHej ❤️

Jeżeli tu zaglądasz...
to znaczy, że jesteś dobry w te klocki ;p

Nie oceniaj mojego JavaScriptu.
To jest projekt pisany sercem, nie sprintem. 😅
`,
    "font-size: 16px; color: #4f7f6b; font-weight: bold;"
  );
}, 2500);