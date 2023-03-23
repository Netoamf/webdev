
//JSON
const curso = {
    title: "Harry Potter",
    url: "https://caminho.com/imagem",
};

//HTML

const figure = document.createElement("figcaption");
const img = document.createElement("img");
const listBanners = document.querySelector(".list-banners");
const title = document.createElement("figcaption");

figure.classList.add("wrapper-banners");

img.src = "imagens/Curso-JavaScript-Thumbnail.jpg";
img.alt = "Curso de JavaScrip ";
img.classList.add("main-banners");

title.textContent = "JavaScript";
title.classList.add("main-caption")

figure.insertAdjacentElement("beforeend",img);
figure.insertAdjacentElement("beforeend",title);


listBanners.insertAdjacentElement("beforeend", figure);
