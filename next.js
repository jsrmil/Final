const name = localStorage.getItem("visitorName") || "Nicole";

const message = `Hi, Nicole. ❤️

I have something to tell you...

I LIKE YOU!!

I think alam mo naman na, hindi naman halata noh. \
sa insta pa nga lang nagpapapansin na, follow, unfollow, \
tapos follow ulit papasin yern. hindi ko nga alam bakit \
finallow back mo ko eh, napindot mo lang ba non? or ano? \
pero seryoso, thank you kasi hindi mo ko blinock non hindi \
ka nakulitan sakin, na inis ka lang. kala ko nga hanggang \
IG mutual nalang eh, buti nalang kinapalan ko mukha ko nag \
reply ako sa story mo tapos ayun wala na nakangiti na ko, \
kachat na kita baka nga nagsasawa kana kausap ako eh. BTW

I have a question for you... 

may chance man or wala, whatever it is. \
I will wait for the time that you develop your feelings fo me.`;

const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {
  if (i < message.length) {
    typing.innerHTML += message.charAt(i);

    i++;

    setTimeout(typeWriter, 60);
  } else {
    // Wait 2 seconds before showing the popup
    setTimeout(() => {
      document.getElementById("popup").classList.add("show");
    }, 4000);
  }
}

window.onload = typeWriter;

// =======================
// YES BUTTON
// =======================

document.getElementById("yesBtn").addEventListener("click", () => {
  // Main explosion
  const duration = 2000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 60,
      origin: { x: 0 },
    });

    confetti({
      particleCount: 6,
      angle: 120,
      spread: 60,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

  const popupContent = document.querySelector(".popup-content");

  popupContent.innerHTML = `
        <h1 class="celebrate-title">❤️ YAY!! ❤️</h1>

        <p class="celebrate-text">
            You just made me the happiest person. 🤗🥰🤭
        </p>
    `;
});

// =======================
// NO BUTTON
// =======================

const noBtn = document.getElementById("noBtn");
const popupTitle = document.querySelector(".popup h2");
const buttonArea = document.querySelector(".button-area");

const messages = [
  "Are you sure po? 🥺",
  "Sure na sure na? 😢",
  "Totoo NO na po?? 🥺🥺",
  "Think again po! ❤️",
  "Don't break my heart 💔",
  "YES dapat sagot eh 😭",
  "Please say YES na po! 😢",
  "Iiyak na ako 😭",
  "Blehh bawal NO 😝❤️",
];

let clickCount = 0;

noBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (clickCount < messages.length) {
    popupTitle.textContent = messages[clickCount];
  }

  const maxX = buttonArea.clientWidth - noBtn.offsetWidth;
  const maxY = buttonArea.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  clickCount++;
});
