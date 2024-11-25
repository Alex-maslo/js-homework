if (localStorage.length === 0) {
  localStorage.setItem("counter", "100");
  localStorage.setItem("lastUpdateTime", Date.now().toString());
}

const element = document.getElementById("text-block");
element.textContent = `${localStorage.getItem("counter")} грн`;

let lastUpdateTime = +localStorage.getItem("lastUpdateTime");
let currentTime = Date.now();

// let counter = +localStorage.getItem("counter");
// counter = counter + 10;
// localStorage.setItem("counter", counter.toString());

if (currentTime - lastUpdateTime >= 10000) {
  let counter = +localStorage.getItem("counter") + 10;
  localStorage.setItem("counter", counter.toString());
  localStorage.setItem("lastUpdateTime", currentTime.toString());
}
