// THE JOURNEY OF 2 KIDS — cinematic film experience
const $ = (selector) => document.querySelector(selector);
const opening = $("#opening");
const film = $("#film");

function beginFilm() {
  opening.style.transition = "opacity 1.2s ease, transform 1.4s ease";
  opening.style.opacity = "0";
  opening.style.transform = "scale(1.025)";
  setTimeout(() => {
    opening.classList.add("hidden");
    film.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "instant" });
    revealObserver.observeAll();
  }, 1050);
}
$("#startFilm").addEventListener("click", beginFilm);

// Reveal scene text as the viewer scrolls.
const revealObserver = {
  observer: null,
  observeAll() {
    const items = document.querySelectorAll(".scene-copy, .message-copy, .phone-moment, .date-scene > *, .reflection-copy, .present-copy, .end-credits > *");
    if (!("IntersectionObserver" in window)) {
      items.forEach(item => item.classList.add("in-view"));
      return;
    }
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          this.observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(item => this.observer.observe(item));
  }
};

// Relationship counter begins on 25 October 2024.
// Month is 9 because JavaScript counts months from zero.
const startDate = new Date(2024, 9, 25, 0, 0, 0);
const two = n => String(n).padStart(2, "0");
function updateCounter() {
  let ms = Math.max(0, Date.now() - startDate.getTime());
  const days = Math.floor(ms / 86400000);
  ms %= 86400000;
  const hours = Math.floor(ms / 3600000);
  ms %= 3600000;
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  $("#days").textContent = String(days).padStart(3, "0");
  $("#hours").textContent = two(hours);
  $("#minutes").textContent = two(minutes);
  $("#seconds").textContent = two(seconds);
}
updateCounter();
setInterval(updateCounter, 1000);

// Personal soundtrack: the visitor selects an audio file from their own device.
const audio = $("#filmAudio");
const audioFile = $("#audioFile");
let selectedAudioUrl = null;
$("#soundButton").addEventListener("click", async () => {
  if (!audio.src) {
    audioFile.click();
    return;
  }
  if (audio.paused) {
    try {
      await audio.play();
      $("#soundState").textContent = "ON";
    } catch {
      $("#soundState").textContent = "OFF";
    }
  } else {
    audio.pause();
    $("#soundState").textContent = "OFF";
  }
});
audioFile.addEventListener("change", async () => {
  const file = audioFile.files?.[0];
  if (!file) return;
  if (selectedAudioUrl) URL.revokeObjectURL(selectedAudioUrl);
  selectedAudioUrl = URL.createObjectURL(file);
  audio.src = selectedAudioUrl;
  try {
    await audio.play();
    $("#soundState").textContent = "ON";
  } catch {
    $("#soundState").textContent = "OFF";
  }
});
audio.addEventListener("pause", () => $("#soundState").textContent = "OFF");
audio.addEventListener("play", () => $("#soundState").textContent = "ON");

// Replay returns to the opening title card.
$("#replayButton").addEventListener("click", () => {
  film.classList.add("hidden");
  opening.classList.remove("hidden");
  opening.style.opacity = "1";
  opening.style.transform = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Gentle parallax on desktop hero image.
const hero = document.querySelector(".scene-hero");
const heroImage = document.querySelector(".hero-image");
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  hero.addEventListener("pointermove", event => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    heroImage.style.transform = `scale(1.05) translate(${x * -10}px, ${y * -8}px)`;
  });
  hero.addEventListener("pointerleave", () => {
    heroImage.style.transform = "scale(1.02)";
  });
}
