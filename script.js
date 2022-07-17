const body = document.querySelector("body");
const moon = document.querySelector(".moon-img");

const create = document.querySelector(".create");
const createList = document.querySelector(".create-list");
const list = document.querySelector(".list");
const lists = document.querySelector(".lists");
const listsList = document.querySelector(".lists-list");

const data = document.querySelector(".data");
const btn = document.querySelectorAll(".btn");

const counter = document.querySelector(".left-items span");

let text;

createList.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" || (e.key === "Enter" && !createList.value)) return;
  text = createList.value;
  createList.value = "";

  if (listsList.firstElementChild.classList.contains("list")) {
    listsList.removeChild(list);
    listsList.innerHTML = `<div class="position active"><div class="radio-btn">
    </div> <div class="list1">
    <p>${text}</p>
    <img src = "images/icon-cross.svg" class= "cross" alt="close">
  </div>
  <hr></div>`;
    counter.textContent = Number(counter.textContent) + 1;
  } else {
    listsList.innerHTML += `<div class="position active"><div class="radio-btn">
    </div> <div class="list1">
    <p>${text}</p>
    <img src = "images/icon-cross.svg" class= "cross" alt="close">
  </div>
  <hr></div>`;
    counter.textContent = Number(counter.textContent) + 1;
  }
});

listsList.addEventListener("click", (e) => {
  if (!e.target.classList.contains("radio-btn")) return;
  e.target.classList.add("radio-background");

  e.target.parentElement.classList.add("active");
  e.target.parentElement.classList.add("completed");
  e.target.nextElementSibling.firstElementChild.classList.add("para--light");

  if (Number(counter.textContent) > 0) {
    counter.textContent = Number(counter.textContent) - 1;
  }
});

moon.addEventListener("click", () => {
  const para = document.querySelectorAll(".list1 p");
  const radioBtn = document.querySelectorAll(".radio-btn");
  create.classList.toggle("create-dark");
  createList.classList.toggle("create-list--dark");
  body.classList.toggle("background-dark");
  data.classList.toggle("dark");
  btn.forEach((btn) => btn.classList.toggle("dark"));
  listsList.classList.toggle("list-dark");
  radioBtn.forEach((radiobtn) => radiobtn.classList.toggle("radio-btn--dark"));
  para.forEach((para) => para.classList.toggle("para--dark"));

  if (!create.classList.contains("create-dark")) {
    moon.src = "images/icon-moon.svg";
    moon.alt = "moon";
  } else {
    moon.src = "images/icon-sun.svg";
    moon.alt = "sun";
  }
});
