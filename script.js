const btnSuperficie = document.querySelector('.superficie');
const modale = document.querySelector('.section-modale-superficie');
const sectionBtn = document.querySelector('.section-boutton-superficie');


btnSuperficie.addEventListener('click', function (e){
    modale.style.display = "flex";
    sectionBtn.style.display = "none";
})

document.querySelector('.fa-xmark').addEventListener('click', function () {
    modale.style.display = "none";
    sectionBtn.style.display = "flex";    
})





