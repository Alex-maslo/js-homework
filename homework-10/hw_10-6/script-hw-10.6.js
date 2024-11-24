document.getElementById("convertor").addEventListener("input", function () {
  let result = document.getElementById("result");

  if (!result) {
    result = document.createElement("p");
    result.id = "result";
    document.body.appendChild(result);
    result.textContent = (+this.value * 2.20462).toFixed(2);
  } else {
    result.textContent = (+this.value * 2.20462).toFixed(2);
  }
});
