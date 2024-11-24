let button = document.getElementById("btn");

button.onclick = () => {
  const age = document.getElementById("user-age");
  const text = document.getElementById("user-age-value");

  if (!isNaN(age.value) && age.value > 0) {
    age.value > 18
      ? (text.textContent = "Ваш вік більше 18")
      : (text.textContent = "Ваш вік менше 18");
  } else {
    text.textContent = "Потрібно ввести число більше нуля";
  }
};
