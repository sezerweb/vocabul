const infoBox = document.getElementsByClassName("info-box")[0];
const infoButton = document.getElementsByClassName("info-button")[0];
const infoClose = document.getElementsByClassName("info-close")[0];

const statsBox = document.getElementsByClassName("stats-box")[0];
const statsButton = document.getElementsByClassName("stats-button")[0];
const statsClose = document.getElementsByClassName("stats-close")[0];

const settingsBox = document.getElementsByClassName("settings-box")[0];
const settingsButton = document.getElementsByClassName("settings-button")[0];
const settingsClose = document.getElementsByClassName("settings-close")[0];

infoButton.addEventListener("click", () => {
  openBox("info");
});
statsButton.addEventListener("click", () => {
  openBox("stats");
});
settingsButton.addEventListener("click", () => {
  openBox("settings");
});

infoClose.addEventListener("click", () => {
  closeBox();
});
statsClose.addEventListener("click", () => {
  closeBox();
});
settingsClose.addEventListener("click", () => {
  closeBox();
});

function openBox(box) {
  if (box === "settings") {
    settingsBox.classList.toggle("open");
    infoBox.classList.remove("open");
    statsBox.classList.remove("open");
  } else if (box === "stats") {
    statsBox.classList.toggle("open");
    infoBox.classList.remove("open");
    settingsBox.classList.remove("open");
  } else if (box === "info") {
    infoBox.classList.toggle("open");
    statsBox.classList.remove("open");
    settingsBox.classList.remove("open");
  }
}
function closeBox() {
  infoBox.classList.remove("open");
  statsBox.classList.remove("open");
  settingsBox.classList.remove("open");
}

openBox("settings");
