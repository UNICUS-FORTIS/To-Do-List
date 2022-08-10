const clock = document.querySelector("#clock");

function setTime() {
  const timer = new Date();
  clock.innerText = `${timer.getHours()} : ${timer.getMinutes()}`;
}

setInterval(setTime, 1000);

const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");

function placeUserName(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add("hidden");
  console.log(userName);
}
