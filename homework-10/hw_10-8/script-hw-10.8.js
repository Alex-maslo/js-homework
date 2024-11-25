document.getElementById("generateTable").addEventListener("click", function () {
  let rowsValue = +document.getElementById("rows").value;
  let columnValue = +document.getElementById("columns").value;
  let contentValue = document.getElementById("content").value;

  if (
    isNaN(rowsValue) ||
    rowsValue <= 0 ||
    isNaN(columnValue) ||
    columnValue <= 0
  ) {
    alert("Введіть коректну кількість рядків та комірок!");
    return;
  }

  let tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = "";

  let table = document.createElement("table");
  table.classList.add("table");

  for (let i = 0; i < rowsValue; i++) {
    let rowElement = document.createElement("tr");
    for (let j = 0; j < columnValue; j++) {
      let columnElement = document.createElement("td");
      rowElement.appendChild(columnElement);
      columnElement.textContent = contentValue;
    }
    table.appendChild(rowElement);
  }

  document.getElementById("tableContainer").appendChild(table);
});
