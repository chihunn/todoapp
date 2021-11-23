const jsClock = document.querySelector(".js-clock");

function setClock() {
  const dateInfo = new Date();
  const hours = String(dateInfo.getHours()).padStart(2, "0");
  const minutes = String(dateInfo.getMinutes()).padStart(2, "0");
  const seconds = String(dateInfo.getSeconds()).padStart(2, "0");
  jsClock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function init() {
  setInterval(setClock, 1000);
}

init();
