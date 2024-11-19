let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];

coursesAndDurationArray.forEach(({ title, monthDuration }) => {
  let block = document.createElement("div");
  let headingElement = document.createElement("h3");
  let paragraphElement = document.createElement("p");

  headingElement.innerText = title;
  paragraphElement.innerText = monthDuration;

  // для візуалізації окремих блоків
  block.style.cssText = "border: 1px solid red; margin: 5px; padding: 15px";
  //

  block.append(headingElement, paragraphElement);
  document.body.appendChild(block);
});
