const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".js-greeting");
const USER_LS = "user";
const SHOWN_CS = "showing";

function greetUser(username) {
  greeting.classList.add(SHOWN_CS);
  greeting.innerHTML = `Hello, ${username}`;
}

function handleSubmit(event) {
  event.preventDefault();
  username = loginInput.value;
  localStorage.setItem(USER_LS, username);
  loginForm.classList.remove(SHOWN_CS);
  greetUser(username);
}

function loadUserName() {
  const username = localStorage.getItem(USER_LS);
  if (username !== null) {
    greetUser(username);
  } else {
    loginForm.classList.add(SHOWN_CS);
    loginForm.addEventListener("submit", handleSubmit);
  }
}

function init() {
  loadUserName();
}

init();
