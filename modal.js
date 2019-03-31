var modal = document.getElementById("modal"),
    modalwrapper = document.getElementById("modal-wrapper"),
    mcont = document.getElementsByClassName("modal-content")[0];

function modalShowHide() {
    modalwrapper
        .classList
        .toggle("modal_active");
}

modalwrapper.addEventListener("click", modalShowHide);
document
    .getElementsByClassName("modal-close-btn")[0]
    .addEventListener("click", modalShowHide);

modal.addEventListener("click", () => {
    event.preventDefault();
    modalShowHide();
});

for (let i = 0; i < lessonTime.length; i++) {
    let tempElement = document.createElement("p");
    tempElement.innerHTML = `${i + 1} пара: ${
		zeroBefore(Math.floor(lessonTime[i][0].start 	/ 60))}:${zeroBefore(lessonTime[i][0].start 	% 60)} - ${
		zeroBefore(Math.floor(lessonTime[i][0].end 		/ 60))}:${zeroBefore(lessonTime[i][0].end 		% 60)} ... ${
		zeroBefore(Math.floor(lessonTime[i][1].start 	/ 60))}:${zeroBefore(lessonTime[i][1].start 	% 60)} - ${
		zeroBefore(Math.floor(lessonTime[i][1].end 		/ 60))}:${zeroBefore(lessonTime[i][1].end 		% 60)}`;
    mcont.appendChild(tempElement);
}