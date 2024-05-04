let skills = document.querySelector(".skills");
let achievements = document.querySelector(".achievements");
let games = document.querySelector(".my-games");
let hobbies = document.querySelector(".hobbies");
let photo = document.querySelector(".photo");
let aboutMe = document.querySelector(".about-me");

skills.addEventListener("mouseover", () => {
  skills.classList.add("hover-effect-skills");
});
skills.addEventListener("mouseout", () => {
  skills.classList.remove("hover-effect-skills");
});

achievements.addEventListener("mouseover", () => {
  achievements.classList.add("hover-effect-achievements");
});
achievements.addEventListener("mouseout", () => {
  achievements.classList.remove("hover-effect-achievements");
});

games.addEventListener("mouseover", () => {
  games.classList.add("hover-effect-games");
});
games.addEventListener("mouseout", () => {
  games.classList.remove("hover-effect-games");
});

hobbies.addEventListener("mouseover", () => {
  hobbies.classList.add("hover-effect-hobbies");
});
hobbies.addEventListener("mouseout", () => {
  hobbies.classList.remove("hover-effect-hobbies");
});

photo.addEventListener("mouseover", () => {
  photo.classList.add("photo-hover");
  aboutMe.style.opacity = 100;
});
photo.addEventListener("mouseout", () => {
  photo.classList.remove("photo-hover");
  aboutMe.style.opacity = 0;
});
