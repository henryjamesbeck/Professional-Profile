'use strict';

const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {

    //Button Click Active Class
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener("click", function() {
            let currentBtn = document.querySelector(".active-btn");
            currentBtn.className = currentBtn.className.replace("active-btn", "");
            this.className += " active-btn";
        });
    }

    //Sections Active Class
    allSections.addEventListener("click", (event) => {
        const id = event.target.dataset.id;
        if(id) {
            //Remove selected from the other button
            sectBtns.forEach((btn) => {
                btn.classList.remove("active");
            });

            event.target.classList.add("active");

            //Hide other sections
            sections.forEach((sections) => {
                sections.classList.remove("active");
            });

            const element = document.getElementById(id);
            element.classList.add("active");

        }
    });

    //Toggle Theme
    const themeBtn = document.querySelector(".theme-btn")
    themeBtn.addEventListener("click", () => {
        let element = document.body;
        element.classList.toggle("light-mode");
    });

}





PageTransitions();











