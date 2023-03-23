
//JSON
const curso = {
    title: "Harry Potter",
    url: "https://caminho.com/imagem",
};

//HTML

const img = document.createElement("img");
const listBanners = document.querySelector(".list-banners")

img.src = "imagens/Curso-JavaScript-Thumbnail.jpg";
img.alt = "Curso de JavaScrip ";
img.classList.add("main-banners");

listBanners.insertAdjacentElement("beforeend", img);