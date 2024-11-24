if (localStorage.length === 0) {
  localStorage.setItem("number", "0");
}

let counter = +localStorage.getItem("number");
counter += 1;
localStorage.setItem("number", counter.toString());
document.getElementById("block").innerText = localStorage.getItem("number");
