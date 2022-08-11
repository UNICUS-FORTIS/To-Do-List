const clock = document.querySelector("#clock");

function setTime() {
  const timer = new Date();
  const hours = String(timer.getHours()).padStart(2, "0");
  const minutes = String(timer.getMinutes()).padStart(2, "0");

  clock.innerText = `${hours} : ${minutes}`;
}

setInterval(setTime, 1000);

const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const greeting = document.querySelector("#greeting-user");

function submitHandler(e) {
  if (e.keyCode == 13) {
    const trigger = function placeUserName() {
      loginForm.classList.add("hidden");
      const userName = loginInput.value;
      greeting.innerText = "Good day " + userName;
      greeting.classList.remove("hidden");
    };
    trigger();
  }
}

loginForm.addEventListener("keydown", submitHandler);
