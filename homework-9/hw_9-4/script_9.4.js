let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];

// <div className='item'>

for (const { title, monthDuration } of coursesAndDurationArray) {
  let item = document.createElement("div");
  let heading = document.createElement("h1");
  let description = document.createElement("p");

  item.classList.add("item");
  heading.classList.add("heading");
  description.classList.add("description");

  heading.innerText = title;
  description.innerText = monthDuration;

  item.append(heading, description);
  document.body.appendChild(item);
}
