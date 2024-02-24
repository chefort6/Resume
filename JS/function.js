const colorButton = document.getElementById("color-button");
const main = document.querySelector(".main");
const left = document.querySelector(".left");
const allP1Elements = document.querySelectorAll(".p1");
const allHeadElements = document.querySelectorAll(".head");
const allP3Elements = document.querySelectorAll(".p3");
const allP2Elements = document.querySelectorAll(".p2");
const allSkillElements = document.querySelectorAll(".skill");
const allSkillContainerElements = document.querySelectorAll(".skill-container");
const allIcons3Elements = document.querySelectorAll(".icons3");

let isDarkMode = false;

colorButton.addEventListener("click", () => {
  if (isDarkMode) {
    
    main.style.backgroundColor = 'white';
    left.style.backgroundColor = 'black';

    allSkillContainerElements.forEach((element) => {
      element.style.backgroundColor = 'transparent';
    });

    allP1Elements.forEach((element) => {
      element.style.color = 'white';
    });

    allHeadElements.forEach((element) => {
      element.style.color = 'black';
    });

    allP3Elements.forEach((element) => {
      element.style.color = 'black';
    });

    allP2Elements.forEach((element) => {
      element.style.color = 'black';
    });

    allSkillElements.forEach((element) => {
      element.style.backgroundColor = 'white';
    });

    allIcons3Elements.forEach((element) => {
      element.style.color = 'black';
    });

    isDarkMode = false;
  } else {
  
    main.style.backgroundColor = 'black';
    left.style.backgroundColor = 'white';

    allSkillContainerElements.forEach((element) => {
      element.style.backgroundColor = 'gray';
    });

    allP1Elements.forEach((element) => {
      element.style.color = 'black';
    });

    allHeadElements.forEach((element) => {
      element.style.color = 'white';
    });

    allP3Elements.forEach((element) => {
      element.style.color = 'white';
    });

    allP2Elements.forEach((element) => {
      element.style.color = 'white';
    });

    allSkillElements.forEach((element) => {
      element.style.backgroundColor = 'black';
    });

    allIcons3Elements.forEach((element) => {
      element.style.color = 'white';
    });

    isDarkMode = true;
  }
});
