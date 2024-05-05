let skills = document.querySelector(".skills");
let achievements = document.querySelector(".achievements");
let games = document.querySelector(".my-games");
let hobbies = document.querySelector(".hobbies");
let photo = document.querySelector(".photo");
let aboutMe = document.querySelector(".about-me");

let skillsDesc = document.querySelector(".skills-description");
let achievementsDesc = document.querySelector(".achievements-description");
let hobbiesDesc = document.querySelector(".hobbies-description");
let gamesDesc = document.querySelector(".my-games-description");

let mainPage = document.querySelector(".main-page");
let backButtons = document.querySelectorAll(".back-button");

skills.addEventListener("mouseover", () => {
  skills.classList.add("hover-effect-skills");
});
skills.addEventListener("mouseout", () => {
  skills.classList.remove("hover-effect-skills");
});
skills.addEventListener("click", () => {
  mainPage.classList.add("hidden");
  skillsDesc.classList.remove("hidden");
});

achievements.addEventListener("mouseover", () => {
  achievements.classList.add("hover-effect-achievements");
});
achievements.addEventListener("mouseout", () => {
  achievements.classList.remove("hover-effect-achievements");
});
achievements.addEventListener("click", () => {
  mainPage.classList.add("hidden");
  achievementsDesc.classList.remove("hidden");
});

games.addEventListener("mouseover", () => {
  games.classList.add("hover-effect-games");
});
games.addEventListener("mouseout", () => {
  games.classList.remove("hover-effect-games");
});
games.addEventListener("click", () => {
  mainPage.classList.add("hidden");
  gamesDesc.classList.remove("hidden");
});

hobbies.addEventListener("mouseover", () => {
  hobbies.classList.add("hover-effect-hobbies");
});
hobbies.addEventListener("mouseout", () => {
  hobbies.classList.remove("hover-effect-hobbies");
});
hobbies.addEventListener("click", () => {
  mainPage.classList.add("hidden");
  hobbiesDesc.classList.remove("hidden");
});

photo.addEventListener("mouseover", () => {
  photo.classList.add("photo-hover");
  aboutMe.style.opacity = 100;
});
photo.addEventListener("mouseout", () => {
  photo.classList.remove("photo-hover");
  aboutMe.style.opacity = 0;
});

for (backButton of backButtons) {
  backButton.addEventListener("click", () => {
    mainPage.classList.remove("hidden");
    if (!skillsDesc.classList.contains("hidden"))
      skillsDesc.classList.add("hidden");
    else if (!achievementsDesc.classList.contains("hidden"))
      achievementsDesc.classList.add("hidden");
    else if (!hobbiesDesc.classList.contains("hidden"))
      hobbiesDesc.classList.add("hidden");
    else if (!gamesDesc.classList.contains("hidden"))
      gamesDesc.classList.add("hidden");
  });
}
