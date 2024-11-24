let buttonSubmit = document.getElementById("btn");

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  let name = document.getElementById("user-name").value;
  let surname = document.getElementById("user-surname").value;
  let age = document.getElementById("user-age").value;

  if (!name || !surname || !age) {
    alert("Будь ласка, заповніть всі поля!");
    return;
  }

  if (isNaN(age) || age <= 0) {
    alert("Вік повинен бути числом більше нуля!");
    return;
  }

  let existingTextBlock = document.getElementById("text");

  if (!document.getElementById("text")) {
    let userObject = {
      name: name,
      surname: surname,
      age: age,
    };

    let textBlock = document.createElement("p");
    textBlock.id = "text";
    textBlock.innerText = `Ім'я: ${userObject.name} Прізвище: ${userObject.surname} Вік: ${userObject.age} `;
    document.body.appendChild(textBlock);
  } else {
    existingTextBlock.innerText = `Ім'я: ${name} Прізвище: ${surname} Вік: ${age} `;
  }
});
