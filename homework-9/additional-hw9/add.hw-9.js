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
  let cardBody = document.createElement("div");
  let cardTitle = document.createElement("h3");
  let cardMonthDuration = document.createElement("div");
  let cardHourDuration = document.createElement("div");
  let cardDurationContainer = document.createElement("div");
  let cardDurationModules = document.createElement("ul");

  cardBody.classList.add("course");
  cardTitle.classList.add("course__title");
  cardDurationContainer.classList.add("course__duration-container");
  cardMonthDuration.classList.add("course__month-duration");
  cardHourDuration.classList.add("course__hour-duration");
  cardDurationModules.classList.add("course__modules");

  cardTitle.textContent = title;
  cardMonthDuration.textContent = `Термін навчання: ${monthDuration} міс.`;
  cardHourDuration.textContent = `Кількість годин: ${hourDuration}`;

  modules.forEach((module) => {
    const moduleItem = document.createElement("li");
    moduleItem.textContent = module;
    cardDurationModules.appendChild(moduleItem);
  });

  cardDurationContainer.append(cardMonthDuration, cardHourDuration);
  cardBody.append(cardTitle, cardDurationContainer, cardDurationModules);
  wrapper.appendChild(cardBody);
});

//

const div = document.querySelectorAll(".course__title");
let max = 0;
div.forEach((value) => {
  const height = value.offsetHeight;
  console.log("Высота div:", height);

  if (value > max) {
    max = value;
  }
});

setTimeout(() => console.log(max), 200);
// console.log(max);

//