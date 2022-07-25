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
  infoBox.classList.toggle("open");
  statsBox.classList.remove("open");
  settingsBox.classList.remove("open"); 
});
statsButton.addEventListener("click", () => {
  statsBox.classList.toggle("open");
  infoBox.classList.remove("open");
  settingsBox.classList.remove("open"); 
});
settingsButton.addEventListener("click", () => {
  settingsBox.classList.toggle("open");
  infoBox.classList.remove("open");
  statsBox.classList.remove("open"); 
});

infoClose.addEventListener("click", () => {
  infoBox.classList.remove("open"); 
});
statsClose.addEventListener("click", () => {
  statsBox.classList.remove("open"); 
});
settingsClose.addEventListener("click", () => {
  settingsBox.classList.remove("open"); 
});
