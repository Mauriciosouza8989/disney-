document.addEventListener("DOMContentLoaded", ()=>{
    const buttons = document.querySelectorAll("[data-tab-button]");
    const questions = document.querySelectorAll("[data-faq-question]");

    const heroSection = document.querySelector('.hero');
    const heightHero = heroSection.clientHeight;

    window.addEventListener("scroll", () => {
        const currentPosition = window.scrollY;
        if(currentPosition < heightHero) {
            hideHeaderElements();
        }else{
            showHeaderElements();
        }

    })


    //Seção de atração. Programação dass abas
    for (let i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", (button)=>{
            const abaAlvo = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            hideAllTabs();
            tab.classList.add("shows__list--is-active")
            removeActiveButton();
            button.target.classList.add("shows__tabs__button--is-active")
        });
    }

    //Seção FAQ, acordions
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", showOrHideAnswer);
    }
});


function hideHeaderElements(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}
function showHeaderElements(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function removeActiveButton(){
    const buttons = document.querySelectorAll("[data-tab-button]");
    for (let i=0; i<buttons.length; i++){
        buttons[i].classList.remove("shows__tabs__button--is-active");
    }
}

function hideAllTabs(){
    const tabContainer = document.querySelectorAll("[data-tab-id]");
    for (let i = 0; i < tabContainer.length; i++ ){
        tabContainer[i].classList.remove("shows__list--is-active");
    }
}

function showOrHideAnswer(element){
    const className = "faq__questions__item--is-open";
    const fatherElement = element.target.parentNode;
    fatherElement.classList.toggle(className);
}