const name = localStorage.getItem("visitorName") || "Nicole";

const message = `Hi, Nicole. ❤️

I have something to tell you...

I think alam mo na to, pero sasabihin ko pa din. \
I've been thinking about this for a long time na, \
and honestly, matagal ko na gusto sabihin sayo to pero \
I kept delaying it kasi hindi ko alam kung pano. \
And natatakot ako baka hindi mo na ko kausapin \
pag sinabi ko. Pero na realize ko na wala namang \
mangyayari kung hindi ko sasabihin, so ito na siguro \
yung tamang time para sabihin.

So here I am, finally choosing to be honest, kahit na kinakabahan.`;

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
        <h1 class="celebrate-title">❤️YEAHEYY!❤️</h1>

        <p class="celebrate-text">
            I like you, Nicole. I like you not just because of your looks. \
            oo nung una, na-attract ako, pero nung nagkita na tayo at mas \
            nakilala kita, mas lalo kitang nagustohan. Dahil sa humor \
            mo and sa personality mo… I know na hindi pa kita kilalang kilala \
            kaya i want to know you more. So may chance man or wala, whatever it is. \
            I will wait for the time that you develop your feelings sakin.
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
  "Totoo exit nalang?? 🥺🥺",
  "Think again po! ❤️",
  "Kawawa naman ako 😭",
  "Broken na heart ko 💔",
  "Please yung isa nalang click mo po! 😢",
  "Iiyak na ako 😭",
  "Blehh bawal 😝❤️",
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
