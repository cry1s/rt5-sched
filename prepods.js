var anime = document.getElementById("anime"),
    animewrapper = document.getElementById("anime-wrapper"),
    acont = document.getElementById("anime-content");

function animeShowHide() {
    animewrapper
        .classList
        .toggle("modal_active");
}

animewrapper.onclick = animeShowHide;
document
    .getElementsByClassName("anime-close-btn")[0]
    .onclick = animeShowHide;

anime.onclick = () => {
    animeShowHide();
};

prepods = {
    "Декан": "Юдачев Сергей Семенович",
    "Матан": "Келдыш Елизавета Петровна",
    "Прога": "Кротов Юрий Николаевич\nСемёнов Дмитрий Валериевич",
    "Физика": "????",
}
let table = acont.appendChild(document.createElement("table"));
for (lesson in prepods) {
    table.innerHTML += `<tr><td>${lesson}</td><td>${prepods[lesson]}</td></tr>`
}