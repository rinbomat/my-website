// click links in header
const headerLinks = document.querySelector("#linkAll");
const link_header = document.querySelectorAll("#linkAll > li");
link_header.forEach(function (item) {
  item.addEventListener("click", function (eo) {
    eo.target.parentElement
      .getElementsByClassName("activeH")[0]
      .classList.remove("activeH");
    eo.target.classList.add("activeH");
  });
});
// .activeHover
const info = document.querySelector(".info");
const info_li = document.querySelectorAll(".lin");

console.log(info_li);

info_li.forEach(function (item) {
  item.addEventListener("click", function (eo) {
    info
      .getElementsByClassName("activeHover")[0]
      .classList.remove("activeHover");

    item.classList.add("activeHover");
  });
});
// myTitle
let myTitle = document.querySelector("#myTitle");
console.log(myTitle);

let i = 1;
const ed = "|";
setInterval(() => {
  const editTitle = "The Utimate Anime Adventure";
  myTitle.innerText = `${editTitle.slice(0, i)}|`;
  i++;
  if (i > editTitle.length) {
    i = 0;
  }
}, 200);
// save
const save = document.querySelector(".save");
save.addEventListener("click", function () {
  save.classList.toggle("saveActive");
});
// display flex to profile
const diplayPro = document.querySelector(
  "body > header > div.links > a.profile"
);
const proflieSie = document.getElementsByClassName("proflieSie")[0];
console.log(proflieSie);

const filter = document.getElementById("filter");
console.log(proflieSie);

diplayPro.addEventListener("click", () => {
  filter.classList.remove("dis");
});
const cancel = document.querySelector("#cancel");
cancel.addEventListener("click", () => {
  filter.classList.add("dis");
});

const inputs = document.querySelectorAll(".proflieSie  input");
inputs.forEach((item) => {
  item.addEventListener("focus", function (eo) {
    item.classList.add("hideen");
  });
});
// loop card anime
