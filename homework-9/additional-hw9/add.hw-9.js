let coursesArray = [
  {
    title: "JavaScript Complex",
    monthDuration: 5,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
    ],
  },
  {
    title: "Java Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "git",
      "java core",
      "java advanced",
    ],
  },
  {
    title: "Python Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "python core",
      "python advanced",
    ],
  },
  {
    title: "QA Complex",
    monthDuration: 4,
    hourDuration: 909,
    modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"],
  },
  {
    title: "FullStack",
    monthDuration: 7,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
      "python",
      "java",
    ],
  },
  {
    title: "Frontend",
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "sass",
    ],
  },
];

let wrapper = document.getElementById("wrapper");

coursesArray.forEach(({ title, monthDuration, hourDuration, modules }) => {
  let cardCourse = document.createElement("div");
  let cardTitle = document.createElement("h3");
  let cardDurationContainer = document.createElement("div");
  let cardDurationMonth = document.createElement("div");
  let cardDurationHour = document.createElement("div");
  let modulesList = document.createElement("ul");

  cardCourse.classList.add("course");
  cardTitle.classList.add("course__title");
  cardDurationContainer.classList.add("course__duration-container");
  cardDurationMonth.classList.add("course__month-duration");
  cardDurationHour.classList.add("course__hour-duration");
  modulesList.classList.add("course__modules");

  cardTitle.textContent = title;
  cardDurationMonth.textContent = `Місяці: ${monthDuration}`;
  cardDurationHour.textContent = `Години: ${hourDuration}`;

  modules.forEach((module) => {
    let moduleItem = document.createElement("li");
    moduleItem.classList.add("modules");
    moduleItem.textContent = module;
    modulesList.appendChild(moduleItem);
  });

  cardDurationContainer.append(cardDurationMonth, cardDurationHour);
  cardCourse.append(cardTitle, cardDurationContainer, modulesList);
  wrapper.appendChild(cardCourse);
});

const cardsArray = document.querySelectorAll(".course");
const maxHeight = Math.max(
  ...Array.from(cardsArray).map((item) => item.offsetHeight),
);
cardsArray.forEach((item) => (item.style.height = `${maxHeight}px`));
